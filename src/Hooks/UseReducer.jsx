import React, { useReducer } from "react";
/*
->useReducer Hook:
  Think of useReducer as an alternative to useState when state logic becomes more complex, 
  like when multiple actions update the same state.
  or
  The useReducer hook in React provides an alternative to useState for managing component state, especially when dealing with more
  complex state logic or when state updates depend on the previous state. It is inspired by the Redux pattern.

->Why use useReducer?
  Use it when:
  State has multiple values
  State transitions follow specific actions
  You want cleaner state update logic

->Example cases: Form handling, complex UI components, state machines, etc.
->Syntax: const [state, dispatch] = useReducer(reducer, initialState);
          state → current value
          dispatch(action) → triggers updates
          reducer(state, action) → function that returns the new state
->Example below in code: counter example
*/
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h2>Example two: input</h2>
      <ReducerExampleInput />
    </div>
  );
};

function reducerInputFun(state, action) {
  switch (action.type) {
    case "updateInput":
      return { ...state, [action.field]: action.value };
    case "reset": {
      return {name:"",email:""};
    }
    default:
      return state;
  }
}
function ReducerExampleInput() {
  const [state, triggerFun] = useReducer(reducerInputFun, {
    name: "",
    email: "",
  });
  //here tiggerFun is dispacth and {name:"",email:""} is initialState
  return (
    <div>
      <input
        value={state.name}
        onChange={(e) =>
          triggerFun({
            type: "updateInput",
            field: "name",
            value: e.target.value,
          })
        }
        placeholder="name"
      />
      <input
        value={state.email}
        onChange={(e) =>
          triggerFun({
            type: "updateInput",
            field: "email",
            value: e.target.value,
          })
        }
        placeholder="Email"
      />
      <button onClick={()=>triggerFun({type:"reset"})}>Reset</button>
      
      <pre>{JSON.stringify(state,null,1)}</pre>
      {/*
      ->{JSON.stringify(state,null,1)}:
        | Part               | Meaning                                                        |
        | ------------------ | -------------------------------------------------------------- |
        | `JSON.stringify()` | Converts a JavaScript object into a JSON string                |
        | `state`            | The object you want to display                                 |
        | `null`             | Replacer (used to filter keys — here we don’t filter anything) |
        | `1`                | Number of spaces for indentation (pretty formatting)           |

      
      */}
    </div>
  );
}
//Note: reducer, state, initialState, and dispatch are not special reserved words in React.
//      They are just variable names — you can rename them to anything you like.

export default UseReducer;
