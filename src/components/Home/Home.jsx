import React from "react";
import "./Home.css";
import logo_header from "../../assets/Assets/logo_header.png";
import { AiOutlineBars } from "react-icons/ai";

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
