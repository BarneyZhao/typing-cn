import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Button, Radio, Modal, Tabs, Input, Tooltip, Popover } from 'antd';
import {
    SettingOutlined,
    AppstoreOutlined,
    InsertRowBelowOutlined,
    SoundOutlined,
    HeartTwoTone,
    BellOutlined,
    BarsOutlined,
    CarryOutOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

import './Header.less';
import { storeConnect, MapState, MapDispatch } from '@/store/index';
import WORDS from '@/words';
// import { getPinyin } from '@/utils/pinyin';

import themeList, { changeTheme } from '@/themes';

import DonatePop from '../donatePop/DonatePop';

const reg = /^[\u2E80-\u9FFF]+$/;
const defaultWordStr = WORDS.map((item) => item.label).join('|');

const ROUTE_HEADER_CONFIG: Record<string, (1 | 0)[]> = {
    '/': [1, 1, 1],
    '/monkey': [1, 1, 0],
    '/sentence': [1, 0, 0],
    '/training': [1, 0, 0],
    '/test': [1, 0, 0],
    '/about': [1, 0, 0],
};

const Header: React.FC<MapState & MapDispatch> = (props) => {
    const [settingModalVisible, setSettingModalVisible] = useState(false);
    const [themeModalVisible, setThemeModalVisible] = useState(false);
    const [wordsMode, setWordsMode] = useState(props.$state.root.wordsMode);
    const defaultWordsRef = useRef(defaultWordStr);
    const [words, setWords] = useState(
        props.$state.root.customerWords && props.$state.root.customerWords.length !== 0
            ? props.$state.root.customerWords.map((item) => item.label).join('|')
            : defaultWordStr
    );
    const [errorWordList, setErrorWordList] = useState<string[]>([]);

    const { search, pathname } = useLocation();
    const navigate = useNavigate();

    const onUiSizeChange = (evt: any) => {
        props.$dispatch('setUiScale', evt.target.value);
    };
    const handleModalOk = async () => {
        if (wordsMode === '1') {
            props.$dispatch('setWordsMode', wordsMode);
            setSettingModalVisible(false);
            return;
        }
        const inputWordList = Array.from(new Set(words.split('|').filter(Boolean)));
        const errorList: string[] = [];
        if (inputWordList.length === 0) errorList.push('请输入字词，并以符号|间隔');
        inputWordList.forEach((word) => {
            if (!reg.test(word)) errorList.push(word);
        });
        setErrorWordList(errorList);
        if (errorList.length === 0) {
            const { getPinyin } = await import('@/utils/pinyin');
            props.$dispatch('setWordsMode', wordsMode);
            setWords(inputWordList.join('|'));
            console.time('getPinyin');
            const actWordList = inputWordList.map((word) => ({
                label: word,
                text: getPinyin(word),
            }));
            console.timeEnd('getPinyin');

            props.$dispatch('saveCustomerWords', actWordList);
            setSettingModalVisible(false);
        }
    };
    const onTabsChange = (activeKey: string) => {
        setWordsMode(activeKey);
        setErrorWordList([]);
    };
    const onTextInput = (evt: any) => {
        setWords(evt.target.value);
    };
    const themeBlockClick = (theme: any) => {
        const href = window.location.href;
        if (href.includes('#') && href.includes('?')) {
            window.location.href = href.split('?')[0];
        }
        props.$dispatch('setUiTheme', theme.name);
    };

    const go = (route: string) => {
        navigate(route);
    };

    useEffect(() => {
        if (search) {
            const themeObj = themeList.find((th) => th.name === search.slice(1).replace('-', ' '));
            if (themeObj) {
                changeTheme(themeObj);
            }
        } else if (props.$state.root.uiTheme) {
            const themeObj = themeList.find((th) => th.name === props.$state.root.uiTheme);
            if (themeObj) {
                changeTheme(themeObj);
            }
        }
    }, [search, props.$state.root.uiTheme]);

    return (
        <div className="app-header">
            <Row>
                <Col flex="auto">
                    <Button
                        tabIndex={-1}
                        type="link"
                        icon={<InsertRowBelowOutlined />}
                        onClick={() => go('')}
                    >
                        模式1(限时)
                    </Button>
                    <Button
                        tabIndex={-1}
                        type="link"
                        icon={<BellOutlined />}
                        onClick={() => go('monkey')}
                    >
                        模式2(计时)
                    </Button>
                    <Button
                        tabIndex={-1}
                        type="link"
                        icon={<BarsOutlined />}
                        onClick={() => go('sentence')}
                    >
                        模式3(句子)
                    </Button>
                    <Button
                        tabIndex={-1}
                        type="link"
                        icon={<CarryOutOutlined />}
                        onClick={() => go('training')}
                    >
                        指法练习
                    </Button>
                    <Button
                        tabIndex={-1}
                        type="link"
                        icon={<SoundOutlined />}
                        onClick={() => go('test')}
                    >
                        按键声音反馈
                    </Button>
                    <Popover placement="bottomLeft" content={<DonatePop go={go} />}>
                        <Button
                            tabIndex={-1}
                            className="heartBeat"
                            type="link"
                            icon={<HeartTwoTone twoToneColor="#9D0500" />} // AKIRA red
                            onClick={() => go('about')}
                        >
                            求打赏
                        </Button>
                    </Popover>
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col flex="auto">
                    <Button
                        tabIndex={-1}
                        type="link"
                        style={{ display: ROUTE_HEADER_CONFIG[pathname]?.[0] ? '' : 'none' }}
                        icon={<AppstoreOutlined />}
                        onClick={() => setThemeModalVisible(true)}
                    >
                        主题
                    </Button>
                    <Button
                        tabIndex={-1}
                        type="link"
                        style={{ display: ROUTE_HEADER_CONFIG[pathname]?.[1] ? '' : 'none' }}
                        icon={<SettingOutlined />}
                        onClick={() => setSettingModalVisible(true)}
                    >
                        词组设置
                    </Button>
                    <div
                        style={{
                            display: ROUTE_HEADER_CONFIG[pathname]?.[2] ? 'inline-block' : 'none',
                        }}
                    >
                        <span className="radio-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;UI尺寸:&nbsp;&nbsp;
                        </span>
                        <Radio.Group
                            onChange={onUiSizeChange}
                            defaultValue={props.$state.root.uiScale}
                        >
                            <Radio tabIndex={-1} value="s">
                                正常
                            </Radio>
                            <Radio tabIndex={-1} value="m">
                                大
                            </Radio>
                            <Radio tabIndex={-1} value="l">
                                特大
                            </Radio>
                        </Radio.Group>
                    </div>
                </Col>
            </Row>
            <Modal
                className="header-modal-setting"
                title=""
                visible={settingModalVisible}
                closable={false}
                maskClosable={false}
                footer={
                    <Tooltip placement="left" title="将自动去除重复词组">
                        <Button
                            tabIndex={-1}
                            className="header-modal-confirm-btn"
                            type="primary"
                            onClick={handleModalOk}
                        >
                            确定
                        </Button>
                    </Tooltip>
                }
            >
                <Tabs defaultActiveKey={wordsMode} onChange={onTabsChange}>
                    <Tabs.TabPane tab="默认词组" key="1">
                        <Input.TextArea
                            autoSize={{ minRows: 9, maxRows: 16 }}
                            disabled
                            defaultValue={defaultWordsRef.current}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="自定义词组" key="2">
                        <Input.TextArea
                            autoSize={{ minRows: 9, maxRows: 16 }}
                            value={words}
                            onChange={onTextInput}
                        />
                    </Tabs.TabPane>
                </Tabs>
                <Row className="header-modal--words-length">
                    <Col span={12}>
                        <Row gutter={6} className="error-word">
                            {errorWordList.map((err, index) => (
                                <Col key={index}>{err}</Col>
                            ))}
                        </Row>
                    </Col>
                    <Col span={12} className="header-modal--total">
                        共(
                        {wordsMode === '1'
                            ? defaultWordsRef.current.split('|').length
                            : words.split('|').filter(Boolean).length}
                        )个词
                    </Col>
                </Row>
            </Modal>
            <Modal
                className="header-modal-theme"
                title=""
                visible={themeModalVisible}
                footer=""
                onCancel={() => setThemeModalVisible(false)}
            >
                <Row justify="space-around" className="header-modal-theme--box">
                    {themeList.map((theme, index) => (
                        <Col
                            flex="100px"
                            className="theme-display-block"
                            key={index}
                            style={{
                                backgroundColor: theme.bgColor,
                                color: theme.textColor,
                            }}
                            onClick={() => themeBlockClick(theme)}
                        >
                            {theme.name}
                        </Col>
                    ))}
                    <Col flex="100px"></Col>
                    <Col flex="100px"></Col>
                    <Col flex="100px"></Col>
                    <Col flex="100px"></Col>
                </Row>
            </Modal>
            {/* <div>router examples.(with code split lazy load, check js files in network)</div>
            <ul>
                <li>
                    <Link to="/">/home</Link>
                </li>
                <li>
                    <Link to="/about/urlValue">/about/urlValue</Link>
                </li>
                <li>
                    <Link to="/dashboard">/dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/graph/123">/dashboard/graph/123</Link>
                </li>
                <li>
                    <Link to="/dashboard/list">/dashboard/list</Link>
                </li>
            </ul> */}
        </div>
    );
};

export default storeConnect(Header);
