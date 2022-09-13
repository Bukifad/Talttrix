import React from "react";
import "./Css/About2.css";
import group from "../images/Group.svg";

function About2() {
  return (
    <div className="about2-container">
      <div className="box-1">
        <div>
        <img src={group} alt="" className="group" />
          <h3 className="text-h3">
            Why people turn <br /> up to <span>Taltrix</span>
          </h3>
          <div className="header-text">
            <h5>As business leaders</h5>
            <p>
              We understand how broken, painful, and often tedious
              <br /> project execution, human capacity planning and hiring can{" "}
              <br /> be.
            </p>
            <br />
            <h5>As consultants</h5>
            <p>
              We know the benefits outsourcing processes can bring <br />
              to a business. We walk hand-in-hand with companies to <br /> drive
              success while they focus on other core activities.
            </p>
            <br />
            <h5>As African knowledge experts</h5>
            <p>
              We have first-hand experience navigating the broken <br /> global
              hiring pipeline. 
            </p>
            <br />
            <h5>Our robust partner ecosystem</h5>
            <p>
              We have proven industry leaders who trust us at what <br /> we do
              and our ability to deliver value.
            </p>
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="head-text">
          <h4>
            Why Work <br /> With Us? 
          </h4>
        </div>
        <div className="para-text">
          <div className="num-text">1</div>
          <p className="para-box">
            We are driven by a mission to help <br /> businesses execute and
            have the <br />
            best talents to build their <br />
            innovative solutions. {" "}
          </p>
        
          <div className="num-text">2</div>
          <p className="para-box">
          We care- about your business <br/> success and enabling your <br/>business hire the best talent,<br/> timely.
          </p>
          <div className="num-text">3</div>
          <p className="para-box">
          We care- about your business <br/> success and enabling your <br/>business hire the best talent,<br/> timely.
          </p>


        </div>
         
          </div>
        </div>


        
          
      
      
  
  );
}

export default About2;
