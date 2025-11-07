import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook = () => {
  const boxRef = useRef();
  const [width, setwidth] = useState();

  //1 ➡️ with useEffect()
//   useEffect(() => {
//      //This runs after painting — user may see flicker
//     setwidth(boxRef.current.offsetWidth);
//   }, []);
  //Problem: There’s a flicker — React paints the UI, then you measure and re-render.

  //2 ➡️ with useLayoutEffect()
  useLayoutEffect(() => {
    // Runs before the paint — no flicker
    setwidth(boxRef.current.offsetWidth);
  }, []);
    //Result: The user never sees an “unmeasured” state — no flicker, smoother render.
  return (
    <div>
      UseLayoutHook Example:
      <div ref={boxRef} style={{ width: "50%", background: "lightblue" }}>Box</div>
      <h3>Width: {width}px</h3>
    </div>
  );
};

export default UseLayoutEffectHook;
/*
->What is useLayoutEffect?
   useLayoutEffect is a React Hook that runs synchronously after all DOM mutations (updates to the UI), but before the browser paints the screen.
   
   In simpler words: It runs right after React updates the DOM, but before the user sees the changes.

   That means if you read or modify the DOM inside it, you’ll be reading the final DOM (after React’s updates) 
   and can even block the browser from painting until your logic finishes.

>Syntax:
    useLayoutEffect(() => {
    Your logic here (runs synchronously after DOM changes)
    return () => {
    Cleanup logic (runs before next layout effect or unmount)
    };
    }, [dependencies]);

->Difference Between useEffect and useLayoutEffect:
    | Feature     | `useEffect`                                   | `useLayoutEffect`                                          |
    | ----------- | --------------------------------------------- | ---------------------------------------------------------- |
    | Timing      | Runs **after** the browser paints             | Runs **before** the browser paints                         |
    | Blocking    | Non-blocking (async)                          | Blocking (sync)                                            |
    | Use case    | For side effects like API calls, logs, timers | For measuring DOM size/position or applying layout changes |
    | Performance | Faster, doesn’t block UI                      | Slower if misused, can block rendering                     |

Think of it like this:
    🧵 useEffect: “I’ll run after everything’s visible.”
    🧱 useLayoutEffect: “Wait! Let me fix something before showing it.”

->Example above:

->When to Use It (and When NOT to):
    ✅ Use useLayoutEffect when:
        You need to measure or read layout (e.g. element height, width, position)
        You need to synchronously update layout before paint
        You’re integrating with non-React code (like a chart library or animation lib that manipulates DOM)

    🚫 Avoid it for:
        Fetching data
        Logging
        Setting state that doesn’t depend on layout
        Anything that can safely run asynchronously
    Because it blocks rendering and can hurt performance if overused.

->Rule of Thumb:
    Start with useEffect.
    Only switch to useLayoutEffect if you see visual glitches or need precise layout measurements.
*/
