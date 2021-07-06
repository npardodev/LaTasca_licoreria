import React from 'react';
import ReactDOM from 'react-dom';
import './utility/index.css'
import App from './App';
import generateStore from './reducer/store'
import { Provider } from 'react-redux'
const store = generateStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

