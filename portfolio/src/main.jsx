import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Project from "./project.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource-variable/lexend-zetta/wght.css";
import "@fontsource/special-gothic-expanded-one";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
