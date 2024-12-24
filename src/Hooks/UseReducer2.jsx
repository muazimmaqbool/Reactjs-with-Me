import React, { useState, useReducer } from "react";

//First check previous code i.e UseReducer.jsx
const UseReducer2 = () => {
  return (
    <>
      <Example1 />
      <Example2 />
    </>
  );
};
function reducer(state, action) {
  if (action.type === "increment-task") {
    return {
      task: state.task + 1,
    };
  } else {
    return {
      task: state.task - 1,
    };
  }
}
//useReducer Example of increment Task
const Example1 = () => {
  const [state, dispatch] = useReducer(reducer, { task: 1 });

  function addTask() {
    dispatch({ type: "increment-task" });
  }
  return (
    <>
      <button onClick={addTask}>ADD New TASK</button>
      <p>Pending Tasks:{state.task}</p>
      <button
        onClick={() => {
          dispatch({ type: "decrement-task" });
        }}
      >
        Remove TASK
      </button>
    </>
  );
};

//example two of useReducer
function manageItems(state, action) {}
const Example2 = () => {
  const [state, dispatch] = useReducer(manageItems, { items: 10 });
  return (
    <>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "add-item" });
        }}
      >
        Add Item
      </button>
      <p>Total Item:</p>
      <button
        onClick={() => {
          dispatch({ type: "remove-item" });
        }}
      >
        Remove Item
      </button>
    </>
  );
};

export default UseReducer2;
