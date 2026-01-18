import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function MyRoom() {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    api
      .get("/students/my-room")
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!room) return <p>Loading...</p>;

  if (room.message === "Not assigned") {
    return <h3 style={{color:"orangered",border:"solid",padding:20,borderRadius:5,borderColor:"orange"}}>You are not assigned to any room.</h3>
    ;
  }

 return (
   <div className="my-room-container">
     <h2 style={{color:"orange"}}>My Room</h2>

     <table
       border="9"
       cellPadding="10"
       style={{
         borderCollapse: "collapse",
         width: "80%",
         margin: "20px auto",
         color: "white",
         borderColor: "orangered",
         fontWeight: 800,
         fontSize: 20,
       }}
     >
       <tbody>
         <tr style={{ backgroundColor: "whitesmoke", color: "orange" }}>
           <th align="left" style={{ padding: 15 }}>
             Block Number
           </th>
           <td align="left" style={{ padding: 15 }}>
             {room.dorm_name}
           </td>
         </tr>

         <tr style={{ backgroundColor: "gray", color: "orange" }}>
           <th align="left" style={{ padding: 15 }}>
             Room Number
           </th>
           <td align="left" style={{ padding: 15 }}>
             {room.room_number}
           </td>
         </tr>

         <tr style={{ backgroundColor: "whitesmoke", color: "orange" }}>
           <th align="left" style={{ padding: 15 }}>
             Status
           </th>
           <td
             align="left"
             style={{ background: "", padding: 15, color: "green" }}
           >
             {`${room.status}/Assigned`}
           </td>
         </tr>
       </tbody>
     </table>
   </div>
 );

}
