import React, { useState, useEffect } from "react";
import { api } from "../api/api";
import './css/studentreg.css'
import { useNavigate } from "react-router-dom";

export default function StudentRegister() {
  const [colleges, setColleges] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate=useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
    college_id: "",
    department_id: "",
    year: "",
  });
  const [message, setMessage] = useState("");

  // Fetch colleges
  useEffect(() => {
    async function fetchColleges() {
      try {
        const res = await api.get("/colleges");
        setColleges(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchColleges();
  }, []);

  // Fetch departments when college is selected
  useEffect(() => {
    async function fetchDepartments() {
      if (!form.college_id) return;
      try {
        const res = await api.get(`/colleges/${form.college_id}/departments`);
        setDepartments(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDepartments();
  }, [form.college_id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/sturegister", form); // create student API
      setMessage(res.data.message);
      setForm({
        full_name: "",
        studentId:"",
        gender: "",
        email: "",
        password: "",
       
        college_id: "",
        department_id: "",
        year: "",
      });

      setTimeout(()=>{
         navigate("/admin/manage-stu-account");

      },2000)

      

     

    } catch (err) {
      setMessage(err.response?.data?.message || "Error registering student");
    }
  };

  return (
    <div className="whole">
      <div
        style={{
          // padding: 20,
          // border: "1px solid #ddd",
          borderRadius: 8,
        }}
        className="student-reg-container"
      >
        <h2 style={{ textAlign: "center", color: "white" }}>
          Student Registration
        </h2>
        {message && (
          <p style={{ color: "red", textAlign: "center" }}>{message}</p>
        )}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          className="student-reg-form"
        >
          <div className="both-block">
            <div className="first-block">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={form.full_name}
                onChange={handleChange}
              />

              <select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="second-block">
              <input
                type="text"
                name="studentId"
                placeholder="Student Id"
                value={form.studentId}
                onChange={handleChange}
              />
              <select
                name="college_id"
                value={form.college_id}
                onChange={handleChange}
              >
                <option value="">Select College</option>
                {colleges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <select
                name="department_id"
                value={form.department_id}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="year"
                max="7"
                min="1"
                placeholder="Year"
                value={form.year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="div-reg">
            <button type="submit">Register</button>
          </div>
        </form>
              </div>
    </div>
  );
}
