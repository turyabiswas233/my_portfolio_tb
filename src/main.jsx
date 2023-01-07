import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";
import App from "./App";
const RootApp = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
