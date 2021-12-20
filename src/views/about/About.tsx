/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-01-28 21:20:06
 */
import React from 'react';
import { Row, Col, Button } from 'antd';

import './About.less';

import { storeConnect, MapState as S, MapDispatch as D } from '@/store';
import PayQrCode from '@/components/payQrCode/PayQrCode';
import avatar from '@/assets/avatar.jpg';

const About: React.FC<S & D> = (props) => {
    const setBackImgUrl = () => {
        // document.body.style.setProperty(
        //     '--body-back-img',
        //     'url("https://bing.ioliu.cn/v1/rand")'
        //     // 'url("https://api.paugram.com/wallpaper/?source=gt")'
        //     // 'url("https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture")'
        // );
        props.$dispatch(
            'setBackImgUrl',
            props.$state.root.backImgUrl ? '' : 'https://bing.ioliu.cn/v1/rand'
        );
    };
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
                        <span>模式一参考的这个网站：</span>
                        <a href="https://10fastfingers.com/typing-test/english">10fastfingers</a>
                    </p>
                    <p>
                        <span>模式二参考的这个网站：</span>
                        <a href="https://monkey-type.com/">monkey-type</a>
                    </p>
                    <p>
                        <span>可选主题参考的这个网站：</span>
                        <a href="https://typings.gg/">typings.gg</a>
                    </p>
                    <p>
                        <span>分享的帖子在这儿：</span>
                        <a href="https://www.zfrontier.com/app/flow/4K1P89Yb8LPl">zfrontier</a>
                    </p>
                    <p>(#^.^#)喜欢的各位可以打赏支持一下呀~~~</p>
                    <p>
                        <span>打赏可以留言告诉我一套你喜欢的键帽配色，我会添加到主题中</span>
                    </p>
                    <p>
                        <span>如果打赏支持的朋友多，</span>
                        <span>我也会花更多精力来更新这个玩具的ヾ(◍°∇°◍)ﾉﾞ</span>
                    </p>
                    <p>(左边微信 - 右边支付宝)</p>
                    <div style={{ paddingLeft: 35 }}>
                        <PayQrCode />
                    </div>
                    <p></p>
                    <p>最后感谢各位喜欢这个玩具~</p>
                    <p>
                        <Button
                            type="primary"
                            size="small"
                            className="About__lucky-btn"
                            onClick={setBackImgUrl}
                        >
                            {props.$state.root.backImgUrl ? '关闭背景' : '试试手气'}
                        </Button>
                    </p>
                    <p></p>
                    <p></p>
                </Col>
            </Row>
        </div>
    );
};

export default storeConnect(About);
