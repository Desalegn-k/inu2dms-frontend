import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import AutoAssign from "../../componenets/AutoAssign";
import "./css/stulist.css";
import ManualAssign from "./ManualAssign";
import { useNavigate } from "react-router-dom";

export default function StudentsPage() {
  const navigate =useNavigate();
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await api.get(
          `/admin/students?page=${page}&limit=${limit}&search=${search}`
        );

        setStudents(res.data.students);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        alert("Error loading students");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [page, search]);

  // Reset to page 1 when searching
  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className="stu-container">
      <div className="students-toolbar">
        <div className="toolbar-left">
          <button
            className="btn btn-assign"
            onClick={() => navigate("/proctor/m-assign")}
          >
            Individual Room Assignment
          </button>

          <AutoAssign />
        </div>

        <div className="toolbar-right">
          <div className="search-wrapper  InputContainer">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="student-search input"
              id="input"
            />
          </div>
        </div>
      </div>

      <h2>Registered Students</h2>
      <h3>10(ten) Students per page</h3>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <table className="stulist-table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>StudentID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>College</th>
                <th>Department</th>
                <th>Year</th>
                <th>Email</th>
                <th>Block</th>
                <th>Room</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 && (
                <tr>
                  <td colSpan="11" style={{ textAlign: "center" }}>
                    No matching students found
                  </td>
                </tr>
              )}

              {students.map((s) => (
                <tr key={s.id}>
                  {/* <td>{s.id}</td> */}
                  <td>{s.studentId}</td>
                  <td>{s.full_name}</td>
                  <td>{s.gender}</td>
                  <td>{s.college}</td>
                  <td>{s.department}</td>
                  <td>{s.year}</td>
                  <td>{s.email}</td>
                  <td>{s.dorm_number || "—"}</td>
                  <td>{s.room_number || "—"}</td>
                  <td
                    className={
                      s.assignment_status === "active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {s.assignment_status || "Not Assigned"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="prev"
            >
              Prev
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="next"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
