import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from './App';
import DevTools from './DevTools';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

export default () => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
);
