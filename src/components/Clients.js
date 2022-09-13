import React from 'react'
import "./Css/Clients.css";
import logo from "../images/logo.png";
import tech from "../images/t4d 1.png";
import gloepid from "../images/ct-logo copy.png";

function Clients() {
  return (
    // container
    <div className='clients-container'>
      {/* header */}
      <h3 className='clients-header'>Our Clients</h3>
      {/* text */}
      <p className='clients-text'>Since its launch Taltrix has received tons of love from startup founders and  <br/>entrepreneurs from around the globe.</p>
{/* logos */}
      <div className='image-logos' >
       
      <img src={logo} alt="" className="prunedge" />
      
      
      <img src={tech} alt="" className="tech" />
      
     
      <img src={gloepid} alt="" className="gloepid" />
      

      </div>

    </div>
  )
}

export default Clients