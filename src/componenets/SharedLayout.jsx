import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footter from './Footter'

export default function SharedLayout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footter/>
      
    </div>
  )
}
