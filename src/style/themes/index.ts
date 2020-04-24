import client from 'webpack-theme-color-replacer/client';
import def from './default';
import carbon from './carbon';

// 和 webpack.config.js 中的顺序要一致
const seq = [
    '@primary-color',
    'ant-hover-color',
    '@body-back-color',
    '@text-color-bright',
    '@home-window-back-color',
    '@home-window-text-color',
    '@home-window-text-acting-back-color',
    '@home-el-focus-color',
    '@home-countdown-back-color',
];

export const changeColor = (themeObj: any) => {
    const options = {
        newColors: seq.map((k) => themeObj[k]), // new colors array, one-to-one corresponde with `matchColors`
        // appendToEl: 'head', //optional. The element selector for appending child with `<style>`, default is 'body'. Using `appendToEl: 'body'` can make the css priority higher than any css in <head>
        changeUrl(cssUrl: string) {
            return `${process.env.REACT_APP_DOMAIN || ''}/${cssUrl}`; // while router is not `hash` mode, it needs absolute path
        },
    };

    client.changer.changeColor(options, Promise).then(() => {
        console.log('Theme colors changed!');
    });
};

export const carbonTheme = () => {
    changeColor(carbon);
};

export default [{ ...def }, { ...carbon }];
