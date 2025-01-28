import React from "react";
import "../Css Styling/style.css";
const Home = () => {
  const styleObj = {
    color: "yellow",
    backgroundColor: "black",
    fontSize: "20px",
    width: "fit-Content",
    margin: "auto",
    padding: "10px",
    borderRadius: "10px",
  };
  const styleObj2 = {
    backgroundColor: "teal",
    color: "white",
    width: "fit-Content",
    padding: "15px",
    margin: "auto",
  };
  return (
    <>
      <h1
        style={{
          color: "white",
          backgroundColor: "teal",
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "cursive",
        }}
      >
        Using Inline CSS Style
      </h1>
      <p style={styleObj}>Using Style Object</p>
      <pre>I'm styled in sperate css file which is imported here</pre>
      <h3 style={styleObj2}>Next Topic Is SASS</h3>
    </>
  );
};

export default Home;

/* study from notebook or from w3schools */
