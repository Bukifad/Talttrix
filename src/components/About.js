import React from "react";
import "./Css/About.css";
import icon from "../images/icon.png";
function About() {
  return (
    <>
      <div id="about" className="about-container">
        <p className="p-about">ABOUT US</p>
        <h4>How we Work with our Clients </h4>
        <div className="hr-org-body">
          <div className="hr-org-container">
            <div className="hr-org">
              <h5>HR Team</h5>
              <p>
                We work with HR teams(leaders) at fast-growing startups to build
                their talent pipeline into Africa. Our team works with your team
                to match you with the talents that meet your evolving technical
                skill, experience, culture, and compensation requirements.
              </p>
              <ul>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  Tell us what you need.
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  We find and send you a shortlist of matching pre-vetted
                  talents in our pool.
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  We schedule culture-fit interviews with your HR team
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  Your HR team selects your preferred candidates
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  Recruitment fee payment
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  Full-time employment and contract signing
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  If necessary, the hired candidates commence a three months
                  trial onboarding period.
                </li>
              </ul>
            </div>
          </div>
          <div className="hr-org-container">
            <div className="hr-org">
              <h5>Organizations</h5>
              <p>
                We work with organisations and business leaders looking to
                outsource their projects and business functions while focusing
                on other core business activities.
              </p>
              <ul>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  We listen to your business requirements, and bottlenecks
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  We set up an experienced team best suited to achieve your
                  business needs
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  Our team and project managers work hand-in-hand with your team
                  through the term of our contract
                </li>
                <li className="icon-label">
                  <img src={icon} alt="" className="icon" />
                  Post project delivery, our project managers work with your
                  team for a detailed retro and investigation to find other
                  opportunities to improve your business processes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text">
            <div className="span-text">1</div>
            <p>
              We deliver cutting-edge outsourcing services <br /> and solutions
              for progressive companies while <br /> they focus on other core
              business activities.
            </p>
          </div>
          <div className="text">
            <div className="span-text">2</div>
            <p>
              We connect top companies to ambitious and
              <br /> experienced African talents matching their <br />{" "}
              experience, culture, and goals to achieve <br /> success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
