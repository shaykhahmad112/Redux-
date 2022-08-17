import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {

const count=useSelector((state)=>state.cartitems.carts)


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          E-SHOOPING
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/">
          Login
        </Link>

        <Link className="btn btn-outline-light" to="/signup">
          Register
        </Link>
        <div>
         {count.map((element)=>{return  <Link className="btn btn-outline-light" to="/addtocart" >  {element.qnty} </Link>})}
         {/* <Link className="btn btn-outline-light" to="/addtocart" >  {count} </Link> */}
          
       
          {/* <Link>   <AddtoCart/></Link> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
