import React, { memo, useCallback, useState } from "react";
/*
What is a Render in React?
  A render means React calls your component function to produce the virtual DOM.
  Then React compares (diffs) it with the previous render, and if something changed, it updates the real DOM.
  Important: Rendering ≠ DOM update.
  You can have a render without React touching the DOM (if nothing changed).
*/


const Child = memo(({ onClick, label }) => {
  console.log(`"${label}" rendered`);
  return <button onClick={onClick}>{label}</button>;
});

const RenderingBehavior = () => {
  const [count, setcount] = useState(0);
  const [text, settext] = useState("");
  
  //const handleIncrement = () => setcount((c) => c + 1);//calls everytime count and text is changed
  // ❌ Problem: Without useCallback, new function is created on every render

  //✅ Fix: useCallback memoizes the function reference
  const handleIncrement = useCallback(() => {
    setcount((c) => c + 1);
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Rendering Behavior Demo</h2>
      <p>Count: {count}</p>
      <Child label="Increment" onClick={handleIncrement} />

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
    </div>
  );
};

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
        <Button onClick={() => doSomething()} /> // new function every render

    3) Context updates that are too broad.
    4) Parent renders cascading down.

-> How to Avoid Unnecessary Renders:
    🔹Using React.memo (HOC):
        Stops a child from re-rendering if props are the same (shallow compare).
        const Child = React.memo(({ value }) => {
          console.log("Rendered");
          return <div>{value}</div>;
        });
    Note: to study memo check Memo.jsx file inside components foldder

    🔹useCallback hook:
        Memoizes a function reference, so children don’t see a “new function” every render.
        const handleClick = useCallback(() => {
          console.log("Clicked");
        }, []);
    Note: to study useCallback hook checkout useCallback.jsx inside Hooks folder
    
    🔹useMemo hook:
        Memoizes expensive calculations or objects.
        const options = useMemo(() => [{ id: 1 }], []);
    Note: to study useMemo hook check UseMemo.jsx component inside Hooks folder

    🔹Split State & Components
        Keep unrelated state in separate components/hooks so one change doesn’t re-render everything.

    🔹Context Optimization
        Don’t put everything in one context.
        Split into multiple contexts or use selector hooks.
    Note: The useSelector hook allows functional React components to extract specific pieces of data from the Redux store's state.

  ->Debugging Re-renders
      React DevTools Profiler: shows which components re-rendered and why.
      Add console.log("render") inside components to spot unexpected renders.
      Libraries like why-did-you-render can highlight wasted renders.

  ->Golden Rule
      Render as little as possible, update the DOM only when necessary.
      But don’t prematurely optimize — readability comes first, optimization when you spot issues.

   Note Above i have shown small example that shows unnecessary re-renders and fixing them using memo and callback
*/

export default RenderingBehavior;
