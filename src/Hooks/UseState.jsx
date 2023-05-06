import React from "react";
import { useState } from "react"; //importing useState hook

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
  const[day,setDay]=useState("");

  const today = new Date();
  const dayOfWeek = today.getDay(); //this will give o/p like this 0,1,2,... i.e sunday,monday,...
  const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return(
    <>
      <h1>Today is: {day}</h1>

      {/* <button type="button" onClick={()=>setDay("Monday")}>Monday</button>
      <button type="button" onClick={()=>setDay("Tuesday")}>Tuesday</button>
      <button type="button" onClick={()=>setDay("Wednesday")}>Wednesday</button>
      <button type="button" onClick={()=>setDay("Thrusday")}>Thrusday</button>
      <button type="button" onClick={()=>setDay("Friday")}>Friday</button>
      <button type="button" onClick={()=>setDay("Saturday")}>Saturday</button>
      <button type="button" onClick={()=>setDay("Sunday")}>Sunday</button> */}

      {/*we can get today in much simple way like this */}
      <button type="button" onClick={()=>setDay(days[dayOfWeek])}>Getday</button>
      {/*setDay(days[dayofWeek]): days is an array and daysofWeek contains day number */}
    </>
  )
}

export default UseState;

/*learn about useState hook from notebook and from w3schools

-> useState: it allows us to track state in a function component
    {state: state generally refers to data or properties that need to be tracked in an application}

->Important:
    -Initialize useState
        We initialize our state by calling useState in our function component.
        useState accepts an initial state and returns two values:
            The current state.
            A function that updates the state.
            //see in Color component
        -Read State
            We can now include our state anywhere in our component.
            Use the state variable in the rendered component.
        -Update State
            To update our state, we use our state updater function.
            We should never directly update state. Ex: color = "red" is not allowed.
            do this to update state eg:
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>

    Now on next code: UseState2
*/
