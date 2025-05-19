import React from "react";
import { useState } from "react"; //importing useState hook

//Read Documentation Below:
const UseState = () => {
  return (
    <>
      <h3>useState Hook</h3>
      <Color />
      <Today/>
    </>
  );
};
//Initialize state at the top of the function component.
function Color() {
  const [color, setColor] = useState("red");
  // we can set the initial state to an empty string: useState("") or use an value: useState("red");
  //color is current state and setColor is function that is used to update the state
  return (
    <>
      <h1>My favorite color is: {color}!</h1>
      {/*updating state using button */}
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

//example-1
function Today(){
  const[day,setDay]=useState(""); //here initial value is empty string

  const currentDate = new Date();
  //console.log(currentDate) //o/p like this: Mon May 29 2023 10:37:48 GMT+0530 (India Standard Time)
  const dayOfWeek = currentDate.getDay(); //this will give o/p like this 0,1,2,... i.e sunday,monday,...
  const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return(
    <>
      <h1>Today is: {day}</h1>
      {/*we can get today in much simple way like this */}
      <button type="button" onClick={()=>setDay(days[dayOfWeek])}>Getday</button>
      {/*setDay(days[dayofWeek]): days is an array and daysofWeek contains day number 
      Like this: day[0] i.e Sunday
      */}
    </>
  )
}

export default UseState;

/*learn about useState hook from notebook and from w3schools

->useState hook: it allows us to track state in a function component
    {state: state generally refers to data or properties that needs to be tracked in an application}

->Important:
    -Initialize useState
        We initialize our state by calling useState in our function component.
        useState accepts an initial state and returns two values:
            The current state.
            A function that updates the state.
            //see in Color component above 
        -Read State
            We can now include our state anywhere in our component.
            Use the state variable in the rendered component.
        -Update State
            To update our state, we use our state updater function.
            We should never directly update state. Ex: color = "red"; it's not allowed.
            Do this to update state eg:
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>

    Now check next code: UseState2
*/
