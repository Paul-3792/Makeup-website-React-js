import React from "react";

const Menu = () => {
  return (
    <div className="about" id="services">
      <div className="container-fluid">
        <div className="row">
            <h1 className="text-center">Our Services</h1>
          <div className="col-md-6 pt-5">
            <p>
              VeevHub's mission is to elevate, enable, approve, and eventually
              assemble confidence in ladies around the globe through astounding
              items that empower both inward and external beauty and
              otherworldly edification while additionally giving chances to
              self-improvement and budgetary reward.
            </p>
            <div className="about__btn">
              <a href="#services-1" className="btn-smart">
                Click To see
              </a>
            </div>
          </div>
          <div className="col-md-6 ps-3 pt-5 d-flex">
            <div className="about__img">
              <img
                src="/img/MakeUp Classes.jpeg"
                width="430"
                height="430"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
