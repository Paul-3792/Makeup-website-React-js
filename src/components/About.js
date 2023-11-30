import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container-fluid">
        <div className="row ps-4">
            <h1 className="text-center pb-3">About Us</h1>
          <div className="col-md-6">
            <p>
              VeevHub's mission is to elevate, enable, approve, and eventually
              assemble confidence in ladies around the globe through astounding
              items that empower both inward and external beauty and
              otherworldly edification while additionally giving chances to
              self-improvement and budgetary reward.
            </p>
            {/* <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div> */}
          </div>
          <div className="col-6 d-flex ps-5">
              <img src="/img/bridal makeup.png" width="400" height="400" alt="makeup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
