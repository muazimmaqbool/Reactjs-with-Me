import React from 'react'
/*
What is a Render in React?
  A render means React calls your component function to produce the virtual DOM.
  Then React compares (diffs) it with the previous render, and if something changed, it updates the real DOM.
  Important: Rendering ≠ DOM update.
  You can have a render without React touching the DOM (if nothing changed).
*/
const RenderingBehavior = () => {
  return (
    <div>RenderingBehavior</div>
  )
}

/*
-> What Causes a Component to Re-render?
   A component re-renders when its inputs change. 
    The triggers are:
    1. State changes (useState, useReducer)
    2. Props change (when parent re-renders and passes new values).
    3. Context values change (if you consume a useContext value).
    4. Parent re-renders – even if props didn’t change, children will re-render by default.

*/

export default RenderingBehavior