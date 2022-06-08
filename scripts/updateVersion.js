const packageJson = require('@npmcli/package-json');

const getZeroFillStr = (n) => (n < 10 ? '0' + n : n);

/**
 * 要在 build 之前更新 version
 * 'a'=97 ~ 'z'=122
 */
(async () => {
    const pkgJson = await packageJson.load('./');
    const version = pkgJson.content.version;
    const versionCode = version.slice(8);
    const nd = new Date();
    let newVersion = [
        nd.getFullYear(),
        getZeroFillStr(nd.getMonth() + 1),
        getZeroFillStr(nd.getDate()),
    ].join('');
    const isSameDay = version.startsWith(newVersion);

    if (!version || !versionCode || !isSameDay) {
        newVersion += 'a';
    } else {
        const codeArr = versionCode.split('');
        const lastCharCode = codeArr[codeArr.length - 1].charCodeAt(0);
        if (lastCharCode < 122) {
            codeArr.splice(codeArr.length - 1, 1, String.fromCharCode(lastCharCode + 1));
        } else {
            codeArr.push('a');
        }
        newVersion += codeArr.join('');
    }

    console.log(`\n Update version to ${newVersion}. \n`);
    pkgJson.update({ version: newVersion });
    await pkgJson.save();
})();
