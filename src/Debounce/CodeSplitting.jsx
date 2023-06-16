import React,{lazy,Suspense} from 'react'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'

// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
//we will see these are come inside bundle.js
//now we want to put them seperatly i.e known as code splitting, os import them using lazy keyword -{import lazy from react}

const Home=lazy(()=>import("./Home")); //this is known as dynamic import
const About=lazy(()=>import("./About"));
const Contact=lazy(()=>import("./Contact"));
//this is known as dynamic import, this way it maintains good performance 
//->this way react application is to hold off loading some parts of a web page until a user needs them

//ab hum jis page pei honge ausi ka data ayaa ga seperate file mei bundle.js ke neeche
//aase hum lazy keyword ka use karke code splitting karr skhte hain

//at 7:40
//now important suspence form react and wrap all routes inside suspence
//suspence has fallback in which we give component which is shown till component is loaded

const CodeSplitting = () => {
  return (
    <>
     <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Suspense>
     </Router>
    </>
  )
}

export default CodeSplitting
/*
what is debounce,code splitting,etc already in notes and debounce already seen in javascript
visit: https://www.youtube.com/watch?v=B36pSPMSzZI
*/