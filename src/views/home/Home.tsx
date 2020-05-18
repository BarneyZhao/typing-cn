import { Input, Row, Col, Statistic, Button, Spin, Popover, InputNumber } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import { storeConnect, MapState, MapDispatch } from '@/store/index';
import WORDS, { Word } from '@/words';

const { Countdown } = Statistic;

const shuffle = (arr: any[]) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let rIndex = Math.floor(Math.random() * (i + 1));
        let temp = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
};
const getWords = (mode: string, propWords: Word[]) => {
    if (mode !== '1' && propWords && propWords.length !== 0) {
        return propWords;
    } else {
        return WORDS;
    }
};
const getCountdownStr = (value: number) => {
    const minutes = Math.floor(value / 60);
    const secs = value % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

const Home: React.FC<MapState & MapDispatch> = (props) => {
    const [loading, setLoading] = useState(true);
    const [deadline, setDeadline] = useState(0);
    const [actingWordIndex, setActingWordIndex] = useState(0);
    const [wordArr, setWordArr] = useState<Array<Word & { isCorrect: boolean | null }>>([]);
    const [wordInput, setWordInput] = useState('');
    const [typingEnd, setTypingEnd] = useState(false);
    const wordsBaseRef = useRef(
        getWords(props.$state.root.wordsMode, props.$state.root.customerWords)
    );
    const mainWindowEl = useRef(null);
    const mainInputEl = useRef(null);
    const wordIndexRef = useRef(0); // WORDS数组的下标
    const lineIndexLockRef = useRef(false); // 是否设置过第二行开头元素的下标
    const nextLineStartIndexRef = useRef(0);
    const lineCountRef = useRef(0);
    const timeStartRef = useRef(false);
    const oneLineHeightRef = useRef(53);
    const keystrokeCountRef = useRef(0);
    const countdownTimeRef = useRef(parseInt(props.$state.root.countdownTime, 10));
    const [deadlineText, setDeadlineText] = useState(getCountdownStr(countdownTimeRef.current));

    const countDownStart = () => {
        const time = countdownTimeRef.current;
        setDeadline(Date.now() + time * 1000);
    };
    const pushWordToArr = (isInit?: boolean) => {
        setWordArr((arr) => {
            const wordsTemp = [...wordsBaseRef.current];
            if (isInit) {
                wordIndexRef.current = 0;
                return [{ isCorrect: null, ...wordsTemp[wordIndexRef.current] }];
            } else {
                wordIndexRef.current += 1;
                if (wordIndexRef.current >= wordsTemp.length) wordIndexRef.current = 0;
                return arr.concat({ isCorrect: null, ...wordsTemp[wordIndexRef.current] });
            }
        });
    };
    const checkInputVal = (inputArr: string[], target: string) => {
        let isCorrect = true;
        inputArr.forEach((char, index) => {
            if (target.charAt(index) !== char) {
                isCorrect = false;
            }
        });
        return isCorrect;
    };
    const inputCountdownTime = (value?: number) => {
        if (value && /^\d+$/g.test(String(value))) {
            countdownTimeRef.current = value;
            setDeadlineText(getCountdownStr(value));
        }
    };
    const onCountdonwFinish = () => {
        if (timeStartRef.current) {
            setTypingEnd(true);
            console.log(wordArr);
        }
    };
    const reloadBtn = useCallback(() => {
        lineIndexLockRef.current = false;
        lineCountRef.current = 0;
        timeStartRef.current = false;
        keystrokeCountRef.current = 0;
        setTypingEnd(false);
        setWordInput('');
        setActingWordIndex(0);
        wordsBaseRef.current = shuffle(wordsBaseRef.current);
        pushWordToArr(true);
        setTimeout(() => {
            (mainInputEl.current as any).focus();
        }, 10);
    }, []);
    const mainInputKeyUp = (evt: React.KeyboardEvent) => {
        if (evt.keyCode === 13) reloadBtn();
        if (typingEnd) return;
        keystrokeCountRef.current += 1;
    };

    useEffect(() => {
        if (mainWindowEl) {
            const wordContainerRow = (mainWindowEl.current as any).lastElementChild;
            if (!wordContainerRow || !wordContainerRow.lastElementChild) return;
            const outterScrollTop = (mainWindowEl.current as any).scrollTop;
            Array.from(wordContainerRow.children).forEach((child: any, index: number) => {
                oneLineHeightRef.current = child.offsetHeight;
                const childTopToParent = child.offsetTop - wordContainerRow.offsetTop;
                const showsSecLine = oneLineHeightRef.current + outterScrollTop;
                const isNextLineCheck = // 判断是不是显示的两行中的第二行，存在小数公差
                    showsSecLine - 5 < childTopToParent && childTopToParent < showsSecLine + 5;
                if (!lineIndexLockRef.current && isNextLineCheck) {
                    nextLineStartIndexRef.current = index;
                    lineIndexLockRef.current = true;
                }
            });
            if (
                wordContainerRow.lastElementChild.offsetTop -
                    wordContainerRow.offsetTop -
                    outterScrollTop <
                oneLineHeightRef.current * 3 + 1
            ) {
                pushWordToArr();
            }
        }
    }, [wordArr.length]);

    useEffect(() => {
        if (typingEnd) return;
        if (wordInput === '') {
            setWordArr((arr) => {
                const tempArr = [...arr];
                if (tempArr[actingWordIndex]) {
                    tempArr[actingWordIndex].isCorrect = null;
                }
                return tempArr;
            });
            return;
        }
        if (!timeStartRef.current) countDownStart();
        timeStartRef.current = true;
        const inputArr = Array.from(wordInput.trim());
        if (wordInput[wordInput.length - 1] === ' ') {
            setWordInput('');
            if (inputArr.length === 0) return;
            setWordArr((arr) => {
                let tempArr = [...arr];
                const targetWord = tempArr[actingWordIndex];
                const isCorrect = checkInputVal(inputArr, targetWord.text);
                tempArr[actingWordIndex].isCorrect =
                    isCorrect && inputArr.length === targetWord.text.length;
                return tempArr;
            });
            setActingWordIndex(actingWordIndex + 1);
            if (actingWordIndex + 1 === nextLineStartIndexRef.current) {
                lineCountRef.current += 1;
                (mainWindowEl.current as any).scrollTop =
                    oneLineHeightRef.current * lineCountRef.current;
                lineIndexLockRef.current = false;
                pushWordToArr();
            }
        } else {
            setWordArr((arr) => {
                const tempArr = [...arr];
                const targetWord = tempArr[actingWordIndex];
                const isCorrect = checkInputVal(inputArr, targetWord.text);
                tempArr[actingWordIndex].isCorrect = isCorrect === false ? false : null;
                return tempArr;
            });
        }
    }, [actingWordIndex, typingEnd, wordInput]);

    useEffect(() => {
        wordsBaseRef.current = getWords(
            props.$state.root.wordsMode,
            props.$state.root.customerWords
        );
        setTimeout(() => {
            reloadBtn();
            setLoading(false);
        }, 1000);
    }, [props.$state.root.wordsMode, props.$state.root.customerWords, reloadBtn]);

    return (
        <div className="home">
            <Row justify="center" align="middle">
                <Col flex="450px" className={`home-scale-box-${props.$state.root.uiScale}`}>
                    <div className="home-show-main">
                        {typingEnd && <div className="type-end"></div>}
                        <Spin spinning={loading} delay={50} wrapperClassName="loading-wrapper">
                            <div className="home-show-main-window" ref={mainWindowEl}>
                                <Row gutter={12}>
                                    {wordArr.map((item, index) => (
                                        <Col
                                            key={index}
                                            className={`home-show-main-window-item ${
                                                item.isCorrect === true ? 'correct' : ''
                                            } ${item.isCorrect === false ? 'incorrect' : ''}`}
                                        >
                                            <div
                                                className={`home-show-main-window--label ${
                                                    actingWordIndex === index ? 'acting' : ''
                                                }`}
                                            >
                                                {item.label}
                                            </div>
                                            <div className="home-show-main-window--text">
                                                {item.text}
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Spin>
                    </div>
                    <Row justify="space-between" align="middle" gutter={0}>
                        <Col flex="285px">
                            <Input
                                className="home-input"
                                ref={mainInputEl}
                                value={wordInput}
                                onChange={(evt) => {
                                    setWordInput(evt.target.value);
                                }}
                                onKeyUp={mainInputKeyUp}
                            ></Input>
                        </Col>
                        <Col flex="90px">
                            <Popover
                                content={
                                    <div>
                                        <InputNumber
                                            defaultValue={countdownTimeRef.current}
                                            onChange={inputCountdownTime}
                                        ></InputNumber>
                                        <span>秒</span>
                                    </div>
                                }
                                onVisibleChange={() =>
                                    props.$dispatch(
                                        'setCountdownTime',
                                        String(countdownTimeRef.current)
                                    )
                                }
                                overlayClassName="home-countdown-popover"
                                placement="bottom"
                                title=""
                                trigger="click"
                            >
                                <div className="home-countdown">
                                    <Countdown
                                        className="home-countdown-main"
                                        value={deadline}
                                        format="m:ss"
                                        onFinish={onCountdonwFinish}
                                    ></Countdown>
                                    <div
                                        className={`home-countdown-placeholder ${
                                            timeStartRef.current ? 'time-run' : ''
                                        }`}
                                    >
                                        {deadlineText}
                                    </div>
                                </div>
                            </Popover>
                        </Col>
                        <Col flex="50px">
                            <Button
                                className="home-reload-btn"
                                onClick={reloadBtn}
                                type="primary"
                                icon={<ReloadOutlined />}
                            />
                        </Col>
                    </Row>
                    {typingEnd && (
                        <Row className="home-type-result">
                            <Col span={24}>
                                <div className="result-wpm">
                                    {Math.round(
                                        wordArr.filter((word) => word.isCorrect !== null).length /
                                            (countdownTimeRef.current / 60)
                                    )}
                                    WPM
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="result-title">正确</div>
                            </Col>
                            <Col span={12}>
                                <div className="result-numbers correct">
                                    {wordArr.filter((word) => word.isCorrect === true).length}
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="result-title">错误</div>
                            </Col>
                            <Col span={12}>
                                <div className="result-numbers wrong">
                                    {wordArr.filter((word) => word.isCorrect === false).length}
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="result-title">按键总数</div>
                            </Col>
                            <Col span={12}>
                                <div className="result-numbers">{keystrokeCountRef.current}</div>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default storeConnect(Home);
