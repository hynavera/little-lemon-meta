import React from 'react';
import logoFooter from "../assets/small_logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="logo-footer">
        <img src={logoFooter} alt="" />
      </div>
      <div className='pages-footer'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link>Login</Link></li>
        </ul>
        <ul>
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
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>Designed & Developed by Hynamerie | Meta Front-End Developer Professional Certificate.</p>
      </div>
    </div>
  )
}
