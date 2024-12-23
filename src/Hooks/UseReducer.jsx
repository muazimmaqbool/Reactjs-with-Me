import React, { useReducer } from "react";

//Read Documentation Below:
const UseReducer = () => {
  return <Example1 />;
};

//this ACTION object is used in reducer function its used inplace of hardcoded strings
//this is optional but its easy and goodway (at 6:50)
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
//now instead of using hardcoded strings in reducer we can just say
//ACTIONS.INCREMENT
//its good to use these values increment and decrement in object instead of using hardcoded strings
//if you want to change it now we only need to change it in object ACTIONS

//this reducer(anyname) takes two parameters state: where our application is currently at and
//action: this action is passed into dispatch function
function reducer(state, action) {
  //return {count:state.count+1} //now everytime we call dispatch its going to increment count by 1
  //for handling increment and decrement also we use switch statement here
  switch (
    action.type //type is set in dispatch fuction
  ) {
    //case 'increment': //instead of using hardcoded strings here we can use global object name ACTIONS
    case ACTIONS.INCREMENT: //used when ACTIONS objects is used, its optional
      return { count: state.count + 1 };
    //case 'decrement':
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state; //returning state here means do nothing with the state
  }
}
//Here is an example of useReducer
function Example1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); 
  // we can also use reducer,0 then use count in place state
  // dispatch function is going to be called when we update our state

  // const[count,setCount]=useState(0) //now useRedcer is used

  function increment() {
    //setCount(prevCount=>prevCount+1) //used with useState

    //dispatch() //this will just increment , to make it decrement also we pass type into dispatch
    //dispatch({type:'increment'}) //this increments
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    //setCount(prevCount=>prevCount-1)
    //dispatch({type:'decrement'}) // this decrements
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default UseReducer;

/*
 ->useReducer() Hook
  The useReducer Hook is similar to the useState Hook.
  It allows for custom state logic.
  useReducer accepts a reducer function, and an initial state. 
  Syntax
    The useReducer Hook accepts two arguments.
    useReducer(<reducer>, <initialState>)

  The reducer function contains your custom state logic and the initial State can be a simple value but generally will contain an object.
  The useReducer Hook returns the current state and a dispatch method.

  ->Difference between useState and useReducer:
      ->useState is a basic Hook for managing simple state transformation, 
      ->useReducer is an additional Hook for managing more complex state logic. 
      ->However, it's worth nothing that useState uses useReducer internally, that means that you could
                 use useReducer for everything you can do with useState

 */
