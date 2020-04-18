import React from 'react';
import { Row, Col, Radio } from 'antd';
// import { SettingOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import './Header.scss';
import { storeConnect, MapState, MapDispatch } from '@/store/index';

const Header: React.FC<MapState & MapDispatch> = (props) => {
    const onChange = (evt: any) => {
        props.$dispatch('setUiScale', evt.target.value);
    };

    return (
        <div className="app-header">
            <Row>
                <Col flex="auto">
                    {/* <Button type="link" ghost icon={<SettingOutlined />}>
                        Settings
                    </Button> */}
                    <span>UI SIZE:&nbsp;&nbsp;</span>
                    <Radio.Group onChange={onChange} defaultValue={props.$state.root.uiScale}>
                        <Radio value="s">normal</Radio>
                        <Radio value="m">big</Radio>
                        <Radio value="l">large</Radio>
                    </Radio.Group>
                </Col>
            </Row>
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
