import React from "react";
import Header from "./Routng Pages/Header";
import Home from "./Routng Pages/Home";
import About from "./Routng Pages/About";
import Contact from "./Routng Pages/Contact";
import Footer from "./Routng Pages/Footer";
import User from "./Routng Pages/User";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Section from "./Routng Pages/Section";

//Read Documentation Below:
const Routing = () => {
  return (
    <>
      <h1>Inside Router</h1>
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/user/:name" element={<User/>}/> {/*see it in comments below */}
            <Route path="/section/:enroll" element={<Section/>}/>
            <Route path="*" element={<h3>Error! Page Not Found</h3>}/> 
        </Routes>

        <Footer/>
      </Router>
    </>
  );
};

export default Routing;

/*
 Important:
  Router: Routing is a prcoess by which user is directed to the different pages
          React Router is mainly used for developing single page web application
          React Router is used to define multiple routes in the application
          
  Routes: used to define and render components based on the specified path. 
          ->It will accept components and render to define what should be rendered

  Dynamic Routing:
      Dynamic routing is the routing that takes place as your app is rendering, not in a configuration
      or convention outside of a running app or during runtime

      dynamic routes: 
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/user/new" element={<User/>}/>
      Means: /user/:id and /user/new are both same they take to the user component
          here user/ ke baed jo b hoga ause id consider karna hain
          yaha /:id and /new donu user ki id hain router lakin ek hee hain
          aur yaha ek time pei ek hee component render hoga

          using it <Link to="/user/tempId"><h3>User</h3></Link>
          tempId will read any id when calling it like /:id, /new 

      ->Using "id" is usefull when we work on the backend / when we request on the backend/request API etc
      ->To access this id we use params

      ->useNavigate():
           we use "useNavigate" to go to a particular location like this
           const navigation=useNavigate() 
           navigation("about") // goes to about page

    Difference between static and dynamic routing?
      ->Static routing: user-defined routes are used in the routing table
      ->Dynamic routing: routes are updated as per the changes in network

 */
