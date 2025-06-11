import React from 'react'

const ComponentReRender = () => {
  return (
    <div>
        <h3> When Does a Component Re-render?</h3>
    </div>
  )
}
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

*/