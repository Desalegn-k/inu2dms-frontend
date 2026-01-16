import React, { useEffect, useState } from "react";
import "./css/editAssignmentModal.css";

export default function EditAssignmentModal({
  isOpen,
  assignment,
  onClose,
  onSave,
}) {
  const [dormNumber, setDormNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const dorms = Array.from({ length: 20 }, (_, i) => `B-${i + 1}`);
  const rooms = Array.from({ length: 100 }, (_, i) => i + 1);

  useEffect(() => {
    if (assignment) {
      setDormNumber(assignment.dorm_number);
      setRoomNumber(assignment.room_number);
    }
  }, [assignment]);

  const handleSave = () => {
    if (!dormNumber || !roomNumber) {
      alert("Select dorm and room");
      return;
    }

    onSave({
      assignment_id: assignment.assignment_id,
      dormNumber,
      roomNumber,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Assignment</h3>

        <select
          value={dormNumber}
          onChange={(e) => setDormNumber(e.target.value)}
        >
          <option value="">Select Dorm</option>
          {dorms.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

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

        <div className="modal-buttons">
          <button className="btn-save" onClick={handleSave}>
            Save
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
