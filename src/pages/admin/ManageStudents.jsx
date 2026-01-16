import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import EditUserModal from "./EditUserModal";
import './css/managestudents.css'

export default function ManageAdmins() {
  const [admins, setAdmins] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadAdmins = async () => {
    const res = await api.get("admin/users/user");
    setAdmins(res.data);
  };

  useEffect(() => {
    loadAdmins();
  }, []);

  const deleteAdmin = async (id) => {
    if (!window.confirm("Delete student?")) return;
    await api.delete(`admin/users/${id}`);
    loadAdmins();
  };

  return (
    <div className="managestu-container">
      <h2>Manage Students Account</h2>

      <table border="1px"    className="managestudents-table">
        <thead>
          <tr className="tr-th">
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((a) => (
            <tr key={a.id} className="body-tr">
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>
                <button onClick={() => setSelected(a)} className="edit">Edit</button>
                <button onClick={() => deleteAdmin(a.id)} className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <EditUserModal
          user={selected}
          onClose={() => {
            setSelected(null);
            loadAdmins();
          }}
        />
      )}
    </div>
  );
}
