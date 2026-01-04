import React, { useCallback, useState } from "react";

//useCallback hook is already studied in 'Hooks' folder > UseCallback.jsx
/*
The useCallback Hook returns a memoized callback function
This allows us to isolate resources of intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.

->The useCallback and useMemo Hooks are almost similar, the main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
*/

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered...");
  return <button onClick={onClick}>+</button>;
});
const WithUseCallback = () => {
  const [count, setcount] = useState(0);
  const [theme, settheme] = useState("light");
  console.log("Parent component rendered...");

  //➡️without useCallback it gets created everytime 'Toggle Theme' button is clicked which leds to 'Child' Component render
//   const increment = () => {
//     setcount(count + 1);
//   };

  //➡️with useCallback
  const increment=useCallback(({onClick})=>{
    console.log("Child rendered...")
    return <button onClick={onClick}>+</button>
},[])
  return (
    <div>
      <h2>Optimizing with useCallback hook:</h2>
      <p>Theme:{theme}</p>
      <p>Count: {count}</p>
      <Child onClick={increment} />
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => settheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
      {/* Here in this code when 'Toggle Thenme' button is clicked both 'Parent and Child' component rendered because when 'Parent' is rendered by 'Toggle Theme' button
      which creates new 'increment' function every time it renders which leds to 'Child' component render even though it as 'memo' because its prop is getting created everytime
      so to fix this issue we use 'useCallback' hook on 'increment' function
      
      ->After using 'useCallback' hook on 'increment' function the 'Child' Component gets rendered only with '+' button is clicked and on initial component mount
      and 'Parent' component now only gets rendered when 'Toggle Theme' button is clicked*/}
    </div>
  );
};

export default WithUseCallback;
