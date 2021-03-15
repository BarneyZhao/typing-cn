/*
 * @Author: zhaoxuanzi
 * @Date: 2021-02-19 17:58:40
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-03-15 20:53:33
 */
import { Input, Radio } from 'antd';
import React, { useState, useEffect, useRef } from 'react';

import Keyboard from '@/components/keyboard/Keyboard';
import './Training.less';

const LEFT = ['Q', 'W', 'E', 'R', 'T', 'A', 'S', 'D', 'F', 'G', 'Z', 'X', 'C', 'V', 'B'];
const LEFT_NUM = ['1', '2', '3', '4', '5', '6'];
const RIGHT = ['Y', 'U', 'I', 'O', 'P', 'H', 'J', 'K', 'L', 'N', 'M'];
const RIGHT_NUM = ['7', '8', '9', '0'];
const MARK = ['-', '=', '[', ']', ';', "'", ',', '.', '/'];

const natural = (min?: number, max?: number) => {
    min = typeof min !== 'undefined' ? min : 0;
    max = typeof max !== 'undefined' ? max : 9007199254740992; // 2^53
    return Math.round(Math.random() * (max - min)) + min;
};
const character = (pool: 'left' | 'right' | 'charAll', excludeChar?: string) => {
    const pools = {
        leftNum: LEFT_NUM.join(''),
        left: LEFT.join(''),
        rightNum: RIGHT_NUM.join(''),
        right: RIGHT.join(''),
        charAll: '',
    };
    pools.charAll = pools.left + pools.right;

    const poolSet = (pools[pool] || pools.charAll).replace(excludeChar || '', '');
    return poolSet.charAt(natural(0, poolSet.length - 1));
};

const Training: React.FC = () => {
    const [key, setKey] = useState('');
    const [keyDesc, setKeyDesc] = useState('');
    const inputEl = useRef(null);

    const [mode, setMode] = useState<'left' | 'right' | 'charAll'>('charAll');
    // const [pressKeys, setPressKeys] = useState<Set<string>>(new Set([]));
    const [highKey, setHighKey] = useState<Set<string>>(new Set([]));
    const [correctedKey, setCorrectedKey] = useState<string>();
    const [wrongKey, setWrongKey] = useState<string>();
    const [blurKeys, setBlurKeys] = useState<Set<string>>(new Set([]));

    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const mainInputKeyDown = (evt: React.KeyboardEvent) => {
        setKey(evt.key);
        const fitKey = evt.key.length === 1 ? evt.key.toUpperCase() : evt.key;
        // setPressKeys((_keys) => {
        //     const temp = new Set(_keys);
        //     temp.add(fitKey);
        //     return temp;
        // });
        const currentKey = Array.from(highKey)[0];
        if (fitKey === currentKey) {
            setCorrectedKey(currentKey);
            setCorrectCount((n) => n + 1);
            setHighKey(new Set([character(mode, currentKey)]));
        } else {
            setWrongKey(currentKey);
            setWrongCount((n) => n + 1);
        }
        evt.persist();
        evt.preventDefault();
        evt.stopPropagation();
    };

    const inputKeyUp = (evt: React.KeyboardEvent) => {
        console.log(evt.key, evt.keyCode, evt.metaKey);
        // setPressKeys((_keys) => {
        //     const temp = new Set(_keys);
        //     temp.delete(evt.key.length === 1 ? evt.key.toUpperCase() : evt.key);
        //     return temp;
        // });
        evt.persist();
    };

    const removeKey = (key: string) => {
        setCorrectedKey('');
        setWrongKey('');
    };

    useEffect(() => {
        if (key === '') {
            setKeyDesc('');
        } else if (key === ' ') {
            setKeyDesc('Space');
        } else if (key.length === 1) {
            setKeyDesc(key.toLocaleUpperCase());
        } else {
            setKeyDesc(key);
        }
    }, [key]);

    useEffect(() => {
        const blurKeysTemp: string[] = [...LEFT_NUM, ...RIGHT_NUM, ...MARK];
        if (mode === 'charAll') {
            setBlurKeys(new Set(blurKeysTemp));
        } else if (mode === 'left') {
            setBlurKeys(new Set(blurKeysTemp.concat(RIGHT)));
        } else if (mode === 'right') {
            setBlurKeys(new Set(blurKeysTemp.concat(LEFT)));
        }
        setHighKey(new Set([character(mode)]));

        setCorrectCount(0);
        setWrongCount(0);
        (inputEl.current as any).focus();
    }, [mode]);

    return (
        <div className="Training">
            <div className="Training-mode">
                <Radio.Group onChange={(e) => setMode(e.target.value)} defaultValue={mode}>
                    <Radio.Button value="left">左手模式</Radio.Button>
                    <Radio.Button value="charAll">全部</Radio.Button>
                    <Radio.Button value="right">右手模式</Radio.Button>
                </Radio.Group>
            </div>
            <Keyboard
                highlightKeys={highKey}
                correctedKey={correctedKey}
                wrongKey={wrongKey}
                finishAnimate={removeKey}
                blurKeys={blurKeys}
            />
            <div className="Training__input">
                <Input ref={inputEl} onKeyDown={mainInputKeyDown} onKeyUp={inputKeyUp} />
            </div>
            <div className="Training__desc">
                <div>{keyDesc}</div>
            </div>
            <div className="Training-count">
                <div className="correct">{correctCount}</div>
                <div className="wrong">{wrongCount}</div>
            </div>
        </div>
    );
};

export default Training;
