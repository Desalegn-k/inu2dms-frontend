import React, { useState } from "react";
import { api } from "../../api/api";
import './css/createproctor.css'

export default function CreateProctor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password_hash: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/sturegister/create-proctor", form);
      setMessage(res.data.msg);
      setForm({ name: "", email: "", password_hash: "" });
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error creating proctor");
    }
  };

  return (
    <div className="form-box">
      <h3>Create Proctor's Account</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Ful Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password_hash"
          type="password"
          placeholder="Password"
          value={form.password_hash}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
