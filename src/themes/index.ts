/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-02-18 10:48:01
 */
import site from '@/utils/siteIcon';

import list from './config';

export default list;

export const changeTheme = (theme: typeof list[0]) => {
    // const temp = { ...themeObj };
    site.setSiteIcon(theme.bgColor, theme.textColor);
    // delete temp.name;
    // delete temp.textColor;
    // Object.entries<string>(Object.assign({}, def, temp)).forEach(([k, v]) => {
    //     document.body.style.setProperty(k, v);
    // });
    const themeLinkEl = document.querySelector('#current-theme');
    if (!themeLinkEl) return;
    const oldUrl = themeLinkEl.getAttribute('href') || '';
    themeLinkEl.setAttribute(
        'href',
        oldUrl.substring(0, oldUrl.lastIndexOf('/')) + `/${theme.name.replace(' ', '-')}.css`
    );
};
