import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Row, Col, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import './Monkey.less';
import { storeConnect, MapState, MapDispatch } from '@/store/index';
import wordTool, { WordType } from '@/utils/wordTool';
import TypeResult from '@/components/typeResult/TypeResult';
import ReloadBtn from '@/components/reloadBtn/ReloadBtn';

interface LetterObj {
    letter: string;
    isCorrect: boolean | null;
}
interface WordObj extends WordType {
    letterArr: LetterObj[];
    isCorrect: boolean | null;
    isSkip: boolean;
}

const SPACE_CODE = 32;
const BACKSPACE_CODE = 8;

const getCurrentWordEl = (mEl: any) => Array.from<any>(mEl.children);

const Monkey: React.FC<MapState & MapDispatch> = (props) => {
    const inputEl = useRef(null);
    const mainEl = useRef(null);
    const caretElRef = useRef(null);
    const wordsBaseRef = useRef(
        wordTool.getWords(props.$state.root.wordsMode, props.$state.root.customerWords)
    );
    const coordinateRef = useRef([0, 0]);
    const typeResultRef = useRef({
        wpm: '',
        right: 0,
        wrong: 0,
        acc: 0,
        time: { begin: 0, secs: 0 },
    });

    const [isTyping, setIsTyping] = useState(false);
    const [isCaretFlash, setIsCaretFlash] = useState(false);
    const [isFadingTypeMain, setIsFadingTypeMain] = useState(false);
    const [showTypeResult, setShowTypeResult] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [wordArr, setWordArr] = useState<Array<WordObj>>([]);
    const [caretLocation, setCaretLocation] = useState({ top: 0, left: 0 });
    const [wordCount, setWordCount] = useState(30);

    const setCaret = () => {
        const coordinate = coordinateRef.current; // 此时坐标为下一个字母的坐标
        const mainElRect = (mainEl.current as any).getBoundingClientRect();
        const currentWordEl = getCurrentWordEl(mainEl.current)[coordinate[0]];
        if (!currentWordEl) return;
        const currentLetterArr = Array.from<any>(currentWordEl.getElementsByClassName('letter'));
        if (currentLetterArr.length <= coordinate[1]) {
            const letterRect = currentLetterArr[coordinate[1] - 1].getBoundingClientRect();
            setCaretLocation({
                top: letterRect.top - mainElRect.top + 2,
                left: letterRect.left - mainElRect.left + letterRect.width,
            });
        } else {
            const letterRect = currentLetterArr[coordinate[1]].getBoundingClientRect();
            setCaretLocation({
                top: letterRect.top - mainElRect.top + 2,
                left: letterRect.left - mainElRect.left,
            });
        }
    };

    const inputForwardFunc = useCallback(
        (keyCode: number, inputVal: string) => {
            const coordinate = coordinateRef.current;
            const isNewWordInputing =
                userInput === '' || userInput.charAt(userInput.length - 1) === ' ';
            let newCoordinate: number[];
            if (keyCode === SPACE_CODE) {
                if (isNewWordInputing) {
                    newCoordinate = coordinate;
                } else {
                    newCoordinate = [coordinate[0] + 1, 0];
                }
            } else {
                if (coordinate[1] >= wordArr[coordinate[0]].letterArr.length) {
                    // 已经是单词最后一位（下标等于长度），却输入了字母
                    const currentWordEl = getCurrentWordEl(mainEl.current)[coordinate[0]];
                    const codeEl = document.createElement('code');
                    codeEl.className = 'letter wrong extra-letter';
                    codeEl.innerText = inputVal;
                    currentWordEl.appendChild(codeEl);
                }
                newCoordinate = [coordinate[0], coordinate[1] + 1];
            }
            coordinateRef.current = newCoordinate;
            setCaret();

            setWordArr((_wordArr) => {
                const letterObj = _wordArr[coordinate[0]].letterArr[coordinate[1]];
                if (letterObj && keyCode !== SPACE_CODE) {
                    // console.log(inputVal === letterObj.letter, letterObj);
                    letterObj.isCorrect = inputVal === letterObj.letter;
                    _wordArr[coordinate[0]].letterArr[coordinate[1]] = letterObj;
                }
                if (keyCode === SPACE_CODE && !isNewWordInputing) {
                    // 是否没有输入完单词就空格跳过
                    if (_wordArr[coordinate[0]].letterArr.some((l) => l.isCorrect === null)) {
                        _wordArr[coordinate[0]].isSkip = true;
                        _wordArr[coordinate[0]].isCorrect = false;
                    } else {
                        const currentWordEl = getCurrentWordEl(mainEl.current)[coordinate[0]];
                        const extraLetterArr = currentWordEl.getElementsByClassName('extra-letter');
                        if (!extraLetterArr || extraLetterArr.length === 0) {
                            _wordArr[coordinate[0]].isCorrect = _wordArr[
                                coordinate[0]
                            ].letterArr.every((l) => l.isCorrect);
                        } else {
                            _wordArr[coordinate[0]].isCorrect = false;
                        }
                    }
                }

                // 是否 (新坐标已超出词组数) || (最后一个词、最后一个字母), 判断显示结果
                if (
                    newCoordinate[0] > _wordArr.length - 1 ||
                    (coordinate[0] === _wordArr.length - 1 &&
                        coordinate[1] === _wordArr[coordinate[0]].letterArr.length - 1)
                ) {
                    _wordArr[coordinate[0]].isCorrect = _wordArr[coordinate[0]].letterArr.every(
                        (l) => l.isCorrect
                    );
                    typeResultRef.current.right = _wordArr.filter((w) => w.isCorrect).length;
                    typeResultRef.current.wrong = _wordArr.length - typeResultRef.current.right;
                    typeResultRef.current.acc = Math.round(
                        (typeResultRef.current.right /
                            (typeResultRef.current.right + typeResultRef.current.wrong)) *
                            100
                    );
                    typeResultRef.current.time.secs = Math.round(
                        (Date.now() - typeResultRef.current.time.begin) / 1000
                    );
                    typeResultRef.current.wpm = (
                        typeResultRef.current.right /
                        (typeResultRef.current.time.secs / 60)
                    ).toFixed(2);
                    setIsTyping(false);
                    setIsFadingTypeMain(true);
                    setTimeout(() => {
                        setShowTypeResult(true);
                    }, 150);
                }
                return _wordArr;
            });
            setUserInput((v) => {
                if (keyCode === SPACE_CODE && (v === '' || v.charAt(v.length - 1) === ' ')) {
                    return v;
                }
                return v + inputVal;
            });
        },
        [userInput, wordArr]
    );
    const backspaceFunc = useCallback(() => {
        const deleteChar = userInput.charAt(userInput.length - 1);
        if (deleteChar === '') {
            return;
        }
        const coordinate = coordinateRef.current;
        let newCoordinate;
        if (deleteChar === ' ') {
            if (wordArr[coordinate[0] - 1].isCorrect) {
                newCoordinate = coordinate;
            } else {
                if (wordArr[coordinate[0] - 1].isSkip) {
                    const lIndex = wordArr[coordinate[0] - 1].letterArr.findIndex(
                        (l) => l.isCorrect === null
                    );
                    newCoordinate = [coordinate[0] - 1, lIndex];
                } else {
                    const currentWordEl = getCurrentWordEl(mainEl.current)[coordinate[0] - 1];
                    const currentLetterArr = currentWordEl.getElementsByClassName('letter');
                    newCoordinate = [coordinate[0] - 1, currentLetterArr.length];
                }
            }
        } else {
            const currentWordEl = getCurrentWordEl(mainEl.current)[coordinate[0]];
            const extraLetterArr = currentWordEl.getElementsByClassName('extra-letter');
            if (extraLetterArr && extraLetterArr.length > 0) {
                currentWordEl.removeChild(extraLetterArr[extraLetterArr.length - 1]);
            }
            newCoordinate = [coordinate[0], coordinate[1] - 1];
        }
        coordinateRef.current = newCoordinate;
        setCaret();
        setWordArr((_wordArr) => {
            if (deleteChar === ' ') {
                if (_wordArr[coordinate[0] - 1].isCorrect === false) {
                    _wordArr[coordinate[0] - 1].isCorrect = null;
                }
            } else if (_wordArr[coordinate[0]].letterArr.length >= coordinate[1]) {
                _wordArr[coordinate[0]].letterArr[coordinate[1] - 1].isCorrect = null;
                _wordArr[coordinate[0]].isCorrect = null;
            }
            return _wordArr;
        });
        setUserInput((v) => {
            let canDelete = true;
            if (deleteChar === ' ') {
                if (wordArr[coordinate[0] - 1].isCorrect) {
                    canDelete = false;
                }
            }
            return canDelete ? v.substring(0, v.length - 1) : v;
        });
    }, [userInput, wordArr]);

    const inputKeyDown = (evt: React.KeyboardEvent) => {
        // console.log(evt.key, evt.keyCode, evt.metaKey);
        // 9: Tab
        if (evt.keyCode !== 9) {
            evt.preventDefault();
            evt.stopPropagation();
            evt.persist();
        }
        if (showTypeResult) {
            return;
        }
        setIsCaretFlash(false);
        if (evt.key.length === 1) {
            if (typeResultRef.current.time.begin === 0) {
                typeResultRef.current.time.begin = Date.now();
            }
            inputForwardFunc(evt.keyCode, evt.key);
        } else if (evt.keyCode === BACKSPACE_CODE) {
            backspaceFunc();
        }
    };

    const focusToInput = () => {
        setIsTyping(true);
        (inputEl.current as any).focus();
    };

    const reloadWord = useCallback(() => {
        coordinateRef.current = [0, 0];
        wordsBaseRef.current = wordTool.shuffle(wordsBaseRef.current);
        typeResultRef.current = {
            wpm: '',
            right: 0,
            wrong: 0,
            acc: 0,
            time: { begin: 0, secs: 0 },
        };
        const extraLetterArr = (mainEl.current as any).getElementsByClassName('extra-letter');
        if (extraLetterArr.length !== 0) {
            Array.from<any>(extraLetterArr).forEach((etl) => {
                etl.parentNode.removeChild(etl);
            });
        }
        setWordArr(
            wordTool.jsonCopy<WordType[]>(wordsBaseRef.current.slice(0, wordCount)).map((word) => {
                return Object.assign({}, word, {
                    letterArr: Array.from(word.text).map((letter) => ({
                        letter,
                        isCorrect: null,
                    })),
                    isCorrect: null,
                    isSkip: false,
                });
            })
        );
        setUserInput('');
        setIsFadingTypeMain(false);
        setShowTypeResult(false);
        setTimeout(() => {
            focusToInput();
            setCaret();
        }, 10);
    }, [wordCount]);

    useEffect(() => {
        wordsBaseRef.current = wordTool.getWords(
            props.$state.root.wordsMode,
            props.$state.root.customerWords
        );
        reloadWord();
    }, [props.$state.root.wordsMode, props.$state.root.customerWords, reloadWord, wordCount]);

    return (
        <div className="Monkey">
            <div className="word-count-radio">
                <Radio.Group
                    value={wordCount}
                    size="small"
                    onChange={(e: RadioChangeEvent) => {
                        setWordCount(e.target.value);
                    }}
                >
                    <Radio.Button tabIndex={-1} value={20}>
                        20
                    </Radio.Button>
                    <Radio.Button tabIndex={-1} value={30}>
                        30
                    </Radio.Button>
                    <Radio.Button tabIndex={-1} value={40}>
                        40
                    </Radio.Button>
                    <Radio.Button tabIndex={-1} value={50}>
                        50
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
                    <div
                        className={`caret ${isTyping ? (isCaretFlash ? 'flash' : '') : 'hide'}`}
                        ref={caretElRef}
                        style={{
                            transform: `translate3d(${caretLocation.left}px,${caretLocation.top}px,0)`,
                        }}
                    ></div>
                    <div className="words-box" onClick={focusToInput} ref={mainEl}>
                        {wordArr.map((word, wi) => (
                            <div
                                className={`word ${
                                    word.isCorrect
                                        ? 'correct'
                                        : word.isCorrect === false
                                        ? 'wrong'
                                        : ''
                                }`}
                                key={wi}
                            >
                                <div className="label">{word.label}</div>
                                {word.letterArr?.map((letterObj, li) => (
                                    <code
                                        className={`letter ${
                                            letterObj.isCorrect
                                                ? 'correct'
                                                : letterObj.isCorrect === false
                                                ? 'wrong'
                                                : ''
                                        }`}
                                        key={`${wi}_${li}`}
                                    >
                                        {letterObj.letter}
                                    </code>
                                ))}
                            </div>
                        ))}
                    </div>
                    <input
                        className="hidden-input"
                        type="text"
                        ref={inputEl}
                        onKeyDown={inputKeyDown}
                        onBlur={() => {
                            setIsTyping(false);
                            // setIsCaretFlash(false);
                        }}
                        onFocus={() => {
                            setIsTyping(true);
                            setIsCaretFlash(true);
                        }}
                    />
                    <div className="reload-line">
                        <ReloadBtn onClick={reloadWord} />
                    </div>
                    {/* {userInput} */}
                    <div className={`tip-line ${!isCaretFlash ? 'hide' : ''}`}>
                        <div>点击词块进入输入状态</div>
                        <div>输入正确的拼音字母，然后空格</div>
                        <div>
                            输入状态下<code>Tab</code>后回车可以直接刷新
                        </div>
                        <div>觉得有意思可以打赏一下(#^.^#)(在上面↑↑)</div>
                    </div>
                </Col>
                <Col flex="900px" className={`type-result-box ${showTypeResult ? 'show' : ''}`}>
                    {/* {JSON.stringify(typeResultRef.current)} */}
                    <TypeResult
                        desc="WPM"
                        numStr={typeResultRef.current.wpm}
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

export default storeConnect(Monkey);
