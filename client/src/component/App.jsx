import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbr from "./Navbr.jsx";
import Searchbr from "./Searchbr.jsx";
import Home from "./Home.jsx";
import Chats from "./Chats.jsx";
import Roomie from "./Roomie.jsx";
import About from "./About.jsx";
function App() {
  return (
    <Router>
      <Navbr />
      <Searchbr />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Roomie" element={<Roomie />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
