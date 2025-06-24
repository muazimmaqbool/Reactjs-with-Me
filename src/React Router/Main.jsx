import React from 'react'
import NavBar from './NavBar'
import Home from "../React Router/Pages/Home"
import Products from "../React Router/Pages/Products"
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
      <NavBar/>
      <Home/>
      <Products/>
    </div>
  )
}

export default Main