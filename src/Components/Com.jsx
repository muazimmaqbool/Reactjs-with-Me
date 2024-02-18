import React from 'react'

//also study from notebook
const Com = () => {
  return (
    <>
    <h3>Inside component</h3>
    {/*using another component inside Com component */}
    <Garage/>
    </>
  )
}
//component 1
function Car(){
    return(
        <h2>I am your Car!</h2>
    )
}
//component 2
function Garage(){
    return(
        <>
            <h2>Who is in my Garage?</h2>
            <Car/> 
            {/*accessing Car component from Garage component */}
        </>
    )
}
export default Com

/*
React Components:
    Components are independent and reusable bits of code. They serve the same purpose as JavaScript 
    functions, but work in isolation and return HTML.
    Components are like functions that return HTML elements.
    >Components come in two types, Class components and Function components, we will concentrate on Function components.

    >The component's name MUST start with an upper case letter.

    >Class Component (extra)
        A class component must include the extends React.Component statement. This statement creates 
        an inheritance to React.Component, and gives your component access to React.Component's functions.
        The component also requires a render() method, this method returns HTML.
        Example:
        
        Create a Class component called Car
            class Car extends React.Component {
                render() {
                    return <h2>Hi, I am a Car!</h2>;
                }
            }
            {if you want to take a look at class components visit this link: https://www.w3schools.com/REACT/react_class.asp}
    
    >Function Component
        Here is the same example as above, but created using a Function component instead.
        A Function component also returns HTML, and behaves much the same way as a Class component, 
        but Function components can be written using much less code, are easier to understand,
        and will be preferred to use.

        Example:
        Create a Function component called Car
            function Car() {
                return <h2>Hi, I am a Car!</h2>;
            }


*/