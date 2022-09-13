import React from "react";
import "./Css/Contact.css";
import frame from "../images/Frame logo.png";
// socials
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
// contact
import phone from "../images/phone.png";
import email from "../images/email.png";
import earth from "../images/earth.png";
import pin from "../images/pin.png";

function Contact() {
  return (
    <div className="footer-container">
      <div className="flex-footer">
        <div f-logo>
          <img src={frame} alt="" className="" />
        </div>

        <div>
          <h5 className="footer-head">Social</h5>

          <div className="social">
            <img src={facebook} alt="" className="" />
            <p>Facebook</p>
          </div>

          <div className="social">
            <img src={twitter} alt="" className="" />
            <p>Twitter</p>
          </div>

          <div className="social">
            <img src={instagram} alt="" className="" />
            <p>Instagram</p>
          </div>

          <div className="social">
            <img src={linkedin} alt="" className="" />
            <p>Linkedin</p>
          </div>
        </div>

        <div>
          <h5 className="footer-head">Contact Us</h5>

          <div className="social">
            <img src={phone} alt="" className="" />
            <p>+234 (0) 706 865 7888</p>
          </div>

          <div className="social">
            <img src={email} alt="" className="" />
            <p>info@taltrix.com</p>
          </div>

          <div className="social">
            <img src={earth} alt="" className="" />
            <p>www.taltrix.com</p>
          </div>

          <div className="social">
            <img src={pin} alt="" className="" />
            <p>
              7B Omo Ighodalo Street, Ogudu GRA, Lagos State,
              <br />
              Nigeria <br />
              9, Tema Street, Wuse Zone 6, FCT Abuja, Nigeria{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <p className="copyright">© 2021 Taltrix</p>
    </div>
  );
}

export default Contact;
