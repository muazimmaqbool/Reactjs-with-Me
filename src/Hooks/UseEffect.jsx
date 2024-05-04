import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  return (
    <>
     <h3>useEffect Hook</h3>
     <Timer/>
    </>
  )
}

function Timer(){
  const[count,setCount]=useState(0);
  useEffect(()=>{
    console.log("useEffect runs")
    setTimeout(()=>{
      setCount(count=>count + 1);
    },1000);
  },[]); 
  return(
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default UseEffect

/*
-> useEffect hook: (also study from notes)
    The useEffect Hook allows you to perform side effects in your components.
    Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    ->useEffect is basically a function which is run when component loads or when component is updated
    useEffect accepts two arguments. function and the dependency. The second argument is optional.
    useEffect(<function>, <dependency>)

    ->Let's use a timer as an example.
        Example: Use setTimeout() to count 1 second after initial render

    ->But wait!! It keeps counting even though it should only count once!
      useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
      This is not what we want. There are several ways to control when side effects run.
      We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
      
      Example
      1. No dependency passed:
        useEffect(() => {
          Runs on every render
        });

      Example
      2. An empty array:
        useEffect(() => {
          Runs only on the first render
        }, []);
*/