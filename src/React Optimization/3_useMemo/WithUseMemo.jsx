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
