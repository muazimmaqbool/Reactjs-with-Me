import React, { useEffect, useState } from 'react'
import withLoading from './withLoading'
//Read about Higher Order Component below
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
  return <UserListWithLoading isLoading={loading} users={users} />;
}

//This is a simple component
const UserList=({users})=>{
    return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user}</li>
      ))}
    </ul>
  );
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
    Step 2 - Create the HOC: withLoading (inside another file called withLoading.jsx)
    step 3 - use it : const UserListWithLoading = withLoading(UserList);
*/