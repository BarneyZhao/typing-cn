import React, { useState } from 'react';

const Dashboard: React.FC = () => {
    const [score, setScore] = useState(0);
    return (
        <div>
            <h2>Dashboard</h2>
            <div>{score}</div>
            <button onClick={() => setScore((sc) => sc + 1)}>plus score</button>
        </div>
    );
};

export default Dashboard;
