import React from 'react';
import { Provider } from 'react-redux';
// import 'antd/dist/antd.css';
import './App.less';
import AppRouter from './router';
import store from './store';

import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

const App: React.FC = () => (
    <Provider store={store}>
        <AppRouter mainClass={'app-main'} header={<Header />} footer={<div />} />
    </Provider>
);

export default App;
