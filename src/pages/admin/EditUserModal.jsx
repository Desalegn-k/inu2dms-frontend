import React, { useState } from "react";
import { api } from "../../api/api";
import "./css/EditUserModal.css";

export default function EditUserModal({ user, onClose }) {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
  });

  const submit = async () => {
    await api.put(`admin/users/${user.id}`, form);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Edit User</h3>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br></br>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br></br>
        <button onClick={submit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
