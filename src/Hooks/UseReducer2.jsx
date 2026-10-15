import React, { useReducer } from "react";

//First check previous code i.e UseReducer.jsx
const UseReducer2 = () => {
  return (
    <>
      <Example1 />
      <p>------------------------------------</p>
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
function manageItems(state, action) {
  switch (action.type) {
    case "add-item":
      return { items: state.items + 1 };
    case "remove-item":
      return { items: state.items - 1 };
    default:
      return { item: 10 };
  }
}
const Example2 = () => {
  const [state, dispatch] = useReducer(manageItems, { items: 10 });
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "add-item" });
        }}
      >
        Add Item
      </button>
      <p>Total Items in Cart: {state.items}</p>
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
