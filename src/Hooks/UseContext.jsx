import React, { useState,createContext,useContext } from 'react'

const context=createContext();
const UseContext = () => {
    const[item,setItem]=useState("Laptop");
  return (
    <>
        <context.Provider value={item}>
            <h3>useContext Hook</h3>
            <h4>Item is: {item}</h4>
            <button onClick={()=>setItem("CPU")}>Change item</button>
            <Comp2/>
        </context.Provider>
    </>
  )
}

function Comp2(){
    return(
        <>
            <h5>component 2</h5>
            <Comp3/>
        </>
    )
}
function Comp3(){
    return(
        <>
            <h5>component 3</h5>
            <Comp4/>
        </>
    )
}
function Comp4(){
    return(
        <>
            <h5>component 4</h5>
            <Comp5/>
        </>
    )
}
function Comp5(){
    const data=useContext(context)
    return(
        <>
            <h5>component 5</h5>
            <h4>Diplay {data} again</h4>
        </>
    )
}

export default UseContext

/*
->React Context
    React Context is a way to manage state globally.
    It can be used together with the useState Hook to share state between deeply nested 
    components more easily than with useState alone.

    ->The Problem
        State should be held by the highest parent component in the stack that requires access to the state.
        To illustrate, we have many nested components. The component at the top and bottom of the stack need 
        access to the state.
        To do this without Context, we will need to pass the state as "props" through each nested
        component. This is called "prop drilling".

        example:
        import React, { useState } from 'react'
        const UseContext = () => {
            const[item,setItem]=useState("Laptop");
        return (
            <>
                <h3>useContext Hook</h3>
                <h4>Item is: {item}</h4>
                <Comp2 item={item}/>
            </>
        )
        }

        function Comp2({item}){
            return(
                <>
                    <h5>component 2</h5>
                    <Comp3 item={item}/>
                </>
            )
        }
        function Comp3({item}){
            return(
                <>
                    <h5>component 3</h5>
                    <Comp4 item={item}/>
                </>
            )
        }
        function Comp4({item}){
            return(
                <>
                    <h5>component 4</h5>
                    <Comp5 item={item}/>
                </>
            )
        }
        function Comp5({item}){
            return(
                <>
                    <h5>component 5</h5>
                    <h4>Diplay {item} again</h4>
                </>
            )
        }

        export default UseContext


    ->The Solution
        The solution is to create context.
        Create Context
        To create context, you must Import createContext and initialize it:

        import { useState, createContext } from "react";
        import ReactDOM from "react-dom/client";

        const UserContext = createContext()
        Next we'll use the Context Provider to wrap the tree of components that need the state Context.

        Context Provider
        Wrap child components in the Context Provider and supply the state value.

        function Component1() {
        const [user, setUser] = useState("Jesse Hall");

        return (
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 user={user} />
            </UserContext.Provider>
        );
        }
        Now, all components in this tree will have access to the user Context.

        Use the useContext Hook
        In order to use the Context in a child component, we need to access it using the useContext Hook.

        First, include the useContext in the import statement:

        import { useState, createContext, useContext } from "react";
        Then you can access the user Context in all components:

        function Component5() {
        const user = useContext(UserContext);

        return (
            <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
            </>
        );
        }
        Full Example
        Example:
        Here is the full example using React Context:
        import { useState, createContext, useContext } from "react";
        import ReactDOM from "react-dom/client";

        const UserContext = createContext();

        function Component1() {
        const [user, setUser] = useState("Jesse Hall");

        return (
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 />  
            </UserContext.Provider>
        );
        }

        function Component2() {
        return (
            <>
                <h1>Component 2</h1>
                <Component3 />
            </>
        );
        }

        function Component3() {
        return (
            <>
                <h1>Component 3</h1>
                <Component4 />
            </>
        );
        }

        function Component4() {
        return (
            <>
                <h1>Component 4</h1>
                <Component5 />
            </>
        );
        }

        function Component5() {
        const user = useContext(UserContext);

        return (
            <>
                <h1>Component 5</h1>
                <h2>{`Hello ${user} again!`}</h2>
            </>
        );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<Component1 />);


    visit: https://www.w3schools.com/REACT/react_usecontext.asp
*/