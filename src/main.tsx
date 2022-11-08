import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Homepage from "./pages/Homepage";
import Aboutme from "./pages/Aboutme";
import Project from "./pages/Project";

// CSS
import "./styles/sass/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<Homepage />} />
        <Route />
      </Routes>
    </Router>
  </React.StrictMode>
);
