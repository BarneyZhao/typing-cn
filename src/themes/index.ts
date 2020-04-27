import less from 'less';
import def from './default';
import carbon from './carbon';
// import yellowLine from './yellowLine';
import olivia from './olivia';
import t9009 from './9009';
import oblivion from './oblivion';
import godspeed from './godspeed';
import nautilus from './nautilus';

export const changeColor = (themeObj: any) => {
    const temp = { ...themeObj };
    delete temp.name;
    delete temp.textColor;
    less.modifyVars(Object.assign({}, def, temp));
};

export default [
    { ...def },
    { ...carbon },
    // { ...yellowLine },
    { ...olivia },
    { ...t9009 },
    { ...oblivion },
    { ...godspeed },
    { ...nautilus },
];
