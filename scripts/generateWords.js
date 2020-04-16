const FS = require('fs');
const Mustache = require('mustache');
const pinyin = require('chinese-to-pinyin');

const wordsStr = require('../words.json').words;

const wordsTemplate = `${__dirname}/../template/words.mustache`;
const wordsFile = `${__dirname}/../src/words.ts`;

const readTempAndWriteFile = (template, filePath, tempObj = {}) => {
    const tpl = FS.readFileSync(template, { encoding: 'utf8' });
    const fileContent = Mustache.render(tpl, tempObj);

    const jsonFile = FS.createWriteStream(filePath, {
        flags: 'w',
        defaultEncoding: 'utf8',
    });
    jsonFile.write(fileContent);
    jsonFile.end();
};

const wordList = wordsStr.split('|').map((str) => ({
    label: str,
    text: pinyin(str, { removeSpace: true, removeTone: true }),
}));

readTempAndWriteFile(wordsTemplate, wordsFile, { wordList });

console.log(`words: ${wordList.length}`);
console.log('done.');
