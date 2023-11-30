import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner" id="home">
      <Navbar />
      <div className="banner__content">
        <div className="container-fluid">
          <div className="banner__text col-md-12 p-0 pt-4 pb-4">
            <h1>Welcome to VeevHub</h1>
            <p>Your Beauty Our Duty</p>
            <div className="banner__btn">
              <a href="#services" className="btn-smart">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
