/*
 * @Author: zhaoxuanzi
 * @Date: 2021-02-07 17:56:59
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-02-08 11:29:26
 */
import React from 'react';
import { Row, Col } from 'antd';

import './TypeResult.less';

interface Props {
    desc: string;
    numStr: string;
    acc: number;
    secs: number;
}

const TypeResult: React.FC<Props> = (props) => {
    return (
        <div className="TypeResult">
            <Row justify="center" gutter={80}>
                <Col span={6}>
                    <div className="label">{props.desc}</div>
                    <div className="show-data">{props.numStr}</div>
                </Col>
                <Col span={6}>
                    <div className="label">正确率</div>
                    <div className="show-data">{props.acc}%</div>
                </Col>
                <Col span={6}>
                    <div className="label">用时</div>
                    <div className="show-data">{props.secs}s</div>
                </Col>
            </Row>
        </div>
    );
};

export default TypeResult;
