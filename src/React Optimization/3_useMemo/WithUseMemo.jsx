import React, { useMemo, useState } from "react";

//useMemo hook is already studied in 'Hooks' folder > UseMemo.jsx
/*
React useMemo Hook:
    The React useMemo Hook returns a memoized value.
    Think of memoization as caching a value so that it does not need to be re-calculated.
    The useMemo Hook only runs when one of its dependencies are updated.
    This can improve performance.
*/

function slowCalculation(num) {
  console.log("Running slow calculation...");
  let result = 0;
  for (let i = 0; i < 100_0000_000; i++) {
    result += num;
  }
  return result;
}

const WithUseMemo = () => {
  console.log("component rendered...")
  const [number, setnumber] = useState(1);
  const [count, setcount] = useState(0);

  //➡️Without useMemo:
  //const result = slowCalculation(number);

  /*
  Problem:
    Clicking Increase Count
    number does NOT change
    BUT slowCalculation() still runs 😡
    UI freezes
  */

  //➡️With useMemo:
  const result = useMemo(() => {
    return slowCalculation(number);
  },[number]);
  //now gets called only when number changes not when count changes

  return (
    <div>
      <h2>Optimization with useMemo hook:</h2>

      <p>Result:{result}</p>

      <button onClick={() => setnumber(number + 1)}>Change Number</button>

      <button onClick={() => setcount(count + 1)}>
        Increase Count ({count})
      </button>
      {/* when useMemo is not used and you change the count the number remain the but still slowCalculation function gets called */}
    </div>
  );
};

export default WithUseMemo;
//Extra and important:
/*
VERY IMPORTANT RULE (Interview Favorite):

  ->useMemo does NOT stop re-renders
  ->It only caches the result of a calculation

  ->Component still re-renders —
  ->but expensive logic doesn’t re-run.

⚠️ When NOT to use useMemo:

    ❌ Simple calculations
    ❌ Primitive operations
    ❌ Just to “look optimized”

const sum = useMemo(() => a + b, [a, b]); // ❌ useless

✅ When to use useMemo (Real Projects):

    ✔ Heavy filters
    ✔ Sorting large lists
    ✔ Chart data processing
    ✔ Derived state from API data
    ✔ Expensive computations

Example from your clinic / gym dashboard:

const filteredAppointments = useMemo(() => {
  return appointments.filter(a => a.status === "pending");
}, [appointments]);

🎯 One-Line Summary (Save this):
    useMemo caches expensive calculations so they don’t re-run on every render.
*/
