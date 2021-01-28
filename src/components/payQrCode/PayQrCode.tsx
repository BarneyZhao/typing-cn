/*
 * @Author: zhaoxuanzi
 * @Date: 2021-01-28 15:53:30
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-01-28 15:56:05
 */
import React from 'react';
import { Row, Col } from 'antd';

import './PayQrCode.less';
import wechatpay from '@/assets/wechatpay.jpg';
import alipay from '@/assets/alipay.jpg';

const PayQrCode: React.FC = () => {
    return (
        <Row className="PayQrCode__imgbox">
            <Col className="PayQrCode__img" flex="auto">
                <img src={wechatpay} alt="wechatpay" />
            </Col>
            <Col className="PayQrCode__divide" flex="30px"></Col>
            <Col className="PayQrCode__img" flex="auto">
                <img src={alipay} alt="alipay" />
            </Col>
        </Row>
    );
};

export default PayQrCode;
