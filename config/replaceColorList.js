const colorList = {
    '@primary-color': '#1890ff',
    '@link-color': '#1890ff',
    '@success-color': '#52c41a',
    '@error-color': '#f5222d',
    'ant-hover-color': '#40a9ff',
    '@body-back-color': '#282c34',
    '@text-color-bright': '#fffffe',
    '@home-window-back-color': '#fffffd',
    '@home-window-text-color': '#141414',
    '@home-window-text-acting-back-color': '0, 0, 0, 0.26',
    '@home-el-focus-color': '224, 237, 249, 0.21',
    '@home-countdown-back-color': '#666666',
};
const replaceColorKey = [];
const replaceColorVal = [];
Object.entries(colorList).forEach(([k, v]) => {
    replaceColorKey.push(k);
    replaceColorVal.push(v);
});

exports.colorList = colorList;
exports.replaceColorKey = replaceColorKey;
exports.replaceColorVal = replaceColorVal;
