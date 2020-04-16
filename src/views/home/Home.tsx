import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input, Row, Col, Statistic, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import './Home.scss';
import WORDS from '@/words';

const { Countdown } = Statistic;

const oneLineHeight = 53;
const shuffle = (arr: any[]) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let rIndex = Math.floor(Math.random() * (i + 1));
        let temp = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
};

const Home: React.FC = () => {
    const [deadline, setDeadline] = useState(0);
    const [actingWordIndex, setActingWordIndex] = useState(0);
    const [wordArr, setWordArr] = useState<typeof WORDS>([]);
    const [wordInput, setWordInput] = useState('');
    const [typingEnd, setTypingEnd] = useState(false);
    const wordsContainerEl = useRef(null);
    const wordIndexRef = useRef(0); // WORDS数组的下标
    const lineIndexLockRef = useRef(false); // 是否设置过第二行开头元素的下标
    const nextLineStartIndexRef = useRef(0);
    const lineCountRef = useRef(0);
    const timeStartRef = useRef(false);

    const countDownStart = () => {
        setDeadline(Date.now() + 60 * 1000);
    };
    const pushWordToArr = (isInit?: boolean) => {
        setWordArr((arr) => {
            const wordsTemp = [...WORDS];
            if (isInit) {
                wordIndexRef.current = 0;
                return [{ ...wordsTemp[wordIndexRef.current] }];
            } else {
                wordIndexRef.current += 1;
                if (wordIndexRef.current >= wordsTemp.length) wordIndexRef.current = 0;
                return arr.concat({ ...wordsTemp[wordIndexRef.current] });
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
    const reloadBtn = useCallback(() => {
        lineIndexLockRef.current = false;
        lineCountRef.current = 0;
        timeStartRef.current = false;
        setTypingEnd(false);
        setWordInput('');
        setActingWordIndex(0);
        shuffle(WORDS);
        pushWordToArr(true);
    }, []);
    const onCountdonwFinish = () => {
        if (timeStartRef.current) {
            setTypingEnd(true);
            console.log(wordArr);
        }
    };

    useEffect(() => {
        if (wordsContainerEl) {
            const wordContainerRow = (wordsContainerEl.current as any).lastElementChild;
            if (!wordContainerRow || !wordContainerRow.lastElementChild) return;
            const outterScrollTop = (wordsContainerEl.current as any).scrollTop;
            Array.from(wordContainerRow.children).forEach((child: any, index: number) => {
                if (
                    child.offsetTop === oneLineHeight + 11 + outterScrollTop && // 11 = body的padding + window的border
                    !lineIndexLockRef.current
                ) {
                    nextLineStartIndexRef.current = index;
                    lineIndexLockRef.current = true;
                }
            });
            if (
                wordContainerRow.lastElementChild.offsetTop - outterScrollTop <
                oneLineHeight * 3 + 1
            ) {
                pushWordToArr();
            }
        }
    }, [wordArr.length]);

    useEffect(() => {
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
                (wordsContainerEl.current as any).scrollTop = oneLineHeight * lineCountRef.current;
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
    }, [actingWordIndex, wordInput]);

    useEffect(() => {
        reloadBtn();
    }, [reloadBtn]);

    return (
        <div className="home">
            <div className="home-show-main">
                {typingEnd && <div className="type-end"></div>}
                <div className="home-show-main-window" ref={wordsContainerEl}>
                    <Row gutter={12}>
                        {wordArr.map((item, index) => (
                            <Col
                                key={index}
                                className={`${item.isCorrect === true ? 'correct' : ''} ${
                                    item.isCorrect === false ? 'incorrect' : ''
                                }`}
                            >
                                <div
                                    className={`home-show-main-window--label ${
                                        actingWordIndex === index ? 'acting' : ''
                                    }`}
                                >
                                    {item.label}
                                </div>
                                <div className="home-show-main-window--text">{item.text}</div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <Row justify="space-between" align="middle">
                <Col span={15}>
                    <Input
                        className="home-input"
                        value={wordInput}
                        disabled={typingEnd}
                        onChange={(evt) => {
                            setWordInput(evt.target.value);
                        }}
                    ></Input>
                </Col>
                <Col span={5}>
                    <Countdown
                        className={`home-countdown ${!timeStartRef.current ? 'time-ready' : ''}`}
                        value={deadline}
                        format="m:ss"
                        onFinish={onCountdonwFinish}
                    ></Countdown>
                </Col>
                <Col span={3}>
                    <Button
                        className="home-btn"
                        onClick={reloadBtn}
                        type="primary"
                        icon={<ReloadOutlined />}
                    />
                </Col>
            </Row>
            {typingEnd && (
                <Row>
                    <Col span={24}>
                        <div className="result-wpm">
                            {wordArr.filter((word) => word.isCorrect !== null).length} WPM
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="result-title">Correct</div>
                    </Col>
                    <Col span={12}>
                        <div className="result-numbers correct">
                            {wordArr.filter((word) => word.isCorrect === true).length}
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="result-title">Wrong</div>
                    </Col>
                    <Col span={12}>
                        <div className="result-numbers wrong">
                            {wordArr.filter((word) => word.isCorrect === false).length}
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default Home;
