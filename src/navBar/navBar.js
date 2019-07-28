import React from 'react'
import './NavBar.css'

import { NavLink } from 'react-router-dom'

const navBar = () => {
    return (
        <nav>
        <div className="nav-wrapper purple">
          <NavLink to='/' className="brand-logo products">Products</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </div>
      </nav>
            
    )
}

export default navBar;