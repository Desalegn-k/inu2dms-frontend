import React, { useState } from "react";
import { api } from "../api/api";

export default function AutoAssign() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const runAssign = async () => {
    if (!window.confirm("Run automatic room assignment?")) return;

    setLoading(true);

    try {
      const res = await api.post("/admin/auto-assign");

      setLogs(res.data.logs); // logs from backend
      alert("Assignment completed!");
    } catch (err) {
      alert("Error running assignment!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={runAssign}
        disabled={loading}
        className="btn auto-assign-btn"
      >
        {loading ? "Assigning..." : "System Room Assignment"}
      </button>

      <div style={{ marginTop: "10px" }}>
        {logs.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}
