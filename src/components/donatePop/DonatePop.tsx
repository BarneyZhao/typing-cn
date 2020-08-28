import React from 'react';
import { Row, Col, Button } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';

import './DonatePop.less';
import wechatpay from '@/assets/wechatpay.jpg';
import alipay from '@/assets/alipay.jpg';

const DonatePop: React.FC<{ go: Function }> = (props) => {
    return (
        <div>
            <div>
                哈喽~玩的开心吗？开心的话请我喝杯咖啡
                <CoffeeOutlined />
                如何~
            </div>
            <Row className="DonatePop__imgbox">
                <Col className="DonatePop__img" flex="auto">
                    <img src={wechatpay} alt="wechatpay" />
                </Col>
                <Col className="DonatePop__divide" flex="30px"></Col>
                <Col className="DonatePop__img" flex="auto">
                    <img src={alipay} alt="alipay" />
                </Col>
            </Row>
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
