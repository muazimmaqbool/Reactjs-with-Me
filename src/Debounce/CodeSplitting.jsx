import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import Home from './Home'
//import About from './About'
//import Contact from './Contact'
//we will see these all are coming inside bundle.js
//now we want to put them seperatly i.e known as code splitting, so import them using lazy keyword -{import lazy from react}

//this is known as dynamic import
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
//this is known as dynamic import, this way it maintains good performance
//->this is the way react application is to hold off loading some parts of a web page until a user needs them

//ab hum jis page pei honge ausi ka data ayaa ga seperate file mei bundle.js ke neeche
//aase hum lazy keyword ka use karke code splitting karr skhte hain

//now import suspence form react and wrap all routes inside suspence
//suspence has fallback in which we give component which is shown till component is loaded

//Read Documentation Below:
const CodeSplitting = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default CodeSplitting;
/*
->Code Splitting:
     Code splitting is a technique where we split our code into various bundles which can then be loaded on demand or in parallel. 
     This can significantly reduce the load time of our application and has other benefits too. Create react app does it automatically.
     Dynamic import syntax is supported.


what is debounce,code splitting,etc already in notes and debounce already seen in javascript
visit: https://www.youtube.com/watch?v=B36pSPMSzZI
*/
