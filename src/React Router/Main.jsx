import React from "react";
import NavBar from "./NavBar";
import Home from "../React Router/Pages/Home";
import Products from "../React Router/Pages/Products";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import About from "../Components/Routng Pages/About";
import Contact from "../Components/Routng Pages/Contact";
import RootLayout from "./Layout/RootLayout";
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

  /*
  ➡️Important:
    What will happen here is whenever we open /about, it will open the RootLayout.jsx component,
    Inside RootLayout, we have NavBar so Navbar will be displayed,
    and then after that it will provide this <About/> component to the Outlet, which is inside RootLayout.jsx file
  */
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  ))
  return (
    <div>
      {/* <NavBar />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}
      {/*
      ➡️New way of implementing react router using Router Provider:
      ->The above method is the most common way to set up routing in a React application.
      ->You can also use the newer method of implementing react router using Router Provider
      ->This method is more advanced and allows for more control over the routing process.
        Note: remove NavBar and routes above inside return, as we will be using Navabar inside RootLayout.jsx
        Steps:
          1)create a new folder called "layout"
          2)inside the layout folder, create a new file called "RootLayout.jsx"
          3)inside this file or you can say inside the file where Routes are used add this before return():
                 const router=createBrowserRouter(createRoutesFromElements(
                  <Routes path="/" element={<RootLayout/>}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                  </Routes>
                )))
          4)Now see RootLayout.jsx file
          5)Remove BrowserRouter which is wrapping this Main.jsx file in App.jsx
          6)Use this 'router' inside return

      🟢 Note: This new way will only work if your react router package is higher than
      */}
      <RouterProvider router={router} />
    </div>
  );
};
/*
➡️ See useNavigateHook in NavBar.jsx file

*/

export default Main;
