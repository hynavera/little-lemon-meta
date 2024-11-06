import React from 'react';
import logo from "../assets/Logo.svg";
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='header'>
      <Link to="/">
      <div className='logo-header'>
        <img src={logo} alt="little-lemon-logo" />
      </div>
      </Link>

      <input type="checkbox" id="check" checked={isChecked} onChange={checkHandler}/>
      <label htmlFor="check" className="side_menu">
        <i className="fa fa-times fa fa-bars" id="menu-icon"></i>
        <i className="fa fa-times" aria-hidden="true" id="close-icon"></i>
      </label> 

      <nav className='navbar'>
        <ul>
          <li onClick={checkHandler}>
            <Link to="/">Home</Link>
            </li>
          <li onClick={checkHandler}>
            <Link to="/about">About</Link>
            </li>
          <li onClick={checkHandler}>
            <Link to="/menu">Menu</Link>
            </li>
          <li onClick={checkHandler}>
            <Link to="/reservations">Reservations</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
