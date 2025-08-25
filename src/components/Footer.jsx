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
        <ul className='col l-0-1 l-4 p-2'>
          <li>Address: <br/>
          214 Magazine St, New Orleans, Louisiana
          </li>
          <li>Phone: <br />
            (504) 561-8590
          </li>
          <li>Email: <br />
            little-lemon@meta-restaurant.com
          </li>
          <br /><br />
        </ul>
        <ul className='col l-3 p-2'>
          <li>Opening hours: <br /> Mon - Sun: 2 PM - 10 PM</li>
          <li>Online service hours: <br /> Mon - Sun: 9 AM - 8 PM</li>
        </ul>
        <ul className='col l-2 p-2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu & Orders</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
        </ul>
      <div className="copyright">
        <p>Designed & Developed by Hynavera | Meta Front-End Developer.</p>
      </div>
      </div>
    </div>
  )
}
