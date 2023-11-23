import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const a = Array.from({ length: 30 }, (_, i) => i + 1);
console.log(a);
