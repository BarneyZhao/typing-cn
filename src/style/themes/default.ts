export default {
    name: 'default',
    textColor: '#fffffe',
    ...((process.env.WEBPACK_VAL_COLOR_LIST as unknown) as Object),
} as any;
