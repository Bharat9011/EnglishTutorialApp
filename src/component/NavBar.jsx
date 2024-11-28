import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

  return (
    <div>
      <nav className='d-flex justify-content-around align-items-center' style={{height:"80px",width:"100%",background: "linear-gradient(90deg, #1E3A8A, #2563EB)"}}>
        <div className='d-flex align-items-center'>
            <img src='EnglishTutorialLogo.png' width="60" height="60"/>
            <p className='mt-2 ms-3 fw-bold fs-4 text-white'>EngTut</p>
        </div>
        <div>
            <Link to="/" className='p-3 text-white text-decoration-none custom-hover rounded-4' >Home</Link>
            <Link to="/AboutUs" className='p-3 text-white text-decoration-none custom-hover rounded-4'>About Us</Link>
            <Link to="/ContactUs" className='p-3 text-white text-decoration-none custom-hover rounded-4'>Contact Us</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;