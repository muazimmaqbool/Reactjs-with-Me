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
        const [count, setCount] = useState(0);  //calling setCount(1) causes a re-render

    2. Props change (when parent re-renders and passes new values).
        <Child value={someState} /> // if someState changes, Child re-renders

    3. Context values change (if you consume a useContext value).
        const theme = useContext(ThemeContext); // re-render when theme updates

    4. Parent re-renders – even if props didn’t change, children will re-render by default (Unless wrapped in React.memo.).
        <Parent> <Child /> </Parent> // Child re-renders when Parent re-renders

-> What Does Not Cause Re-render?
    1. Updating a ref (useRef.current = ...)
    2. Console logs or variable updates outside React state
    3. Mutating an object/array without changing its reference (React won’t notice!)

    Example:
      const [user, setUser] = useState({ name: "Muazim" });
      ❌ Won't re-render
      user.name = "Ali";
      
      ✅ Will re-render
      setUser({ ...user, name: "Ali" });

-> Why Do Unnecessary Renders Happen?
    1) Passing new object/array literals each render:
        <Child options={[]} /> // new [] every time

    2) Inline functions:
        <Button onClick={() => doSomething()} /> // new fn every render

    3) Context updates that are too broad.
    4) Parent renders cascading down.


*/

export default RenderingBehavior