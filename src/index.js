import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/User";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

ReactDOM.render(
  <BrowserRouter>
    <Provider >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
