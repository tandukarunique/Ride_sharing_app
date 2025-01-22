import React from "react";
import "./Home.css";
import logo_header from "../../assets/Assets/logo_header.png";
import { AiOutlineBars } from "react-icons/ai";
import Header from "../Header/Header";
import { FaUser } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import home_phonebg from "../../assets/Assets/home_phonebg.png";
import image1 from "../../assets/Assets/image1.png";
import image2 from "../../assets/Assets/image2.png";
import image3 from "../../assets/Assets/image3.png";
import instant from "../../assets/Assets/instant.png";
import realtime from "../../assets/Assets/realtime.png";
import multiple from "../../assets/Assets/multiple.png";
import affordable from "../../assets/Assets/affordable.png";
import car from "../../assets/Assets/car.png";
import bike from "../../assets/Assets/bike.png";
import jeep from "../../assets/Assets/jeep.png";
import truck from "../../assets/Assets/truck.png";

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
            <img src={home_phonebg} className="phone_bg" alt="" />
            <div className="stats-container">
              <div class="stat-card">
                <div class="icon">
                  <FaCar />
                </div>
                <div class="text">
                  <h2>10,000 K</h2>
                  <p>Completed Rides</p>
                </div>
              </div>

              <div class="stat-card">
                <div class="icon">
                  <FaUser />
                </div>
                <div class="text">
                  <h2>2,000 K</h2>
                  <p>Active Riders</p>
                </div>
              </div>

              <div class="stat-card">
                <div class="icon">
                  <FaCar />
                </div>
                <div class="text">
                  <h2>500 K</h2>
                  <p>Active Drivers</p>
                </div>
              </div>

              <div class="stat-card">
                <div class="icon">
                  <FaTimesCircle />
                </div>
                <div class="text">
                  <h2>1.5 %</h2>
                  <p>Cancel Ratio</p>
                </div>
              </div>
            </div>
            <div className="home2">
              <h1 className="home2-h">Ride Smarter, Ride Better</h1>
              <div className="aligns">
                <div className="left-align">
                  <img src={image1} alt="" />
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                </div>
                <div className="right-align">
                  <h2>
                    <img src={instant} /> Instant Booking
                  </h2>
                  <p>
                    Get a ride on demand with just a few taps. Choose your
                    vehicle and book instantly!ew taps. Choose your vehicle and
                    book instantly!
                  </p>
                  <h2>
                    <img src={realtime} />
                    Real Time Tracking
                  </h2>
                  <p>
                    Track your driver’s location in real-time and know exactly
                    when your ride will arrive.eal-time and know exactly when
                    your ride will arrive.
                  </p>
                  <h2>
                    <img src={multiple} />
                    Multiple Payment Option
                  </h2>
                  <p>
                    Pay your way with flexible options, including cash, card,
                    and digital wallets including cash, card, and digital
                    wallets
                  </p>
                  <h2>
                    <img src={affordable} />
                    Affordable Pricing
                  </h2>
                  <p>
                    Enjoy transparent, affordable fares with no hidden fees.
                    Ride within your budget with no hidden fees. Ride within
                    your budget
                  </p>
                </div>
              </div>
              <div className="wide-range">
                <h1 className="wide-h1">Wide Range of Vechicles</h1>
                <div className="wide-images">
                  <div className="image-container">
                    <img src={car} alt="Car" />
                    <div className="overlay-text">Car</div>
                  </div>
                  <div className="image-container">
                    <img src={bike} alt="Bike" />
                    <div className="overlay-text">Bike</div>
                  </div>
                  <div className="image-container">
                    <img src={jeep} alt="Jeep" />
                    <div className="overlay-text">Jeep</div>
                  </div>
                  <div className="image-container">
                    <img src={truck} alt="Truck" />
                    <div className="overlay-text">Truck</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
