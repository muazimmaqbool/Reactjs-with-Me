import React from "react";
import "../SASS Styling/style.scss";

//learn SASS from this repository: https://github.com/muazimmaqbool/Hands-on-SASS
const HomeSASS = () => {
  return (
    <>
      <h2 className="h2-style">Styled Using SASS</h2>
      <div className="box">
        <p>Text Inside box</p>
      </div>
      <a
        className="sassLink"
        href="https://github.com/muazimmaqbool/Hands-on-SASS"
        target="_blank"
      >
        Learn SASS With Me
      </a>
    </>
  );
};

export default HomeSASS;
