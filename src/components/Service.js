import React from "react";
import "./Css/Service.css";
import icon2 from "../images/icon.png";

function Service() {
  return (
    // main container
    <div id=" service" className="service-container">
      {/* head text */}
      <h3 className="h-text ">Service offering</h3>
      {/* flex */}
      <div className="flex-container">
        <div className="left-text">
          <h4 className="left-text1">
            Business Process <br /> Outsourcing{" "}
          </h4>
          <br />
          <h4 className="left-text2">
            Talent and <br />
            Transformation{" "}
          </h4>
        </div>
        {/* middle container */}
        <div className="mid-container">
          {/* middle text */}
          <h5>IT and Software Development </h5>
          {/* middle section */}
          <div className="mid-box">
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Web Development</p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Mobile Application Development</p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>DevOps and Quality Assurance</p>
            </div>
          </div>
          {/* middle text */}
          <h5>Technology Support Services </h5>
          <div className="mid-box">
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Customer Service </p>
            </div>
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Telemarketing</p>
            </div>
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Project Management</p>
            </div>
          </div>
          {/* middel text */}
          <h5>Creative Services </h5>
          <div className="mid-box">
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>UI/UX Design </p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>UI/UX Design</p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Animation</p>
            </div>
          </div>
        </div>
        {/* right container */}

        <div className="right-container">
          {/* right text */}
          <h5>Big Data and Analytics Services </h5>
          {/* right section */}
          <div className="right-box">
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Data Entry and ETL Services</p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Data Analytics </p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Machine Learning</p>
            </div>
          </div>

          <h5>Cybersecurity Services </h5>
          <div className="right-box">
            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Vulnerability Testing</p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Penetration Testing</p>
            </div>

            <div className="icon-text">
              <div className="icon-circle">
                {" "}
                <img src={icon2} alt="" className="icon2" />
              </div>
              <p>Cybersecurity Engineering </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
