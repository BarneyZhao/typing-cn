import React from 'react';
import { Row, Col } from 'antd';
// import { CoffeeOutlined } from '@ant-design/icons';

import './About.less';
import avatar from '@/assets/avatar.jpg';
import wechatpay from '@/assets/wechatpay.jpg';
import alipay from '@/assets/alipay.jpg';

const About: React.FC = () => {
    return (
        <div>
            <Row>
                <Col offset="1" flex="150px">
                    <img className="About__img" src={avatar} alt="" />
                </Col>
                <Col offset="1" className="About__desc">
                    <p></p>
                    <p>
                        <span>你好呀，我是Barney，一个喜欢键盘的前端程序员。</span>
                    </p>
                    <p>
                        <span>做这个网站</span>
                        <span>起初是因为苦于中文打字的网站在打好拼音后</span>
                        <span>（不会五笔）</span>
                        <span>都需要选字，导致打起来没有打英文的畅快感，</span>
                        <span>所以自己动手撸了一个只用打拼音字母的网站。</span>
                    </p>
                    <p>
                        <span>UI布局参考的这个网站：</span>
                        <a href="https://10fastfingers.com/typing-test/english">10fastfingers</a>
                    </p>
                    <p>
                        <span>可选主题参考的这个网站：</span>
                        <a href="https://typings.gg/">typings.gg</a>
                    </p>
                    <p>
                        <span>这个网站分享了以后发现大家还挺喜欢的（分享在这儿：</span>
                        <a href="https://www.zfrontier.com/app/flow/4K1P89Yb8LPl">zfrontier</a>
                        <span>）</span>
                    </p>
                    <p>
                        接下来计划<span className="About__deleteline">抄</span>
                        <span>借鉴一下这个网站的效果（</span>
                        <a href="https://monkey-type.com/">monkey-type</a>）
                        <span>体验一下另一种打字玩具。</span>
                    </p>
                    <p>
                        为了能<span className="About__deleteline">赚点键盘/键帽钱</span>
                        <span>得到大家的反馈，</span>
                        <span>知道有人喜欢这个玩具，</span>
                        <span>我才有动力继续在这上面花时间来完善它。</span>
                    </p>
                    <p>反馈的方式嘛，(#^.^#)喜欢的各位支持一下呀~~~</p>
                    <div style={{ paddingLeft: 35 }}>
                        <Row className="DonatePop__imgbox">
                            <Col className="DonatePop__img" flex="auto">
                                <img src={wechatpay} alt="wechatpay" />
                            </Col>
                            <Col className="DonatePop__divide" flex="30px"></Col>
                            <Col className="DonatePop__img" flex="auto">
                                <img src={alipay} alt="alipay" />
                            </Col>
                        </Row>
                    </div>
                    <p></p>
                    <p>新功能说不定也会更快出来~</p>
                    <p>最后感谢各位喜欢这个玩具~</p>
                    <p></p>
                    <p></p>
                </Col>
            </Row>
        </div>
    );
};

export default About;
