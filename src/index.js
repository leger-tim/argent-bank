import React from "react";
import ReactDOM from "react-dom/client"; // Notez l'utilisation de 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
