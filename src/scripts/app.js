import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const runApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById("app")
  );
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', runApp);
} else {
  window.attachEvent('onload', runApp);
}
