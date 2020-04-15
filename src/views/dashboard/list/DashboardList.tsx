import React from 'react';
import { useHistory } from 'react-router-dom';

const List: React.FC = () => {
    const history = useHistory();
    const goAbout = (path: string, e: any) => {
        history.push(path);
    };
    return (
        <div>
            <h3>List</h3>
            <button onClick={(e) => goAbout('/about/list', e)}>go /about/list</button>
        </div>
    );
};

export default List;
