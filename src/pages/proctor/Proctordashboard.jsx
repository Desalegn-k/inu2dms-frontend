import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./css/proctor.css";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar procctor-sidebar">
        <h2>Proctor Dashboard</h2>
        <nav>
          <NavLink
            to="/proctor"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-home ma"></i>
            <span> Home</span>
          </NavLink>

          <NavLink
            to="studente-list"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-cog ma"></i>
            <span> View All studebts</span>
          </NavLink>
          <NavLink
            to="assigned"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-cog ma"></i>
            <span>Assigned students</span>
          </NavLink>

          <NavLink
            to="manage-reports"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-graduate ma"></i>
            <span> Student Reports</span>
          </NavLink>

          <button
            onClick={() => {
              Swal.fire({
                title: "<p>Are you sure you want to logout?</p>",
                html: "<p style='font-size:23px; color:#00ffff;'>You will need to login again to continue.</p>",
                icon: "warning",
                background: "#ca7f7fff",
                color: "#fff",

                showCancelButton: true,
                confirmButtonText: "Logout",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
              }).then((result) => {
                if (result.isConfirmed) {
                  logout();
                }
              });
            }}
            style={{
              marginLeft: "130px",
              marginTop: "100px",
              display: "flex",
              alignItems: "center",
              textAlign: "right",
              background: "transparent",
              border: "none",
              color: "#00ffaa",
              fontSize: "30px",
              cursor: "pointer",
            }}
            className="logout"
          >
            <i
              className="fa-solid fa-right-from-bracket"
              style={{
                marginRight: "5px",
                width: "20px",
                color: "#00ffaa", // normal color
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "red")}
              onMouseLeave={(e) => (e.target.style.color = "#00ffaa")}
          title="Logout"  ></i>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
