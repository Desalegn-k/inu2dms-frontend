import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Four04() {
  const navigate=useNavigate()
  return (
    <div style={{textAlign:"center", marginTop:200,marginBottom:200,color:'orangered'}}>
    <h1 style={{fontSize:100}}>404</h1>
    <h3 style={{fontSize:"30px"}}>The page you try to access is not found. please try again! back to 
     <button onClick={()=>navigate("/")} style={{background:"transparent",color:"blue",border:"none",fontSize:25}}>Home</button>
    </h3>
      
    </div>
  )
}
