import React from "react";
import App from "./components/app.jsx";

const runApp = () => {
  React.render(
    <App />,
    document.getElementById("app")
  );
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', runApp);
} else {
  window.attachEvent('onload', runApp);
}
