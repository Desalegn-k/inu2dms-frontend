import React from "react";
import { jwtDecode } from "jwt-decode";
import "../styles/studentHome.css";

import img1 from "../assets/bcg2.jpg";
import img2 from "../assets/green.jpg";
import img3 from "../assets/students1.jpg";

export default function StudentHome() {
  const userName = localStorage.getItem("user");
  const token = localStorage.getItem("token");
   

  return (
    <div>
      <div className="home-container">
        {/* <!-- From Uiverse.io by andrew-demchenk0 -->  */}
        <div class="pyramid-loader">
          <div class="wrapper">
            
            <span class="side side4">welcome {"   "}{userName}</span>
            <span class="shadow"></span>
          </div>
        </div>
        {/* <h1 className="welcome-title">Welcome {userName} </h1> */}

        {/* <p className="welcome-text">
          You are now logged in to the Dormitory Management System.
        </p> */}

        {/* ✅ FIXED SLIDER */}
        <div className="slider">
          <div className="slider-track">
            <img src={img1} alt="slide 1" />
            <img src={img2} alt="slide 2" />
            <img src={img3} alt="slide 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
