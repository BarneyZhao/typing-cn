import React, { useState } from 'react';
import { RouteChildrenProps } from 'react-router-dom';

const Graph: React.FC<RouteChildrenProps<{ id: string }>> = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>graph-{props.match?.params.id}</h3>
            <div>{count}</div>
            <button onClick={() => setCount((c) => c + 1)}>plus</button>
        </div>
    );
};

export default Graph;
