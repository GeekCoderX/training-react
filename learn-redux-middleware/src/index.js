import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";

// const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
