import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="box text-black container-fluid  ">
        <div className=" row bg-secondary-subtle p-3 rounded-3 shadow-lg">
            <div className="col-sm-6 col-md-3 p-3 pt-5 ">
                <h4>HYDRA_ABNK Footer</h4>
                <p className='text-muted' > Welcome to HYDRA_ABNK, your trusted partner in bussiness. Thank you for choosing us as your bussiness partner.</p>
           
            </div>
            <div className="col-sm-6 col-md-3">
              <h4>Navigation</h4>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/about">About</Link>
              <Link className='nav-link' to="/contact">Contact Us </Link>
              <Link className='nav-link' to="/gallery">Gallery</Link>
              <Link className='nav-link' to="/dashboard">Dashboard</Link>
            </div>
            <div className="col-sm-6 col-md-3">
              <h4>Information </h4>
              <p>+91 9565667918</p>
              <p>nky_abhi@aol.com</p>
              <p>43, Adarsh Nagar, sector 7, vikashnagar, lucknow </p>
            </div>
            <div className="col-sm-6 col-md-3">
              <h4>Opening Hours</h4>
              <p>Mon-Thu : 9:00 - 21:00</p>
              <p>Fri : 8:00 - 21:00</p>
              <p>Sat : 9:00 - 15:00</p>
              <p>Sun :  off</p>
            </div>
        </div>
        <p className='text-center p-3'>Copyright &copy;2020 All rights reserved | Block is made with by <span className='text-info'>Abhishek Singh</span></p>
    </div>
    </>
  )
}

export default Footer