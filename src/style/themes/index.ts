import less from 'less';
import def from './default';
import carbon from './carbon';
import yellowLine from './yellowLine';

export const changeColor = (themeObj: any) => {
    const temp = { ...themeObj };
    delete temp.name;
    delete temp.textColor;
    less.modifyVars(temp);
};

export default [{ ...def }, { ...carbon }, { ...yellowLine }];
