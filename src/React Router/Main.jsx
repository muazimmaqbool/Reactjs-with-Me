import React from "react";
import NavBar from "./NavBar";
import Home from "../React Router/Pages/Home";
import Products from "../React Router/Pages/Products";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import About from "../Components/Routng Pages/About";
import Contact from "../Components/Routng Pages/Contact";
import RootLayout from "./Layout/RootLayout";
import ContactLayout from "./Layout/ContactLayout";
import Info from "./Pages/Info";
import Form from "./Pages/Form";
import NotFound from "./Pages/NotFound";
import Support from "./Pages/Support";
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
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* Nested Routes: */}
      <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element={<Info/>}/>
        <Route path="form" element={<Form/>}/>
        {/* passing route parameters, this id is basically a paramters, */}
        <Route path=":id" element={<Support />} />
      </Route>
      {/*This will be shown when no path matches */}
      <Route path="*" element={<NotFound/>} />
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

➡️ Nested Routes:
    ->React Router allows you to create nested routes, which means you can have routes within routes.
    ->This is useful for creating complex layouts where certain components are shared across multiple routes.
    ->For example, you can have a main layout with a sidebar and a header, and then have different content for each route.
   To understand nested routes, we have adding another files called ContactLayout.jsx in layout folder:
    ->Inside this file, we have added a Contact component and an Outlet component.
    ->And Here we will replace contact route with this:
          <Route path="contact" element={<ContactLayout />}>
            ...mention differen router here
          </Route>
          see above

➡️ Route Paramters: These are the values that are dynamically passed to the route.
    ->For example, if you have a route like /products/:id, the :id
    In short these are tha values that are passed to the page url
    They can used to change the content of the page based on the value passed.
    ->You can access these parameters using the useParams hook.
    Examle: <Route path=":id" element={<Support />} />
    now in the url if i type: http://localhost:3000/contact/123 or /abc .. it will render Support component.
   this /123 or /abc is the route parameter, and you can access it in the Support component using useParams hook.
    ->You can also pass multiple parameters in the same route, like /products/:id/:category
*/

export default Main;
