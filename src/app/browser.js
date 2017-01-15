import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../store';
import App from './App';

const preloadedState = window.__APP_INITIAL_STATE__ ;
const store = configureStore(preloadedState);


console.log("from client side", store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));