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
    State – If a component's state changes via setState, it re-renders.
    Props – If the parent passes new (different) props to the component, it re-renders.
    Context – If the component uses useContext() and the context value changes.
    Force Update – If you manually trigger a re-render using forceUpdate() (class) or other hacks.
    Even if a state/prop changes to the same value, React may still re-render, unless optimizations are used

*/