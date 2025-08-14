import React from 'react'

//called from HOC.jsx, this is a higher order component
const withLoading = (wrappedComponent) => {
  return function EnhancedComponent({isLoading,...props}){
    if(isLoading){
        return <p>Loading...</p>
    }
    return <wrappedComponent {...props}/>
  }
}

export default withLoading