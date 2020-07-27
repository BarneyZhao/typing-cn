import { Input } from 'antd';
import React, { useState, useRef } from 'react';

import beepMp3 from './beep.mp3';

const Test: React.FC = () => {
    const [key, setKey] = useState('');
    const [keyCode, setKeyCode] = useState(0);
    const audioRef = useRef(null);

    const mainInputKeyDown = (evt: React.KeyboardEvent) => {
        setKey(evt.key);
        setKeyCode(evt.keyCode);
        (audioRef.current as any)?.play();
        evt.preventDefault();
        evt.stopPropagation();
    };

    return (
        <div>
            <Input className="home-input" onKeyDown={mainInputKeyDown}></Input>
            <div>
                <div>key: {key}</div>
                <div>keyCode: {keyCode}</div>
            </div>
            <audio src={beepMp3} ref={audioRef}></audio>
        </div>
    );
};

export default Test;
