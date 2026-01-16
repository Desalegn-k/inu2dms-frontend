import React, { useEffect, useState } from "react";
import api from "../api/api";
import './css/Studentprofils.css'

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api
      .get("/students/me")
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!profile) return <p>Loading...</p>;

 return (
   <div className="profile-wrapper">
     <h2 className="title">My Profile</h2>

     <table className="profile-table">
       <tbody>
         <tr>
           <th>Name</th>
           <td>{profile.full_name}</td>
         </tr>

         <tr>
           <th>Email</th>
           <td>{profile.email}</td>
         </tr>

         <tr>
           <th>ID</th>
           <td>{profile.studentId}</td>
         </tr>

         <tr>
           <th>Gender</th>
           <td>{profile.gender}</td>
         </tr>

         <tr>
           <th>College</th>
           <td>{profile.college}</td>
         </tr>

         <tr>
           <th>Department</th>
           <td>{profile.department}</td>
         </tr>

         <tr>
           <th>Year</th>
           <td>{profile.year}</td>
         </tr>
       </tbody>
     </table>
   </div>
 );
}
