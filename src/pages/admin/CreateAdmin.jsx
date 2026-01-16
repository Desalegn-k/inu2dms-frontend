import React, { useState } from "react";
import { api } from "../../api/api";

export default function CreateAdmin() {
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
      const res = await api.post("/sturegister/create-admin", form);
      setMessage(res.data.msg);
      setForm({ name: "", email: "", password_hash: "" });
    } catch (err) {
      setMessage(err.response?.data?.msg || "Error creating admin");
    }
  };

  return (
    <div className="form-box">
      <h3>Create Admin</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
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
        <button type="submit">Create Admin</button>
      </form>
    </div>
  );
}
