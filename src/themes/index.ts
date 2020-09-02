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

export const changeColor = (themeObj: any) => {
    const temp = { ...themeObj };
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
];
