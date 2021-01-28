/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-01-28 15:57:10
 */
import React from 'react';
import { Button } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';

import './DonatePop.less';
import PayQrCode from '@/components/payQrCode/PayQrCode';

const DonatePop: React.FC<{ go: Function }> = (props) => {
    return (
        <div>
            <div>
                哈喽~玩的开心吗？开心的话请我喝杯咖啡
                <CoffeeOutlined />
                如何~
            </div>
            <PayQrCode />
            <div>
                <Button type="link" onClick={() => props.go('/about')}>
                    关于这个网站
                </Button>
                <span>给你一个打赏我的理由~</span>
            </div>
        </div>
    );
};

export default DonatePop;
