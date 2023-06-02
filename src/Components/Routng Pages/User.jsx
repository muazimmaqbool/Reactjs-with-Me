import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'

const User = () => {
  const params=useParams(); //used to get id

  const navigation=useNavigate(); //used to go to a prticular page
  //navigation('/about'); //works when you double click on user on screen

  console.log(params.id); //o/p tempId, we can pass any id,
  //change its id at here http://localhost:3000/user/muazim now it will show muazim , watch at 20:00
  return (
    <>
    <div>User</div>
    <button onClick={()=>navigation('/about')}>Go To About Page</button>
    </>

  )
}
/* navigation is used when want to go to some other page after some operation is done there
 like example: we fill up registration form and after clicking submit 
 we want to go to home page there it can be usefull */

export default User