import React from 'react'
import './css/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
export default function Navbar() {
  const navigate=useNavigate();

  // const token = localStorage.getItem("token");
  const userName = localStorage.getItem("user");
  // let name = "";

  // if (token) {
  //   try {
  //     name = jwtDecode(token).name;
  //   } catch {}
  // }
  

  

  return (
    <section class="main-header-container-section">
      <header class="header-container">
        <div class="header-leftpart">
          <div class="logo">
            <a href="/">
              <img
                src="../images/inulogo.jpg"
                alt="Home-INU Dorimitory Management System"
              />
            </a>
          </div>
          <div class="university-name">
            <h1>Injibara University</h1>

            <h3>Dorimitory Management System</h3>
            <p>explore your creative potential</p>
          </div>
        </div>
        <div class="header-writepart">
          <p class="home">
            <button onClick={() => navigate("/")}>Home</button>
          </p>
          <p className="home">
            <button
              onClick={() => {
                const role = localStorage.getItem("role");

                if (role === "admin") {
                  navigate("/admin");
                } else if (role === "staff") {
                  navigate("/proctor");
                } else {
                  navigate("/stu-dashboard");
                }
              }}
            >
              Me
            </button>
          </p>

          <div class="dropdown">
            <a href="fas.html" class="dropbtn">
              Facilities <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="dropdown-content">
              <ul>
                <li>
                  {" "}
                  <a href="block.html">Blocks</a>
                </li>
                <hr />
                <li>
                  {" "}
                  <a href="rooms.html">Rooms</a>
                </li>
                <hr />
                <li>
                  {" "}
                  <a href="showr.html">Shower</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="dropdown">
            <a href="#" class="dropbtn">
              Rules <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="dropdown-content">
              <ul>
                <li>
                  <a href="roomrul.html">Room Rules</a>
                </li>
                <hr />
                <li>
                  {" "}
                  <a href="vru.html">Visitor Rules</a>
                </li>
                <hr />
                <li>
                  {" "}
                  <a href="sar.html">Safity Rules</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <a href="#" class="dropbtn">
              Latest <i class="fa-solid fa-chevron-down"></i>
            </a>
            <div class="dropdown-content">
              <ul>
                <li>
                  <a href="news.html">News</a>
                </li>
                <hr />
                <li>
                  <a href="anu.html">Announcements </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <p class="home about">
            <a href="#">About us</a>
          </p> */}
          <p class="home contact">
            <a href="#">Contact us</a>
          </p>

          {/* <p class="home sign-in"><a href="/pages/signup.html">Sign Up</a></p> */}
          {/* <button onClick={() => navigate("/stu-register")}>Register</button> */}

          {!localStorage.getItem("token") && (
            <p className="home login">
              <button onClick={() => navigate("/login")}>LOGIN</button>
            </p>
          )}
          {localStorage.getItem("token") && (
            <p style={{ color: "orange", fontWeight: "bold", display:"flex",alignItems:"center"}}>
              {" "}
              <i className="fas fa-user-graduate profile"></i>
              {userName}
            </p>
          )}
        </div>
      </header>
    </section>
  );
}
