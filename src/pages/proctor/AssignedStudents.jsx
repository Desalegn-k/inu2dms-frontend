import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import EditAssignmentModal from "./EditAssignmentModal";
import "./css/assigned.css";

export default function AssignedStudents() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    const res = await api.get("/admin/assigned");
    setData(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const unassign = async (id) => {
    if (!window.confirm("Unassign this student?")) return;
    await api.delete(`/admin/unassigned/${id}`);
    load();
  };

  const unassignAll = async () => {
    if (!window.confirm("Unassign ALL students?")) return;
    await api.put("/admin/unassign-all");
    load();
  };

  const handleSave = async (updated) => {
    await api.put(`/admin/edit-r/${updated.assignment_id}`, updated);
    setModalOpen(false);
    load();
  };

  return (
    <div className="assigned-container">
      <h1 style={{color:"orange"}}>Assigned Students</h1>

      <button className="danger-btn" onClick={unassignAll} style={{marginLeft:"70%"}}>
        unassign all students
      </button>

      <table className="assigned-table stulist-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Dorm</th>
            <th>Room</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" align="center" color="orangered">
                No assigned students
              </td>
            </tr>
          ) : (
            data.map((s) => (
              <tr key={s.assignment_id}>
                <td>{s.studentId}</td>
                <td>{s.full_name}</td>
                <td>{s.dorm_number}</td>
                <td>{s.room_number}</td>

                <td>
                  <button
                    className="edit-btn"
                    // onClick={() => {
                    //   setSelected(s);
                    //   setModalOpen(true);
                    // }}
                  >
                    edit
                  </button>
                  <button
                    className="danger-btn"
                    onClick={() => unassign(s.assignment_id)}
                  >
                    unassign
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <EditAssignmentModal
        isOpen={modalOpen}
        assignment={selected}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
