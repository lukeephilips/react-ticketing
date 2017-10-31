import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import styles from './styles/styles.css';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
