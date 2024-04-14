import React from "react";
import Header from "./Routng Pages/Header";
import Home from "./Routng Pages/Home";
import About from "./Routng Pages/About";
import Contact from "./Routng Pages/Contact";
import Footer from "./Routng Pages/Footer";
import User from "./Routng Pages/User";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

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
            <Route path="/user/:id" element={<User/>}/> {/*see it in comment below */}
            <Route path="*" element={<h3>Error! Page Not Found</h3>}/> 
        </Routes>

        <Footer/>
      </Router>
    </>
  );
};

export default Routing;

/*
 study it form notebook

 Important:
  Router: Routing is a prcoess by which user is directed to the different pages
          ->Reactjs Router is mainly used for developing single page web application
          ->React Router is used to define multiple routes in the application
  Routes: used to define and render components based on the specified path. It will accept components
          and render to define what should be rendered

  important: at 14:15
  Dynamic Routing:
      Dynamic routing is the routing that takes place as your app is rendering, not in a configuration
      or convention outside of a running app

      dynamic routes: 
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/user/new" element={<User/>}/>
      Means: /user/:id and /user/new are both same they take to the user component
          here user/ ke baed jo b hoga ause id consider karna hain
          yaha /:id and /new donu user ki id hain router lakin ek hee hain
          aur yaha ek time pei ek hee component render hoga

          using it <Link to="/user/tempId"><h3>User</h3></Link>
          tempId will read any id when calling it like /:id, /new watch at 18:20

      ->Using "id" is usefull when we work on the backend / when we request on the backend/are request API etc
      to access this id we use params watch at 20:00

      -> at 21:20 
           we use "useNavigate" to go to a particular location like this
           const navigation=useNavigate() 
           navigation("about") // goes to about page

    Difference between static and dynamic routing?
      ->Static routing: user-defined routes are used in the routing table
      ->Dynamic routing: routes are updated as per the changes in network

 */
