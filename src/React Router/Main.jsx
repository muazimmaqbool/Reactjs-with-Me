import React from "react";
import NavBar from "./NavBar";
import Home from "../React Router/Pages/Home";
import Products from "../React Router/Pages/Products";
import { Routes, Route } from "react-router-dom";
import About from "../Components/Routng Pages/About";
import Contact from "../Components/Routng Pages/Contact";
import styles from "./reactRouterStyle.module.css";
/*
->React Router:
    ->What is React Router?
        React Router is a standard routing library for React. It enables you to create single-page applications (SPAs) 
        with multiple views without reloading the page. Instead of making full-page reloads like traditional websites,
        React Router allows users to navigate between components (pages) smoothly by changing the browser URL and rendering 
        components conditionally.

    ->Why Do We Need Routing?
        In a typical web app, you have multiple pages like:
        / → Home
        /about → About Us
        /contact → Contact Page
        Without a routing system, all of these would have to be handled manually with conditional rendering.
        React Router handles this for you, based on the URL.

    ->To install enter this command in terminal: npm install react-router-dom

*/

//This Main.jsx file is wrapped inside BrowserRouter in App.jsx
//we can do it here as well, but it's better to keep it in App.jsx for better organization
//and also we can do index.js file where we can wrap the whole app with BrowserRouter
const Main = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/*
      ➡️New way of implementing react router using Router Provider:
      ->The above method is the most common way to set up routing in a React application.
      ->You can also use the newer method of implementing react router using Router Provider
      ->This method is more advanced and allows for more control over the routing process.
        Steps:
          1)create a new folder called "layout"
          2)inside the layout folder, create a new file called "RootLayout.jsx"
      */}
    </div>
  );
};

export default Main;
