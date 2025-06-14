import React, { memo, useState } from 'react'

//Read Documentation Below ⬇️
const ComponentReRender = () => {
  return (
    <div>
        <h3> When Does a Component Re-render?</h3>
        <Parent/>
    </div>
  )
}

const Parent=()=>{
  const [count, setcount] = useState(0);
  const [item, setItem] = useState("Laptop");
  return(
    <div>
      <button onClick={()=>setcount(count+1)}>Update Count</button>
      <p>Count:{count}</p>
      <Child item={item}/>
      <button onClick={()=>setItem("Mobile")}>Change Item</button>
    </div>
  )
}

//const Child = ({item})=>{ //this way child will re-render when count in parent component changes
const Child=memo(({item})=>{ //now it will only re-render when the item prop changes
  console.log("Child component re-rendered");
  return(
    <div>
      <p>Item in child component: {item}</p>
    </div>
  )
})


export default ComponentReRender
/*
🔁 When Does a Component Re-render?
    A component re-renders when any of the following changes:
    1️⃣ State – If a component's state changes via setState, it re-renders.
    2️⃣ Props – If the parent passes new (different) props to the component, it re-renders.
    3️⃣ Context – If the component uses useContext() and the context value changes.
    4️⃣ Force Update – If you manually trigger a re-render using forceUpdate() (class) or other hacks.
    ✅ Even if a state/prop changes to the same value, React may still re-render, unless optimizations are used:

    💡 React Rendering Behavior: Key Points⬇️
       Trigger	                Will Component Re-render?	         Notes
    -------------------------|-----------------------------|------------------------------------
    setState(newValue)	         ✅ Yes	                      Only if value is new (shallow diff)
    setState(sameValue)	         ✅ (by default)	              May still re-render unless optimized
    Prop from parent changes	   ✅ Yes	                      Even if unrelated to what component uses
    Context value changes	       ✅ Yes	                      If used in the component
    Parent re-renders	           ✅ (usually)	              Unless memoized

⚙️ How to Avoid Unnecessary Re-renders
    1️⃣React.memo (Functional Components):
      Wrap your component to skip re-rendering if props haven’t changed:
      const MyComponent = React.memo((props) => {
        return <div>{props.value}</div>;
      });

    2️⃣useMemo and useCallback:
      Memoize expensive calculations or stable functions
      const computedValue = useMemo(() => computeSomething(a, b), [a, b]);
      const handleClick = useCallback(() => doSomething(), []); 

    4️⃣Avoid changing object/array references unnecessarily:
      const obj = { a: 1 }; // new object every render ⇒ causes prop change

    5️⃣Split components:
      Smaller components that receive only relevant props help reduce the re-render scope.

    6️⃣useSelector optimization (Redux)
      Avoid returning entire objects from useSelector unless memoized.

    7️⃣PureComponent (Class)
      Automatically implements shallow comparison for props and state.

    🧠 Summary:
    --------------------
      Change Type	           Triggers Render?	       Can Be Optimized?
      --------------------|---------------------|-----------------------------
      State in component	     ✅ Yes	              ❌ Only if you avoid setting it
      Props from parent	       ✅ Yes	              ✅ With React.memo
      Parent renders	         ✅ Yes	              ✅ With splitting and memo
      Context changes	         ✅ Yes	              ✅ With React.memo, selective context
      Redux/global store	     ✅ Yes	              ✅ With selector memoization

  ➡️useMemo and useCallback:
     - these hooks help optimize performance by memoizing values and functions, preventing unnecessary re-renders.
    
    1️⃣When to Use useCallback:
       Use useCallback when you're passing functions as props to child components and want to avoid unnecessary re-renders 
       due to function re-creation.
       🔁 Problem Without useCallback:
          🟢Every render creates a new function reference, causing memoized children to re-render.
            const Parent = () => {
              const handleClick = () => console.log("Clicked");

              return <Child onClick={handleClick} />;
            };

            const Child = React.memo(({ onClick }) => {
              console.log("Child rendered");
              return <button onClick={onClick}>Click</button>;
            });
          🟢Even with React.memo, Child re-renders because onClick is a new function each time.

        ✅ Solution With useCallback:
            const handleClick = useCallback(() => {
              console.log("Clicked");
            }, []);


    2️⃣When to Use useMemo:
       Use useMemo when you have expensive calculations or object/array creation that doesn't need to be recomputed on every render.
      🔁 Problem Without useMemo:
          const filteredItems = items.filter(item => item.active); // runs every render
          🟢If items is large or the filter is expensive, this is inefficient.

      ✅ Solution With useMemo:
          const filteredItems = useMemo(() => {
            return items.filter(item => item.active);
          }, [items]);


      🔄 In Short:
          Situation	                                              Use
          ----------------------------------------------------|--------------
          Memoizing expensive calculations or values	           useMemo
          Memoizing functions to avoid child re-renders	         useCallback
          Returning same object/array reference across renders	 useMemo
          Creating stable event handlers inside component	       useCallback


      🧠 The Core Difference:
          Hook	          What it memoizes	          Used for
          ------------|---------------------|-----------------------------------
          useCallback	  ✅ Functions	          Prevents function re-creation
          useMemo	      ✅ Values/Results	    Prevents expensive recalculation

      ❗Don't Overuse:
          Only use useMemo and useCallback when performance issues are real. 
          Overusing them can make your code harder to read without meaningful benefit.
*/