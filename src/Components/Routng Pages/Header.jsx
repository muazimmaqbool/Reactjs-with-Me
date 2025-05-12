import React, { useState } from "react";
import { Link } from "react-router-dom";

//called from Routing.jsx
const Header = () => {
  const [enroll, setenroll] = useState("");

  return (
    <>
      <h2>Header</h2>
      <label>
        What is your Enroll: 
        <input type="text" value={enroll} onChange={(e)=>setenroll(e.target.value)}/>
      </label>
      <ul>
        <li>
          <Link to="/"><h3>Home</h3></Link>
        </li>
        <li>
          <Link to="/about"><h3>About</h3></Link>
        </li>
        <li>
          <Link to="/contact"><h3>Contact</h3></Link>
        </li>
        <li>
          <Link to="/user/muazim"><h3>User</h3></Link>
        </li>
        <li>
          <Link to={`/section/${enroll}`}><h3>Check Section</h3></Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
