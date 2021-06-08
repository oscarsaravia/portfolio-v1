/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-dupe-keys */
import React from 'react'
import './navStyle.css'

const NavBar = () => (
  <nav className="navigation-bar">
    <div className="hamburger">
      <div className="line"> </div>
      <div className="line"> </div>
      <div className="line"> </div>
    </div>
    <ul className="nav-links">
      <li className="list-item"><a href="#home_section">Home</a></li>
      <li className="list-item"><a href="#about_section">About</a></li>
      <li className="list-item"><a href="#projects_section">Projects</a></li>
      <li className="list-item"><a href="#contact_section">Contact</a></li>
    </ul>
  </nav>
)

export default NavBar
