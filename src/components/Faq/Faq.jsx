import React from "react";
import "./Faq.css";
const FAQSection = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Find Your Answers Fast</h2>
      <div className="faq-grid">
        <div className="faq-item">
          <div className="faq-left">
            <div className="faq-icon">+</div>
            <span className="faq-text">
              Does OvoRide support real-time tracking?
            </span>
          </div>
          <span className="faq-expand">+</span>
        </div>

        <div className="faq-item">
          <div className="faq-left">
            <div className="faq-icon">+</div>
            <span className="faq-text">
              What platforms are supported by OvoRide?
            </span>
          </div>
          <span className="faq-expand">+</span>
        </div>

        <div className="faq-item">
          <div className="faq-left">
            <div className="faq-icon">+</div>
            <span className="faq-text">
              Driver registrations and approvals through OvoRide?
            </span>
          </div>
          <span className="faq-expand">+</span>
        </div>

        <div className="faq-item">
          <div className="faq-left">
            <div className="faq-icon">+</div>
            <span className="faq-text">
              Does OvoRide support payment integration?
            </span>
          </div>
          <span className="faq-expand">+</span>
        </div>

        <div className="faq-item">
          <div className="faq-left">
            <div className="faq-icon">+</div>
            <span className="faq-text">
              Does OvoRide offer ride history for users and drivers?
            </span>
          </div>
          <span className="faq-expand">+</span>
        </div>

        <div className="faq-item">
          <div className="faq-left">
            <div className="faq-icon">+</div>
            <span className="faq-text">How secure is the data in OvoRide?</span>
          </div>
          <span className="faq-expand">+</span>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
