/*
 * @Author: zhaoxuanzi
 * @Date: 2021-02-07 18:40:35
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-02-07 18:43:52
 */
import React from 'react';
import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

import './ReloadBtn.less';

interface Props {
    onClick: () => void;
}

const ReloadBtn: React.FC<Props> = (props) => {
    return (
        <Button
            className="ReloadBtn"
            onClick={props.onClick}
            type="primary"
            icon={<ReloadOutlined />}
        />
    );
};

export default ReloadBtn;
