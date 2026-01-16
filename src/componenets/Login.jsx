import React, { useState } from "react";
import { api } from "../api/api"; // your axios instance
import { useNavigate } from "react-router-dom";
import "./css/Login.css"

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/sturegister/login", { email, password });

      // Store token and user info
      localStorage.setItem("token", res.data.token);
     const firstName = res.data.name?.trim()?.split(/\s+/)[0];

     localStorage.setItem("user", firstName);

     localStorage.setItem("role", res.data.role);
     const role = localStorage.getItem("role");
     if(role==='user'){
       navigate("/stu-dashboard");

     }
     if(role==="admin"){
       navigate("/admin");

     }
     if (role === "staff") {
       navigate("/proctor");
     }

      setMessage("Login successful!");
     
      // onLogin(res.data.user);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <img src="../images/inulogo.jpg" alt="" className="login-logo" />

        <h2 style={{ textAlign: "center" }}>Welcome Back!</h2>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        {message && <p style={{ color: "red", display: "block" }}>{message}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Login
        </button>
        
      </form>
      <img src="../images/login.png" alt="" className="login-man" />
    </div>
  );
}
