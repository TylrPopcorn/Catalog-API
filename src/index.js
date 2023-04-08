import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import App from "./components/App";

/**
 * DEPENDENCIES:
 * npm i react
 * npm i parcel-bundler
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Run the main component/function */}
  </React.StrictMode>
);
