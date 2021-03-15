/*
 * @Author: zhaoxuanzi
 * @Date: 2021-02-19 17:21:14
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-03-12 18:50:01
 */
import React from 'react';
import { Row, Col } from 'antd';

import './Keyboard.less';
import layout from './layout.json';

interface Props {
    highlightKeys: Set<string>;
    correctedKey?: string;
    wrongKey?: string;
    finishAnimate?: (key: string) => void;
    blurKeys?: Set<string>;
}

const layoutRenderConfig = layout.map((row) => {
    const newRow: { w: number; t: string }[] = [];
    row.forEach((colOrSet, index) => {
        if (typeof colOrSet === 'string') {
            let temp = { w: 1, t: colOrSet };

            // 检查json关于键的配置
            const prevCol = row[index - 1];
            if (index > 0 && typeof prevCol === 'object') {
                temp = { w: prevCol.w, t: colOrSet };
            }
            newRow.push(temp);
        }
    });
    return newRow;
});

const Keyboard: React.FC<Props> = (props) => {
    const delayFinish = (pureKey: string) => {
        setTimeout(() => {
            props.finishAnimate && props.finishAnimate(pureKey);
        }, 250);
    };
    const getColClass = (key: string) => {
        let classStr = 'key-item';
        if (key === '') {
            classStr += ' placeholder';
        } else {
            const pureKey = key.split('\n').pop() || '';
            if (props.highlightKeys.has(pureKey)) {
                classStr += ' high-light';
            }
            if (props.correctedKey && props.correctedKey === pureKey) {
                classStr += ' keyCorrect';
                delayFinish(pureKey);
            }
            if (props.wrongKey && props.wrongKey === pureKey) {
                classStr += ' headShake';
                delayFinish(pureKey);
            }
            if (props.blurKeys && props.blurKeys.has(pureKey)) {
                classStr += ' blur';
            }
        }
        return classStr;
    };
    return (
        <div className="Keyboard">
            {layoutRenderConfig.map((row, ri) => (
                <Row key={ri} justify="space-between">
                    {row.map((col, ci) => (
                        <Col
                            className={getColClass(col.t)}
                            key={ci}
                            style={{ width: `${60 * col.w}px` }}
                            dangerouslySetInnerHTML={{ __html: col.t.replace('\n', '<br>') }}
                        >
                            {/* {col.t.replace('\n', '<br>')} */}
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
};

export default Keyboard;
