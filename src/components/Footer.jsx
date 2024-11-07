import React from 'react';
import logoFooter from "../assets/small_logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-in">
      <div className="logo-footer col l-2 p-2">
        <img src={logoFooter} alt="" />
      </div>
        <ul className='col l-0-3 l-2 p-2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
        </ul>
        <ul className='col l-0-1 l-4 p-0-2 p-2'>
          <li>Address: <br/>
          214 Magazine St, <br /> New Orleans, Louisiana
          </li>
          <li>Phone: <br />
            (504) 561-8590
          </li>
          <li>Email: <br />
            little-lemon@meta.com
          </li>
        </ul>
      <div className="copyright">
        <p>Designed & Developed by Hynamerie | Meta Front-End Developer.</p>
      </div>
      </div>
    </div>
  )
}
