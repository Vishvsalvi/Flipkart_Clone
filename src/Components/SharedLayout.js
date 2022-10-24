import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NewNav from './NewNav'

const SharedLayout = () => {
  return (
    <div>
        <NewNav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SharedLayout