import React, { useState, useCallback } from "react";
import USEcallbackCOMP from "../Hooks/USEcallbackCOMP";

//Read Documentaion Below:
const UseCallback = () => {
  return <Example1 />;
};

const Example1 = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    console.log("function renders")
    return [number, number + 1, number + 2];
  }, [number]);
  //this getItems function gets re-created every single time we render our component so every single time we change our
  //number this function is being re-created over and over and over again, even if the actual number inside it didn't change
  //and this is where we use useCallback: useCallback is going to make this callback function only update when it needs to
  //so it will only render when number changes
  //earlier it was also rendering when we change theme now after using useCallback it only renders when changing number

  //try this function without useCallback:
                                            /*
                                            const getItems = () => {
                                              console.log("function renders")
                                              return [number, number + 1, number + 2];
                                            }
                                            */

  //big difference between useMemo and useCallback is that , useMemo takes a function and its going to
  //return you the return value of that function,
  //useCallback also takes a function  and it returns that function which it takes
  //if we use useMemo above it will set array to getItems
  //while as useCallback sets entire function to the getItems  not just return items of the function
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <USEcallbackCOMP getItems={getItems} />
      {/*another component named as USEcallbackCOMP.jsx */}
    </div>
  );
};

export default UseCallback;

/*
->React useCallback Hook:
    The React useCallback Hook returns a memoized callback function
    This allows us to isolate resources of intensive functions so that they will not automatically run on every render.
    The useCallback Hook only runs when one of its dependencies update.
    This can improve performance.

    -> The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns
       a memoized value and useCallback returns a memoized function. 

    ->Problem: One reason to use useCallback is to prevent a component from re-rendering unless its
      props have changed.
*/
