import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar';
import LogIn from './LogIn'


const ProtectedRoutes = () => {

    const getAuth = localStorage.getItem("Auth");

  return getAuth ? 
    <div className='PageWrapper'><Sidebar /><div id='contentPage'><Outlet /></div></div> 
                  : 
    <LogIn />
}

export default ProtectedRoutes
