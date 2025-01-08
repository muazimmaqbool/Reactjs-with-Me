import React from 'react'
import Mounting from './Mounting'
import Updating from './Updating'
import Unmounting from './Unmounting'
import UnMountingExample from './UnMountingExample'

//This is intro about lifecycle methods
//Read Documentation Below
const LifeCycleMethods = () => {
  return (
    <>
      <h2>LifeCylce Methods in React</h2>
       {/*contains componentDidMount()*/}
       {/* <Mounting/> */}
       
       {/*for shouldComponentUpdate() and componentDidUpdate() */}
       <Updating/> 

        {/*for componentWillUnmount() */}
        {/* <Unmounting/> */}
        {/*used to explain componentWillUnmount() */}
        {/* <UnMountingExample/> */}

    </>
  )
}

export default LifeCycleMethods

/*
 ->NOTE: They are used with class based components and on functional components we use hooks

    visit: https://www.w3schools.com/react/react_lifecycle.asp

 -> Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. 
       The three phases are: Mounting, Updating and Unmounting.

       Important LifeCycle Methods are:
            componentDidMount(), shouldComponentUpdate(), ComponentDidUpdate(), ComponentWillUnmount()
       
        -> componentWillMount() was used react 17, it was removed in v18.
                basically this method was called before render


*/