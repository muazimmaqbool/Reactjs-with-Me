import React from 'react'
import logo from "../logo.png"
import styles from "./reactRouterStyle.module.css"

const NavBar = () => {
  return (
    <div>
      <img style={{width:70, height:70}} src={logo} alt='navbar image'/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default NavBar