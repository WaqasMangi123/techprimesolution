import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Creating root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />  {/* Only render the App component */}
  </React.StrictMode>
);
