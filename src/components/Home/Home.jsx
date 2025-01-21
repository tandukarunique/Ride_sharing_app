import React from "react";
import "./Home.css";
import logo_header from "../../assets/Assets/logo_header.png";
import { AiOutlineBars } from "react-icons/ai";
import Header from "../Header/Header";
import { FaUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="body-overlay">
        <div className="header">
          <div className="container">
            <div className="logo">
              <img src={logo_header} />
              <AiOutlineBars />
            </div>
            <div className="header-items">
              <a href="">Home</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
              <Header />
            </div>
          </div>
        </div>
        <div className="home">
          <div className="home-container">
            <h1>Ride Your Way, Anytime, Anywhere</h1>
            <div className="buttons">
              <button className="btn">
                {" "}
                <FaUser />
                Download rider app
              </button>
              <button
                className="btn"
                style={{ color: "black", backgroundColor: "lightgreen" }}
              >
                <FaCar /> Download driver app
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
