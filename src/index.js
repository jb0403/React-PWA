import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.scss";
import App from "./App";

//serviceWorker
import serviceWorkerDev from "./serviceWorker";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

serviceWorkerDev();
