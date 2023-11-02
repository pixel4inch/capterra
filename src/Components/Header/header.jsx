import React from 'react'
import navbar from '../Navbar/navbar';
import "./header.css"
import Brand from "../../images/capterra_logo.svg"

import { SlMagnifier, SlMenu } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";



function header() {
  return (
    <>
    <div className="container-fluid">
        <div className="col-12">
        <div className="row mx-0">
            <div className="header-block p-3 d-flex justify-content-lg-start justify-content-between aling-items-center flex-wrap">
                <SlMenu className='mobile-nav'/>
                <div className='brand'>
                    <img src={Brand} className='img-fluid' title='Capterra' alt='Capterra'/>
                </div>
                <div className='brand-tag me-lg-auto'>
                    <p className=" mb-0 ml-2">Helping businesses choose better software since 1999</p>
                </div>
                 <form className="position-relative header-search-block ml-auto" role="search">
                    <input type="search" className=" header-search form-control  " placeholder="What can we help you find?" aria-label="Search"/>
                   <SlMagnifier className="search-icon"/>
                </form>

                <div className="text-end">
                <button type="button" className="btn me-2 login-btn mx-3">LOG IN</button>
                <button type="button" className="btn singup-btn btn-md">SIGN UP</button>
                <button type="button" className="btn singup-btn singup-btn-mobile btn-md"><FaUserAlt/></button>
                
                </div>

            </div>
        

        </div>
        </div>
    </div>
    <navbar/>




    </>
  )
}

export default header