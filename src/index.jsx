import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //  <App/>
  // </React.StrictMode>

   <Provider store={store}>
    <App />
  </Provider>
);
