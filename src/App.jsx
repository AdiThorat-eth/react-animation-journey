import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Agence from "./pages/Agency";
import Project from "./pages/Work";

const App = () => {
  return (
    <div className="text-white">
      {/* <Link className="text-red-400 text-md mr-10" to="/">Hero</Link>
      <Link className="text-red-400 text-md mr-10" to="/agence">Agence</Link>
      <Link className="text-red-400 text-md mr-10" to="/project">Project</Link> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/agence" element={<div>Agence</div>} />
        <Route path="/project" element={<div>Project</div>} />
      </Routes>
    </div>
  );
};

export default App;
