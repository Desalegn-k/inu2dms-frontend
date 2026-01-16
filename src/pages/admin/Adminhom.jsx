import React from "react";
import { jwtDecode } from "jwt-decode";
import "../../styles/studentHome.css";

 

export default function Adminhome() {
  const userName = localStorage.getItem("user");

  return (
    <div>
      <div className="home-container">
        <div class="pyramid-loader">
          <div class="wrapper">
            <span class="side side4">
              WELCOME {"   "}
              {userName}
            </span>
            <span class="shadow"></span>
          </div>
        </div>
         
      </div>
    </div>
  );
}
