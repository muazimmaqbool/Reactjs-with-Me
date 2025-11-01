import React from 'react'
import UserProvider from './UserProvider'
import Login from "./Login"
import Profile from "./Profile"

//here we will wrap the app with Provider
const LoginHome = () => {
  return (
    <UserProvider>
        <h2>useContext Example with multiple files</h2>
        {/* check these files who context value is used */}
        <Login/>
        <Profile/>
    </UserProvider>
  )
}

export default LoginHome