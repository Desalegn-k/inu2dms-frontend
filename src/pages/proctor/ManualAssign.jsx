import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import "./css/manualAssign.css";

export default function ManualAssign() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [dormNumber, setDormNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Dorms B-1 → B-20
  const dorms = Array.from({ length: 20 }, (_, i) => `B-${i + 1}`);

  // Rooms 1 → 100
  const rooms = Array.from({ length: 100 }, (_, i) => i + 1);

  // 🔥 LOAD UNASSIGNED STUDENTS
  useEffect(() => {
    async function loadStudents() {
      try {
        const res = await api.get("/admin/unassigned");
        setStudents(res.data);
      } catch {
        setMessage("❌ Failed to load unassigned students");
      }
    }
    loadStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentId || !dormNumber || !roomNumber) {
      setMessage("⚠️ All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/admin/manual-assign", {
        studentId,
        dormNumber: dormNumber,
        roomNumber,
      });

      setMessage(` ${res.data.message}`);
      setStudentId("");
      setDormNumber("");
      setRoomNumber("");

      // 🔄 REMOVE ASSIGNED STUDENT FROM DROPDOWN
      setStudents((prev) => prev.filter((s) => s.studentId !== studentId));
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Assignment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="manual-assign-container form-box">
      <h3>Manual Room Assignment</h3>

      {message && (
        <p className="assign-message">
        
          
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="manual-assign-form">
        {/* 🔽 UNASSIGNED STUDENTS DROPDOWN */}
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        >
          <option value="">Select Unassigned Students</option>
          {students.map((s) => (
            <option key={s.id} value={s.studentId}>
              ID: {s.studentId} —Name: {s.full_name}
            </option>
          ))}
        </select>

        {/* Dorm */}
        <select
          value={dormNumber}
          onChange={(e) => setDormNumber(e.target.value)}
        >
          <option value="">Select Block Name</option>
          {dorms.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Room */}
        <select
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        >
          <option value="">Select Room</option>
          {rooms.map((r) => (
            <option key={r} value={r}>
              Room {r}
            </option>
          ))}
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Assigning..." : "Assign Room"}
        </button>
      </form>
    </div>
  );
}
