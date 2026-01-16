import React, { useEffect, useState } from "react";
import api from "../../api/api";
import "../css/Report.css";
import "./css/stulist.css";

export default function AdminReports() {
  const [reports, setReports] = useState([]);
  const [reply, setReply] = useState("");
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const res = await api.get("/admin/get-reports");
      setReports(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const sendResponse = async (id) => {
    if (!reply.trim()) return;

    try {
      await api.put(`/admin/get-reports/${id}/respond`, {
        response: reply,
      });

      setReply("");
      setActiveId(null);
      loadReports();
    } catch (err) {
      console.error("Failed to send response");
    }
  };

  return (
    <div className="report-container">
      <h1>Student Reports</h1>

      {reports.length === 0 && <p>No reports available</p>}

      {reports.length > 0 && (
        <table className="stulist-table">
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th>ID</th>
              <th>Student</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Admin Response</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.student_name}</td>
                <td>{r.description}</td>
                <td>
                  <span className={`status ${r.status}`}>{r.status}</span>
                </td>
                {/* Admin Response Column */}
                <td>
                  {r.admin_response ? (
                    r.admin_response
                  ) : activeId === r.id ? (
                    <textarea
                      rows="3"
                      style={{ width: "100%" }}
                      placeholder="Write response..."
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                    />
                  ) : (
                    <em style={{ color: "orangered" }}>Not responded</em>
                  )}
                </td>

                {/* Action Column */}
                <td color="dodgerblue">
                  {r.admin_response ? (
                    <span>—</span>
                  ) : activeId === r.id ? (
                    <button
                      onClick={() => sendResponse(r.id)}
                      style={{
                        color: "dodgerblue",
                        backgroundColor: "greenyellow",
                      }}
                    >
                      Send Message
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveId(r.id)}
                      style={{
                        color: "dodgerblue",
                        backgroundColor: "greenyellow",
                      }}
                    >
                      Reply
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

 
}
