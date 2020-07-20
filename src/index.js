import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Users from "./components/users";
import users from "./mock/users";
import WithCheckBox from "./components/checkbox";

ReactDOM.render(
  <React.StrictMode>
    <WithCheckBox></WithCheckBox>
    <Users users={users}> </Users>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
