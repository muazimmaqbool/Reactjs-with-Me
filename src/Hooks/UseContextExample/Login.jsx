import React, { useContext, useState } from 'react'
import { UserContext } from './UserProvider'

const Login = () => {
  const{login}=useContext(UserContext)
  const [name, setname] = useState();
  return (
    <div>
      <p>Please Login:</p>
      <input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.value)}/>
      <button onClick={()=>{login(name);}}>Login</button>
    </div>
  )
}

export default Login