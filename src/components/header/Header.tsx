import React, { useState, useRef } from 'react';
import { Row, Col, Button, Radio, Modal, Tabs, Input, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import './Header.scss';
import { storeConnect, MapState, MapDispatch } from '@/store/index';
import WORDS from '@/words';
import { getPinyin } from '@/utils/pinyin';

const reg = /^[\u2E80-\u9FFF]+$/;
const defaultWordStr = WORDS.map((item) => item.label).join('|');

const Header: React.FC<MapState & MapDispatch> = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [wordsMode, setWordsMode] = useState(props.$state.root.wordsMode);
    const defaultWordsRef = useRef(defaultWordStr);
    const [words, setWords] = useState(
        props.$state.root.customerWords && props.$state.root.customerWords.length !== 0
            ? props.$state.root.customerWords.map((item) => item.label).join('|')
            : defaultWordStr
    );
    const [errorWordList, setErrorWordList] = useState<string[]>([]);

    const onUiSizeChange = (evt: any) => {
        props.$dispatch('setUiScale', evt.target.value);
    };
    const handleModalOk = () => {
        const inputWordList = Array.from(new Set(words.split('|').filter(Boolean)));
        const errorList: string[] = [];
        if (inputWordList.length === 0) errorList.push('请输入字词，并以符号|间隔');
        inputWordList.forEach((word) => {
            if (!reg.test(word)) errorList.push(word);
        });
        setErrorWordList(errorList);
        if (errorList.length === 0) {
            props.$dispatch('setWordsMode', wordsMode);
            if (wordsMode === '2') {
                setWords(inputWordList.join('|'));
                console.time('getPinyin');
                const actWordList = inputWordList.map((word) => ({
                    label: word,
                    text: getPinyin(word),
                }));
                console.timeEnd('getPinyin');

                props.$dispatch('saveCustomerWords', actWordList);
            }
            setModalVisible(false);
        }
    };
    const onTabsChange = (activeKey: string) => {
        setWordsMode(activeKey);
    };
    const onTextInput = (evt: any) => {
        setWords(evt.target.value);
    };

    return (
        <div className="app-header">
            <Row>
                <Col flex="auto">
                    <Button
                        type="link"
                        ghost
                        icon={<SettingOutlined />}
                        onClick={() => setModalVisible(true)}
                    >
                        设置
                    </Button>
                    <span>UI尺寸:&nbsp;&nbsp;</span>
                    <Radio.Group onChange={onUiSizeChange} defaultValue={props.$state.root.uiScale}>
                        <Radio value="s">正常</Radio>
                        <Radio value="m">大</Radio>
                        <Radio value="l">特大</Radio>
                    </Radio.Group>
                </Col>
            </Row>
            <Modal
                title=""
                visible={modalVisible}
                closable={false}
                maskClosable={false}
                footer={
                    <Tooltip placement="left" title="将自动去除重复词组">
                        <Button type="primary" onClick={handleModalOk}>
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
                    <Col span={12}>
                        共(
                        {wordsMode === '1'
                            ? defaultWordsRef.current.split('|').length
                            : words.split('|').filter(Boolean).length}
                        )个词
                    </Col>
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
