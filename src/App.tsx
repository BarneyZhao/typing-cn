import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import AppRouter from './router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => (
    <AppRouter mainClass={'app-main'} header={<Header />} footer={<Footer />} />
);

export default App;
