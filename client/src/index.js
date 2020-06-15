import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducers/root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
