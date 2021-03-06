import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducers/root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
