import React from 'react'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='d-flex-column'>
        <NavBar />
        <SideBar />
        <div className='w-75 position-absolute bottom-0 end-0 overflow-auto p-3' style={{height:"88.5%", backgroundColor: "#E5E7EB"}}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default Home;