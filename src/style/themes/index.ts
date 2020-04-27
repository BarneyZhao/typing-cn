import client from 'webpack-theme-color-replacer/client';
import def from './default';
import carbon from './carbon';
import yellowLine from './yellowLine';

// let curColor: string[] = [];
// console.log(process.env.WEBPACK_VAL_replaceColorVal);

const seq = (process.env.WEBPACK_VAL_replaceColorKey as unknown) as string[];
// console.log(seq);

export const changeColor = (themeObj: any) => {
    const newColors = seq.map((k) => {
        if (k === 'ant-hover-color' && themeObj['@primary-color']) {
            return client.varyColor.lighten(themeObj['@primary-color'], 0.1);
        }
        return themeObj[k] || def[k];
    });
    // console.log(client.varyColor.lighten(themeObj['@primary-color'], 0.1));

    const options = {
        newColors, // new colors array, one-to-one corresponde with `matchColors`
        // appendToEl: 'head', //optional. The element selector for appending child with `<style>`, default is 'body'. Using `appendToEl: 'body'` can make the css priority higher than any css in <head>
        changeUrl(cssUrl: string) {
            return `${process.env.REACT_APP_DOMAIN || ''}/${cssUrl}`; // while router is not `hash` mode, it needs absolute path
        },
    };

    client.changer.changeColor(options, Promise).then(() => {
        // curColor = newColors;
        console.log('Theme colors changed!');
    });
};

export const carbonTheme = () => {
    changeColor(carbon);
};

export default [{ ...def }, { ...carbon }, { ...yellowLine }];
