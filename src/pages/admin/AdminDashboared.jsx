import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./admin.css";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const navigate=useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-home ma"></i>
            <span> Home</span>
          </NavLink>

          <NavLink
            to="create-admin"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-shield ma"></i>
            <span> Create Admin</span>
          </NavLink>

          <NavLink
            to="create-proctor"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-tie ma"></i>
            <span> Create Proctor</span>
          </NavLink>

          <NavLink
            to="student-reg"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-plus ma"></i>
            <span> Add Students</span>
          </NavLink>

          <NavLink
            to="manage-admins"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-users-cog ma"></i>
            <span> Manage Admins</span>
          </NavLink>

          <NavLink
            to="manage-proctors"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-cog ma"></i>
            <span> Manage Proctors</span>
          </NavLink>

          <NavLink
            to="manage-stu-account"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fas fa-user-graduate ma"></i>
            <span> Manage Students</span>
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
              marginTop: "45px",
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
            ></i>
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
