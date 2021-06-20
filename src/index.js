import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import reportWebVitals from './tests/reportWebVitals';
import { observable, toJS } from "mobx";
import { Provider } from "mobx-react";
import { stateExtender } from "./state/state.extender";
import { apiInitializer } from "./state/api.initializer";

const state = observable({
  helpers: {},
  actions: {},
});
    
apiInitializer(state);
stateExtender(state);
window.state = state;
window.actions = state.actions;
window.helpers = state.helpers;

window.toJS = toJS;

ReactDOM.render(
  <Provider state={state} actions={state.actions} helpers={state.helpers}>
    <App state={state} />
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
