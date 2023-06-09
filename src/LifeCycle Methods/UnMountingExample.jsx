import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import CompOne from "../LifeCycle Methods/CompOne";
import CompTwo from "../LifeCycle Methods/CompTwo";


const UnMountingExample = () => {
  return (
    <div>
        <Example/>
    </div>
  )
}

class Example extends React.Component{

    render(){
        return(
            <Router>
                <nav>
                    <Link to="/">Comp One</Link>
                    <Link to="/comptwo">Comp Two</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<CompOne/>}/>
                    <Route path='/comptwo' element={<CompTwo/>} />
                </Routes>
            </Router>
        )
    }
}

export default UnMountingExample

/*
i have created two components CompOne and CompTwo to use them here
*/