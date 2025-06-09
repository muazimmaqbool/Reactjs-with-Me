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
    A component re-renders when any of the following change:
    1️⃣ State – If a component's state changes via setState, it re-renders.
    2️⃣ Props – If the parent passes new (different) props to the component, it re-renders.
    3️⃣ Context – If the component uses useContext() and the context value changes.
    4️⃣ Force Update – If you manually trigger a re-render using forceUpdate() (class) or other hacks.
    Even if a state/prop changes to the same value, React may still re-render, unless optimizations are used:
    💡 React Rendering Behavior: Key Points
       Trigger	                Will Component Re-render?	         Notes
    -------------------------|-----------------------------|------------------------------------
    setState(newValue)	         ✅ Yes	                      Only if value is new (shallow diff)
    setState(sameValue)	         ✅ (by default)	              May still re-render unless optimized
    Prop from parent changes	 ✅ Yes	                      Even if unrelated to what component uses
    Context value changes	     ✅ Yes	                      If used in the component
    Parent re-renders	         ✅ (usually)	              Unless memoized

*/