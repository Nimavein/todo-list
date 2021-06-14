import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.css";
import App from "./App";
import { AppProvider } from "./context";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
