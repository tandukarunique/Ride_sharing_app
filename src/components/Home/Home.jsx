import React from "react";
import "./Home.css";
import logo_header from "../../assets/Assets/logo_header.png";
import { AiOutlineBars } from "react-icons/ai";
import Header from "../Header/Header";
import { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="body-overlay">
        <div className="header">
          <div className="container">
            <div className="logo">
              <img src={logo_header} />
              <AiOutlineBars onClick={toggleMenu} className="menu-icon" />
            </div>
            <div className={`header-items ${isMenuOpen ? "show-menu" : ""}`}>
              <a href="">Home</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
              <Header />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
