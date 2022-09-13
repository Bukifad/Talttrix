import React from "react";
import Taltrix from "../images/taltrix.png";
import "./Css/Home.css";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="NavBar">
      <img src={Taltrix} alt="" className="NavBar-logo" />
      <ul>
        <li>
         Home
        </li>

        <li>
          About
        </li>
        <li>
          Service
        </li>
        <li>
         Contact Us
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
