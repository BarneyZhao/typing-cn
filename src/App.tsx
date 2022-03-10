import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import './App.less';
import AppRouter from './router';
import store from './store';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => (
    <Provider store={store}>
        <div className="app-main">
            {/* HashRouter 不需要 basename; BrowserRouter 才需要 */}
            {/* <Router basename={import.meta.env.BASE_URL}> */}
            <Router>
                <Header />
                <Suspense fallback={<></>}>
                    <AppRouter />
                </Suspense>
                <Footer />
            </Router>
        </div>
    </Provider>
);
console.log('BASE_URL: ', import.meta.env.BASE_URL);

export default App;
