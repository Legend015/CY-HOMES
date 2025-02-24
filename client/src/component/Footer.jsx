import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="bubble" style={{ left: "10%", width: "70px", height: "70px", animationDuration: "4s" }}></div>
      <div className="bubble" style={{ left: "30%", width: "25px", height: "25px", animationDuration: "6s" }}></div>
      <div className="bubble" style={{ left: "50%", width: "20px", height: "20px", animationDuration: "5s" }}></div>
      <div className="bubble" style={{ left: "70%", width: "30px", height: "30px", animationDuration: "7s" }}></div>
      <div className="bubble" style={{ left: "90%", width: "18px", height: "18px", animationDuration: "5.5s" }}></div>
      <div className="text-center md:text-left pt-5">

          <h2 className="text-xl  font-semibold">CY-HOMES</h2>
          <p className="text-sm mt-1">© {new Date().getFullYear()} CY-HOMES. All Rights Reserved.</p>
        </div>

        
         
            <div >
          <a href="/about" >About</a>
          </div>
          <div>
          <a href="/services" >Services</a>
          </div>
          <div>
          <a href="/contact" >Contact</a>
          </div>
        

          <h2 className="text-xl font-semibold">Follow Us</h2>
        <div className="social-icons">
          
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle  />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill  />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  />
          </a>
        
      </div>
    </footer>
  );
};

export default Footer;
