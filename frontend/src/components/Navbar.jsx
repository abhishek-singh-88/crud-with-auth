import React from "react";
import { Link } from "react-router-dom";
import { SiHomeadvisor } from "react-icons/si";
import { SiInformatica } from "react-icons/si";
import { LuGalleryThumbnails } from "react-icons/lu";
import { GrContactInfo } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiDashboardFill } from "react-icons/ri";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/">
            HYDRA_ABNK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse  pe-3  navbar-collapse"
            id="navbarNav"
          >
            
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link text-info active"
                  aria-current="page"
                  to="/"
                >
                  {" "}
                  <SiHomeadvisor /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/about">
                  <SiInformatica />  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/gallery">
                  <LuGalleryThumbnails/> Gallery
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link text-info" to="/contact">
                  <GrContactInfo/> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/dashboard">
                <RiDashboardFill /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/profile">
                 <CgProfile/> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-danger " to="/signin">
                 <SiGnuprivacyguard className="text-danger "/> Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
