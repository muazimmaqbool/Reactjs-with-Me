import React from 'react'

//called from HOC.jsx, this is a higher order component
const withLoading = (wrappedComponent) => {
    /*
    What’s happening?
        withLoading takes any component.
        Returns a new component that:
        Shows "Loading..." if isLoading is true.
        Otherwise, renders the original component with all original props.
    */
  return function EnhancedComponent({isLoading,...props}){
    if(isLoading){
        return <p>Loading...</p>
    }
    return <wrappedComponent {...props}/>
  }
}

export default withLoading