import React, { useEffect, useState } from "react";
import api from "../api/api";
import "./css/Report.css";

export default function StudentReportStatus() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await api.get("/students/my-report");
      setReports(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading reports...</p>;

  return (
    <div className="report-container">
      <h1>My Reports</h1>

      {reports.length === 0 ? (
        <p>No reports submitted</p>
      ) : (
        <table className="report-table">
          <thead>
            <tr>
              <th>Issue</th>
              <th>Status</th>
              <th>Admin Response</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.description}</td>
                <td>
                  <span className={`status ${r.status}`}>{r.status}</span>
                </td>
                <td>
                  {r.admin_response ? (
                    r.admin_response
                  ) : (
                    <span className="pending-text">
                      Waiting for admin response
                    </span>
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
