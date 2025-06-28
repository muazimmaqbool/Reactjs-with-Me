import React from 'react'
import logo from "../logo.png"
import styles from "./reactRouterStyle.module.css"
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img style={{width:70, height:70}} src={logo} alt='navbar image'/>
      <ul className={styles.list}>

        {/* <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link> */}

        {/* ➡️ Using NavLink instead of Link */}

        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/products"><li>Products</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>

      </ul>
      <button>Get Started</button>
    </div>
  )
}
/*
➡️ NavLink vs Link:
    -> After using NavLink, you will see difference interms of functonality.
    -> Important:
        - If you go to inspect > Elements > Inside div with class list you will see anchor 'a' tags
        - If you using Link or NavLink, they both are getting converted to 'a' tags
        - Now: if you can if any route is active, you can see that, that 'a' tag have a className of 'active'
        - Noe let's add something something to this actuve className
        - So, in reactRouterStyle.module.css file, you can see styling of active className
*/

export default NavBar