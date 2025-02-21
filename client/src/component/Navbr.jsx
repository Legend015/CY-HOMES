import React from "react";
import "./Navbr.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbr() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img
              src="./src/assets/logo.jpg"
              alt="Logo"
              className="logo d-inline-block align-text-top"
            />
            CY HOMES
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/Chats">
                  Chats
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/Roomie">
                  Roomie
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="profile">
            {/* Wrap the profile image with a Link to redirect to the Register page */}
            <Link to="/login">
              <img
                className="profile-img"
                src="./src/assets/profile-user.png"
                alt="profile-photo"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbr;
