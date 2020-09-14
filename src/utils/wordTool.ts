import WORDS, { Word } from '@/words';

const wordTool = {
    shuffle(arr: any[]) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let rIndex = Math.floor(Math.random() * (i + 1));
            let temp = arr[rIndex];
            arr[rIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    },
    getWords(mode: string, propWords: Word[]) {
        if (mode !== '1' && propWords && propWords.length !== 0) {
            return wordTool.jsonCopy<Word[]>(propWords);
        } else {
            return wordTool.jsonCopy<Word[]>(WORDS);
        }
    },
    jsonCopy<T>(obj: object) {
        return JSON.parse(JSON.stringify(obj)) as T;
    },
};

export type WordType = Word;
export default wordTool;
