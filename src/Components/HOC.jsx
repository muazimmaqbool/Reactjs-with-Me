import React, { useEffect, useState } from 'react'

//Read about Higher Order Component below

//This is a simple component that just displays a list of users
const UserList=({users})=>{
    return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user}</li>
      ))}
    </ul>
  );
}

//Higher Order Component to add loading logic
const withLoading = (WrappedComponent) => {
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
    return <WrappedComponent {...props}/>
  }
}

//Wrapping UserList with withLoading HOC
const UserListWithLoading=withLoading(UserList)

const HOC = () => {
  const [loading, setloading] = useState  (true);
 const [users, setusers] = useState([]);
 useEffect(() => {
  setTimeout(() => {
      setusers(["Muazim", "Ali", "Sara"]);
      setloading(false);
    }, 2000);
 }, []);
  return(
     <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>User List</h2>
      <UserListWithLoading isLoading={loading} users={users} />
    </div>
  )
}

export default HOC
/*
-> What is a Higher Order Component?
    A Higher Order Component is a function that takes a component as input and returns a new component with extra powers.
    Think of it like a wrapper that injects extra props, logic, or styling into your component without modifying the original one.

    Formula: const EnhancedComponent = higherOrderComponent(OriginalComponent);

-> Why use HOCs?
    Reuse logic between multiple components (before hooks existed, this was the main way).
    Add common features: authentication, logging, loading states, permissions, styling.
    Keep components pure and focused on UI, while HOC handles the extra logic.

->Basic Example: With Loading Spinner
    We want to add a loading spinner to any component that fetches data.
    Step 1 — A simple component: UserList component
    Step 2 - Create the HOC: withLoading
    step 3 - use it : const UserListWithLoading = withLoading(UserList);
*/