import EditUserModal from "./EditUserModal";
import { useEffect,useState } from "react";
 import { api } from "../../api/api";
  

export default function ManageProctors() {
  const [proctors, setProctors] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    const res = await api.get("admin/users/staff");
    setProctors(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete proctor?")) return;
    await api.delete(`admin/users/${id}`);
    load();
  };

  return (
    <div className="managestu-container">
      <h2>Manage Proctors</h2>
      <table className="managestudents-table"
      border="2px"
      >
        <thead>
          <tr className="tr-th">
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {proctors.map((p) => (
            <tr key={p.id} className="body-tr">
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>
                <button onClick={() => setSelected(p)} className="edit">
                  Edit
                </button>
                <button onClick={() => remove(p.id)} className="delete">
                  Delete
                </button>
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
            load();
          }}
        />
      )}
    </div>
  );
}
