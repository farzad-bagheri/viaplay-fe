import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducer from './redux/reducer';

const storage = createStore(reducer);
ReactDOM.render(<Provider store={storage} ><App /></Provider>, document.getElementById('root'))
