import '../App.css';
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1 className ="logo" >FULVIN.</h1>
      <li className="Button">
        <Link to="/newBrew">BÖRJA BRYGG <div id="pil_lila2"></div></Link>
      </li>
    </div>
  );
}

export default LandingPage;
