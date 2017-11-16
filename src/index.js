import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './styles.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
