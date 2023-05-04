import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/"><h3>default: page-1</h3></Link>
        </li>
        <li>
          <Link to="/page2"><h3>Page-2</h3></Link>
        </li>
        <li>
          <Link to="/page3"><h3>Page-3</h3></Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
