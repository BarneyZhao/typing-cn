/*
 * @Author: zhaoxuanzi
 * @Date: 2020-12-07 20:12:31
 * @LastEditors: zhaoxuanzi
 * @LastEditTime: 2021-01-28 19:27:47
 */
import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './App.less';
import AppRouter from './router';
import store from './store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => (
    <Provider store={store}>
        <AppRouter mainClass={'app-main'} header={<Header />} footer={<Footer />} />
    </Provider>
);

export default App;
