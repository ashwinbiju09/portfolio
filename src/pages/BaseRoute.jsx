import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

const BaseRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default BaseRoute;
