import React from "react";
import "./Header.css";
import Select from "react-select";

const Header = () => {
  const countries = [
    {
      value: "ne",
      label: (
        <>
          <img
            src="https://flagcdn.com/np.svg"
            alt="Nepal"
            className="flag-icon"
          />{" "}
          Nepal
        </>
      ),
    },
    {
      value: "us",
      label: (
        <>
          <img
            src="https://flagcdn.com/us.svg"
            alt="US"
            className="flag-icon"
          />{" "}
          United States
        </>
      ),
    },

    {
      value: "ca",
      label: (
        <>
          <img
            src="https://flagcdn.com/ca.svg"
            alt="Canada"
            className="flag-icon"
          />{" "}
          Canada
        </>
      ),
    },
    {
      value: "gb",
      label: (
        <>
          <img
            src="https://flagcdn.com/gb.svg"
            alt="UK"
            className="flag-icon"
          />{" "}
          United Kingdom
        </>
      ),
    },
    {
      value: "au",
      label: (
        <>
          <img
            src="https://flagcdn.com/au.svg"
            alt="Australia"
            className="flag-icon"
          />{" "}
          Australia
        </>
      ),
    },
    {
      value: "in",
      label: (
        <>
          <img
            src="https://flagcdn.com/in.svg"
            alt="India"
            className="flag-icon"
          />{" "}
          India
        </>
      ),
    },
    {
      value: "fr",
      label: (
        <>
          <img
            src="https://flagcdn.com/fr.svg"
            alt="France"
            className="flag-icon"
          />{" "}
          France
        </>
      ),
    },
    {
      value: "de",
      label: (
        <>
          <img
            src="https://flagcdn.com/de.svg"
            alt="Germany"
            className="flag-icon"
          />{" "}
          Germany
        </>
      ),
    },
    {
      value: "jp",
      label: (
        <>
          <img
            src="https://flagcdn.com/jp.svg"
            alt="Japan"
            className="flag-icon"
          />{" "}
          Japan
        </>
      ),
    },
  ];
  return (
    <div className="country-selector">
      <Select
        options={countries}
        classNamePrefix="country-select"
        placeholder="Select Country"
      />
    </div>
  );
};

export default Header;
