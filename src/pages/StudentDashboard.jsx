import { Outlet } from "react-router-dom";
import Sidebar from "../componenets/Sidebar";
import "../styles/dashboard.css";

export default function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
