/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-02-12 22:06:13
 */
import site from '@/utils/siteIcon';

import def from './default';
import carbon from './carbon';
import olivia from './olivia';
import t9009 from './9009';
import oblivion from './oblivion';
import godspeed from './godspeed';
import nautilus from './nautilus';
// import yellowLine from './yellowLine';
import avocado from './avocado';
import t2600 from './2600';
import konmomo from './konmomo';
import spaceCadet from './spaceCadet';
import shoko from './shoko';
import phYellow from './phYellow';
import yeeti from './yeeti';

export const changeColor = (themeObj: any) => {
    const temp = { ...themeObj };
    site.setSiteIcon(temp['--body-back-color'], temp.textColor || temp['--primary-color']);
    delete temp.name;
    delete temp.textColor;
    Object.entries<string>(Object.assign({}, def, temp)).forEach(([k, v]) => {
        document.body.style.setProperty(k, v);
    });
};

export default [
    { ...def },
    { ...carbon },
    { ...olivia },
    { ...t9009 },
    { ...oblivion },
    { ...godspeed },
    { ...nautilus },
    // { ...yellowLine },
    { ...avocado },
    { ...t2600 },
    { ...konmomo },
    { ...spaceCadet },
    { ...shoko },
    { ...phYellow },
    { ...yeeti },
];
