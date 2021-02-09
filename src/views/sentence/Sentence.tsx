/*
 * @Author: zhaoxuanzi
 * @Date: 2021-02-07 18:14:54
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-02-09 21:35:45
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Row, Col, Radio, Input, Spin } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import './Sentence.less';

import wordTool from '@/utils/wordTool';
import TypeResult from '@/components/typeResult/TypeResult';
import ReloadBtn from '@/components/reloadBtn/ReloadBtn';

interface CharObj {
    char: string;
    isCorrect: boolean | null;
}
interface SentenceObj {
    sentence: string;
    charArr: CharObj[];
}

const SPACE_CODE = 32;
const ENTER_CODE = 13;
// eslint-disable-next-line no-control-regex
const CN_REX = /^[^\x00-\xff]+$/; // 双字节字符

const getSentences: () => Promise<{ default: string[] }> = () => import('./sentences.json');

const Sentence: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const inputRef = useRef(null);
    const sentencesBaseRef = useRef<string[]>([]);
    const [sentenceArr, setSentenceArr] = useState<SentenceObj[]>([]);
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(5);
    const [userInput, setUserInput] = useState('');
    const [isFadingTypeMain, setIsFadingTypeMain] = useState(false);
    const [showTypeResult, setShowTypeResult] = useState(false);
    const typeResultRef = useRef({
        cpm: '',
        right: 0,
        wrong: 0,
        acc: 0,
        time: { begin: 0, secs: 0 },
    });

    const userInputChange = (value: string) => {
        if (value === ' ' || showTypeResult) return;
        setUserInput(value);
        if (!CN_REX.test(value)) return;
        setSentenceArr((_senArr) => {
            const tempArr = [..._senArr];
            const actingSen = { ...tempArr[sentenceIndex] };
            for (let index = 0; index < value.length; index++) {
                if (actingSen.charArr[index]) {
                    actingSen.charArr[index].isCorrect =
                        value.charAt(index) === actingSen.charArr[index].char;
                }
            }
            tempArr.splice(sentenceIndex, 1, actingSen);
            return tempArr;
        });
    };
    const inputKeyDown = (evt: React.KeyboardEvent) => {
        // console.log(evt.key, evt.keyCode, evt.metaKey);
        if (showTypeResult) {
            return;
        }
        if (typeResultRef.current.time.begin === 0) {
            typeResultRef.current.time.begin = Date.now();
        }
        if (evt.keyCode === ENTER_CODE || evt.keyCode === SPACE_CODE) {
            if (userInput.length >= sentenceArr[sentenceIndex].sentence.length) {
                if (sentenceIndex === sentenceArr.length - 1) {
                    const totalCharArr = sentenceArr.reduce((arr, item) => {
                        return [...arr, ...item.charArr];
                    }, [] as CharObj[]);
                    typeResultRef.current.right = totalCharArr.filter((w) => w.isCorrect).length;
                    typeResultRef.current.wrong = totalCharArr.length - typeResultRef.current.right;
                    typeResultRef.current.acc = Math.round(
                        (typeResultRef.current.right /
                            (typeResultRef.current.right + typeResultRef.current.wrong)) *
                            100
                    );
                    typeResultRef.current.time.secs = Math.round(
                        (Date.now() - typeResultRef.current.time.begin) / 1000
                    );
                    typeResultRef.current.cpm = (
                        typeResultRef.current.right /
                        (typeResultRef.current.time.secs / 60)
                    ).toFixed(2);
                    setIsFadingTypeMain(true);
                    setTimeout(() => {
                        setShowTypeResult(true);
                    }, 150);
                } else {
                    setSentenceIndex((_index) => _index + 1);
                    setUserInput('');
                }
            }
        }
    };

    const reloadWord = useCallback(() => {
        setUserInput('');
        setSentenceIndex(0);
        typeResultRef.current = {
            cpm: '',
            right: 0,
            wrong: 0,
            acc: 0,
            time: { begin: 0, secs: 0 },
        };
        sentencesBaseRef.current = wordTool.shuffle(sentencesBaseRef.current);
        setSentenceArr(
            wordTool
                .jsonCopy<string[]>(sentencesBaseRef.current.slice(0, sentenceCount))
                .map((sentence) => ({
                    sentence,
                    charArr: Array.from(sentence).map((char) => ({ char, isCorrect: null })),
                }))
        );

        setIsFadingTypeMain(false);
        setShowTypeResult(false);
        setTimeout(() => {
            (inputRef.current as any).focus();
        }, 10);
    }, [sentenceCount]);

    useEffect(() => {
        setIsLoading(true);
        getSentences().then((res) => {
            sentencesBaseRef.current = res.default;
            reloadWord();
            setIsLoading(false);
        });
    }, [reloadWord]);

    return (
        <div className="Sentence">
            <div className="word-count-radio">
                <Radio.Group
                    value={sentenceCount}
                    size="small"
                    onChange={(e: RadioChangeEvent) => {
                        setSentenceCount(e.target.value);
                    }}
                >
                    <Radio.Button tabIndex={-1} value={5}>
                        5
                    </Radio.Button>
                    <Radio.Button tabIndex={-1} value={10}>
                        10
                    </Radio.Button>
                    <Radio.Button tabIndex={-1} value={15}>
                        15
                    </Radio.Button>
                    <Radio.Button tabIndex={-1} value={20}>
                        20
                    </Radio.Button>
                </Radio.Group>
            </div>
            <Row justify="center" align="middle">
                <Col
                    flex="900px"
                    className={`type-main-box ${isFadingTypeMain ? 'fading' : ''} ${
                        showTypeResult ? 'hide' : ''
                    }`}
                >
                    <div className="sentence-line">
                        {sentenceArr[sentenceIndex] &&
                            sentenceArr[sentenceIndex].charArr.map((charObj, index) => (
                                <code
                                    className={`char ${
                                        charObj.isCorrect
                                            ? 'correct'
                                            : charObj.isCorrect === false
                                            ? 'wrong'
                                            : ''
                                    }`}
                                    key={index}
                                >
                                    {charObj.char}
                                </code>
                            ))}
                    </div>
                    <Spin spinning={isLoading} tip="加载中" className="sentence-loading">
                        <div></div>
                    </Spin>
                    <div className="sentence-input">
                        <Input
                            ref={inputRef}
                            value={userInput}
                            onChange={(e) => userInputChange(e.target.value)}
                            onKeyDown={inputKeyDown}
                        />
                    </div>
                    <div className="sentence-next">
                        {sentenceArr[sentenceIndex + 1] && sentenceArr[sentenceIndex + 1].sentence}
                    </div>
                    <div className="reload-line">
                        <ReloadBtn onClick={reloadWord} />
                    </div>
                    <div className={`tip-line`}>
                        <div>点击横线上方进入输入状态</div>
                        <div>输入正确中文和符号，然后空格或回车</div>
                        <div>
                            输入状态下<code>Tab</code>后回车可以直接刷新
                        </div>
                        <div>觉得有意思可以打赏一下(#^.^#)(在上面↑↑)</div>
                    </div>
                </Col>
                <Col flex="900px" className={`type-result-box ${showTypeResult ? 'show' : ''}`}>
                    {/* {JSON.stringify(typeResultRef.current)} */}
                    <TypeResult
                        desc="字/分钟"
                        numStr={typeResultRef.current.cpm}
                        acc={typeResultRef.current.acc}
                        secs={typeResultRef.current.time.secs}
                    />
                    <div className="reload-line">
                        <ReloadBtn onClick={reloadWord} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Sentence;
