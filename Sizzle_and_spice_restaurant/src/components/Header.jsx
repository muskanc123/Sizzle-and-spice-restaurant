import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0"><a href="index.html">Sizzle and Spice Restaurant</a></h1>

          {/* <a href="index.html" classname="logo me-auto me-lg-0"><img src="src/assets/img/logo.png" alt className="img-fluid" /></a> */}
          <nav id="navbar" className="navbar order-last order-lg-0">
            {/* <ul>
        <li><Link to="/" className="nav-link scrollto active" >Home</Link></li>
        <li><Link to="/about"className="nav-link scrollto" >About</Link></li>
        <li><Link to="/menu"className="nav-link scrollto" >Menu</Link></li>
        <li><Link to="/specials" className="nav-link scrollto">Specials</Link></li>
        <li><Link to="/contacts"  className="nav-link scrollto" >Contact</Link></li>
      </ul> */}
            <ul>
              <li><NavLink exact="true" to="/" className="nav-link scrollto" activeclassname="active">Home</NavLink></li>
              <li><NavLink exact="true" to="/about" className="nav-link scrollto" activeclassname="active">About</NavLink></li>
              <li><NavLink exact="true" to="/menu" className="nav-link scrollto" activeclassname="active">Menu</NavLink></li>
              <li><NavLink exact="true" to="/specials" className="nav-link scrollto" activeclassname="active">Specials</NavLink></li>
              {/* <li><NavLink exact="true" to="/contacts" className="nav-link scrollto" activeclassname="active">Contact</NavLink></li> */}
            </ul>

            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <Link to="/book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</Link>
          <Link to="/cart" className="book-a-table-btn scrollto d-none d-lg-flex">cart</Link>


        </div>
      </header>

    </>
  )
}
export default Header;
