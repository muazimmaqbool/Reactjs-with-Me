import React from "react";
import { Link } from "react-router-dom";

//called from Routing.jsx
const Header = () => {
  return (
    <>
      <h2>Header</h2>
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
          <Link to="/user/tempId"><h3>User</h3></Link>
        </li>
        <li>
          <Link to="/section/6655"><h3>Check Section</h3></Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
