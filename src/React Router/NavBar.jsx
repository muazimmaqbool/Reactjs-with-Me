import React from 'react'
import logo from "../logo.png"
import styles from "./reactRouterStyle.module.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img style={{width:70, height:70}} src={logo} alt='navbar image'/>
      <ul className={styles.list}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default NavBar