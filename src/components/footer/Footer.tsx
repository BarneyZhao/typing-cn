/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-01-28 19:30:16
 */
import React from 'react';

import './Footer.less';

import { storeConnect, MapState as S, MapDispatch as D } from '@/store';

const Footer: React.FC<S & D> = (props) => (
    <div className="app-footer">
        {props.$state.root.backImgUrl && (
            <img className="back__img" src={props.$state.root.backImgUrl} alt="" />
        )}
    </div>
);

export default storeConnect(Footer);
