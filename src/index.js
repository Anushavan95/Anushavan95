import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './store/reduses/Store';
import {ScrollToTop} from 'react-router-scroll-to-top';

ReactDOM.render(
    <Router >
    <ScrollToTop/>
    <Provider store={Store}>
        <App/>
    </Provider>
</Router>, document.getElementById('root'));
