import React from "react";
import Page1 from "./Routng Pages/Page1";
import Page2 from "./Routng Pages/Page2";
import Page3 from "./Routng Pages/Page3";
import Header from "./Routng Pages/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <h1>Inside Router</h1>
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/page2" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
            <Route path="*" element={<h3>Error! Page Not Found</h3>}/> 
        </Routes>
      </Router>
    </>
  );
};

export default Routing;

/*
 study it form notebook , pdf, and from w3schools

 Important:
  Router: Routing is a prcoess by which user is directed to the different pages
          ->Reactjs Router is mainly used for developing single page web application
          ->React Router is used to define multiple routes in the application
  Routes: used to define and render components based on the specified path. It will accept components
          and render to define what should be rendered
 */
