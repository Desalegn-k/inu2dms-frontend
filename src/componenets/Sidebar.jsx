import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function Sidebar() {
  const navigate=useNavigate();

   const logout = () => {
     localStorage.removeItem("token");
     navigate("/login");
   };
  return (
    <div className="sidebar student-sidebar">
      <h2 className="logo">Student</h2>

      <ul>
        <li>
          <NavLink
            to="/stu-dashboard"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stu-dashboard/profile"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-user"></i> Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stu-dashboard/my-room"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-bed"></i> My Room
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stu-dashboard/report"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-file-alt"></i> Report Issue
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stu-dashboard/my-report"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-file-alt"></i> My Report
          </NavLink>
        </li>
        <li>
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
              marginTop: "60px",
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
        </li>
      </ul>
    </div>
  );
}
