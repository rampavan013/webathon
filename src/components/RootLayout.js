import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navigationbar'
import './RootLayout.css'

function RootLayout() {
  return (
    <div className='page1'>
        <Navigationbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout