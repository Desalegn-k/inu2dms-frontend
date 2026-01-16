import React, { useState } from "react";
import api from "../api/api";
import "./css/Report.css"

export default function StudentReport() {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const submitReport = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setMessage("Description required");
      return;
    }

    try {
      const res = await api.post("/students/reports", { description });
      setMessage(res.data.message);
      setDescription("");
    } catch (err) {
      setMessage("Failed to submit report");
    }
  };

  return (
    <div className="report-container">
      <h1>Submit a Report</h1>

      {message && <p style={{ color: "red" }}>{message}</p>}

      <form onSubmit={submitReport} className="report-form">
        <textarea
          rows="5"
          placeholder="Describe the issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          
        />

        <button type="submit" className="submit-report">Submit Report</button>
      </form>
    </div>
  );
}
