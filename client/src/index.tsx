import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddlware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import root from "./store/reducers/root";
import sagaWatcher from "./store/sagas/watcher";

const saga = createSagaMiddlware();
const store = createStore(root, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
