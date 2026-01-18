import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import StudentRegister from './pages/StudentRegister';
import Navbar from './componenets/Navbar';
import Footter from './componenets/Footter';
import Home from './pages/Home';
import SharedLayout from './componenets/SharedLayout';
import Four04 from './componenets/Four04';
import Login from './componenets/Login';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import MyRoom from './pages/MyRoom';
import StudentReport from './pages/StudentReport';
import PrivateRoute from './componenets/PrivateRoute';
import StudentHome from './pages/StudentHome';

import AdminRoute from './componenets/AdminRoute';
import ProctorRoute from './componenets/ProctorRoute'
import AdminDashboard from './pages/admin/AdminDashboared';
import CreateAdmin from './pages/admin/CreateAdmin';
import CreateProctor from './pages/admin/CreateProctor';
import ManageAdmins from './pages/admin/ManageAdmins';
import ManageProctors from './pages/admin/ManageProctors';
import Adminhome from './pages/admin/Adminhom';
import ManageStudents from './pages/admin/ManageStudents';
import StudentReportStatus from './pages/StudentReportStatus';

import Proctordashboard from './pages/proctor/Proctordashboard'
import ProctorHome from './pages/proctor/ProctorHome'
import ProctorReports from "./pages/proctor/ProctorReports";
 
import StudentsPage from './pages/proctor/StudentsPage'
import ManualAssign from './pages/proctor/ManualAssign';
import AssignedStudents from './pages/proctor/AssignedStudents';
 

  

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/get-students" element={<StudentsPage />} /> */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            >
              <Route
                index
                element={
                  <PrivateRoute>
                    <Adminhome />
                  </PrivateRoute>
                }
              />
              <Route path="create-admin" element={<CreateAdmin />} />
              <Route path="create-proctor" element={<CreateProctor />} />
              <Route path="student-reg" element={<StudentRegister />} />
              <Route path="manage-admins" element={<ManageAdmins />} />
              <Route path="manage-proctors" element={<ManageProctors />} />
              <Route path="manage-stu-account" element={<ManageStudents />} />
            </Route>
            {/* proctor pages */}
            {/* <Route
              path="/proctor"
              element={
                <ProctorRoute>
                  <StudentsPage />
                  <ProctorReports />
                </ProctorRoute>
              }
            /> */}

            <Route
              path="/proctor"
              element={
                <ProctorRoute>
                  <Proctordashboard />
                </ProctorRoute>
              }
            >
              <Route
                index
                element={
                  <PrivateRoute>
                    <ProctorHome />
                  </PrivateRoute>
                }
              />
              <Route path="studente-list" element={<StudentsPage />} />
              <Route path="m-assign" element={<ManualAssign />} />

              <Route path="manage-reports" element={<ProctorReports />} />
              <Route path="assigned" element={<AssignedStudents />} />
            </Route>

            {/* <Route path="/stu-register" element={<StudentRegister />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Four04 />} />

            <Route
              path="/stu-dashboard"
              element={
                <PrivateRoute>
                  <StudentDashboard />
                </PrivateRoute>
              }
            >
              {/* 👇 DEFAULT PAGE WHEN DASHBOARD LOADS */}
              <Route
                index
                element={
                  <PrivateRoute>
                    <StudentHome />
                  </PrivateRoute>
                }
              />

              <Route
                path="profile"
                element={
                  <PrivateRoute>
                    <StudentProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="my-room"
                element={
                  <PrivateRoute>
                    <MyRoom />
                  </PrivateRoute>
                }
              />
              <Route
                path="report"
                element={
                  <PrivateRoute>
                    <StudentReport />
                  </PrivateRoute>
                }
              />
              <Route
                path="my-report"
                element={
                  <PrivateRoute>
                    <StudentReportStatus />
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
