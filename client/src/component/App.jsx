import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbr from "./Navbr.jsx";
import Searchbr from "./Searchbr.jsx";
import Home from "./Home.jsx";
import Chats from "./Chats.jsx";
import Roomie from "./Roomie.jsx";
import About from "./About.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";  // Import Register component
import Footer from "./Footer.jsx";

/* function App() {
  return (
    <Router>
      <Navbr />
      
      <Searchbr />
      
      <div className="container">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Roomie" element={<Roomie />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> 
          
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App; */
function App() {
  return (
    <Router>
    <div className="app-container">
      <Navbr />
      <Searchbr />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Roomie" element={<Roomie />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
      <Footer /> {/* Footer stays at the bottom */}
    </div>
    </Router>
  );
}

export default App;
