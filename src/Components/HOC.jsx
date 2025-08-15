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
  return function EnhancedComponent({isLoading,...props}){
    if(isLoading){
        return <p>Loading...</p>
    }
    return <WrappedComponent {...props}/>
  }
}
/*
->withLoading HOC code explanation:
  1)It takes one argument WrappedComponent which is any React component you pass into it (e.g., UserList).
    Think of it like saying:
    “Give me a component, and I’ll give you back a new, upgraded one.”

  2)Inner EnchancedComponent is the actual function that will be rendered
      { isLoading, ...props } → This is destructuring props:
      Pulls isLoading directly out of the props.
      ...props means “everything else” (users, title, etc.).

  3)if (isLoading) { return <p>Loading...</p>; }
      Checks if isLoading is true. If yes → don’t even render the original component — just show "Loading...".
      This is where we inject the new behavior.

  4)return <WrappedComponent {...props} />
      If isLoading is false, we render the original component we were given.
      {...props} passes all other props to it (users, styling, events, etc.).
      This ensures the wrapped component behaves exactly like before, but now with loading capability added.
*/

//Wrapping UserList with withLoading HOC
const UserListWithLoading=withLoading(UserList)
//try without HOC withLoading(...), you will see the Loading... is not getting displayed
//const UserListWithLoading=UserList


const HOC = () => {
  const [loading, setloading] = useState  (true);
 const [users, setusers] = useState([]);
 useEffect(() => {
  setTimeout(() => {
      setusers(["Muazim", "Maqbool", "Rather"]);
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

/*
 A Higher Order Component doesn’t touch your original component — it wraps it in another component that 
 can add logic before deciding what to render.
*/
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

->Basic Example: With Loading Spinner:
    We want to add a loading spinner to any component that fetches data.
    Step 1 — A simple component: UserList component
    Step 2 - Create the HOC: withLoading
    step 3 - use it : const UserListWithLoading = withLoading(UserList);

->Things to Remember (Important):
    HOCs don’t modify the original component — they wrap it.
    Always pass down props (...props) to keep the wrapped component functional.
    Name convention: withSomething.
    With hooks, many cases where you’d use HOCs are now done with custom hooks — 
            but HOCs are still important to understand (you’ll see them in libraries like react-redux, react-router).
*/