import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <div className='w-25  position-absolute bottom-0' style={{ height: "88.5vh", background: "linear-gradient(90deg, #2563EB, #3B82F6)" }}>
        <div className='d-flex justify-content-start p-2'>
          <ul className='w-100 text-white-50 list-unstyled list-group gap-4 mt-3'>
            <li  style={{ color: "#1F2937" }}><Link to="/" className='list-group-item rounded-bottom rounded-top list-group-item-light list-group-item-action '>Intoducation</Link></li>
            <li style={{ color: "#1F2937" }}>
              <Link to="/MainLevelList" className='list-group-item rounded-bottom rounded-top list-group-item-action list-group-item-light text-black' >Level 1</Link>
            </li>
            <li style={{ color: "#1F2937" }}>
              <Link to="/Level2List" className='list-group-item rounded-bottom rounded-top list-group-item-action list-group-item-light text-black'>Level 2</Link>
            </li>
            <li className='list-group-item rounded-bottom rounded-top list-group-item-action list-group-item-light text-black' style={{ color: "#1F2937" }}><Link to="/" className='text-black text-decoration-none'>Level 3</Link></li>
            <li className='list-group-item rounded-bottom rounded-top list-group-item-action list-group-item-light text-black' style={{ color: "#1F2937" }}><Link to="/" className='text-black text-decoration-none'>Grammer</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default SideBar