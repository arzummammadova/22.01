import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="nav">
          <div className="logo">
            <figure>
              
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="" />
             </figure>
          </div>

          <div className="nav-links">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/basket'>Basket</Link>
              </li>
              <li>
                <Link to='/add'>Add</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>
          </div>

          <div className="actions">
            <ul>
              <li>  <Link><CiSearch /></Link></li>
              <li>  <Link><CgProfile />
              </Link></li>
              <li>  <Link to='/basket'><CiShoppingCart />
              </Link></li>
            </ul>
        
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
