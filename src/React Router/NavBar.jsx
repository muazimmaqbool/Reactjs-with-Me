import React from 'react'
import logo from "../logo.png"
import styles from "./reactRouterStyle.module.css"
import { Link,NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.navbar}>
      <img style={{width:70, height:70}} src={logo} alt='navbar image'/>
      <ul className={styles.list}>

        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>

        {/* ➡️ Using NavLink instead of Link */}

        {/* <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/products"><li>Products</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink> */}

      </ul>
      {/* when this button is clicked it will redirect us to a about page using useNavigate Hook */}
      {/* <button onClick={()=>navigate("/about")}>Get Started</button> */}
                       {/* useNavigate with reaplce:true*/}
      <button onClick={()=>navigate("/about",{replace:true})}>Get Started</button>
      {/* replace:true: with this object will do is that it will reset the history, so if you go from about from contact page via
      useNavigate then if you click on back button it will go to home page instead of about page if replace:true */}
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
        - So, in reactRouterStyle.module.css file, you can see styling of active className, i.e active class inside a tag i.e a.active

➡️ useNavigate Hook:
    -> useNavigate is a hook that allows you to programmatically navigate to different routes in your
    -> like redirecting users to a different page after a form submission or a button click.
    -> It's also used to pass state or parameters between routes.

➡️ History of Stack:
    ->When you use useNavigate, it adds a new entry to the browser's history stack.
    -> This means that when you navigate to a new route, the previous route is still accessible via the back button of the browser.
    -> This is useful for maintaining a smooth user experience, as users can easily navigate back to the previous page.
 */

export default NavBar