import React from "react";
import "./Css/Home.css";
import img1 from "../images/Rectangle 133.png";
import img2 from "../images/Ellipse 1.png";
import img3 from "../images/Rectangle 131.png";
import img4 from "../images/Ellipse 2.png";
import img5 from "../images/Rectangle 132.png";

function Home(props) {
  return (
    <>
      <div className="Container">
        <div className="my-image">
          <img src={img1} alt="" className="img-1" />
        </div>
        <div className="business">
          <h2 className="">
            Business process service <br /> company
          </h2>
          <p className="p-talents">
            At Taltrix, we harness the power of vetted African talents to help
            top
            <br />
            companies improve their business process and expand their team{" "}
            <br />
            while staying ahead in a fast-changing world.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="image">
        <img src={img2} alt="" className="img-2" />
        <img src={img3} alt="" className="img-3" />
        <img src={img4} alt="" className="img-4" />
      </div>
      <div>
        <img src={img5} alt="" className="img-5" />
      </div>
    </>
  );
}

export default Home;
