import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Header from "./components/Header";
import Convertor from "./components/Convertor";

import data from "./data.json";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

console.log(data);

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <Header />

        <Convertor />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
