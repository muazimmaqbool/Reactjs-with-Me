import React, { memo, useState } from "react";
import MemoTodo from "./MemoTodo";

//Read Documentation Below:
const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  const [myTasks, setmyTasks] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    const todoCount = todos.length;
    const newTodo = `Todo ${todoCount + 1}`;
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  const addTask=()=>{
    const taskCount=myTasks.length;
    const newTask=`Task ${taskCount+1}`;
    setmyTasks((prev)=>[...prev,newTask])
  }
  return (
    <>
      <h1>MEMO</h1>

      {/* without using memo */}
      {/* <Todo todos={todos} />  */}

      {/* using memo */}
      <MemoTodo todos={todos} />
      <AddTask myTasks={myTasks} />

      <hr />

      <button onClick={addTodo} style={{ margin: "10px" }}>
        Add Todo
      </button>

      <button onClick={addTask} style={{ margin: "10px" }}>
        Add Task
      </button>
      <hr />
      <div>
        count: {count}
        <button onClick={increment} style={{ margin: "10px" }}>
          +
        </button>
      </div>
    </>
  );
};

//without using memo
const Todo = ({ todos }) => {
  console.log("Todo render");
  return (
    <>
      <h3>My Todos</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};
//When you click the increment button, the Todos component re-renders. even though the value of todo doesn't change
//If this component was complex, it could cause performance issues.

/* Solution:
  To fix this, we can use memo.
  Use memo to keep the Todos component from needlessly re-rendering.
  Wrap the Todos component export in memo:
  like this : export default memo(Todos);
*/

//but here we have make this component in the different file so, to see how it works we create another
//component named as MemoTodo.jsx
//Now the Todos component only re-renders when the todos that are passed to it through props are updated.

//or use this
const AddTask = memo(({ myTasks }) => {
  console.log("Rendering AddTask...");
  return (
    <>
      <h3>My Tasks</h3>
      {myTasks && myTasks?.length > 0 ? (
        myTasks.map((task, index) => {
          return <p key={index}>{task}</p>;
        })
      ) : (
        <p>No Tasks</p>
      )}
    </>
  );
});

export default Memo;

/*
  ->React Memo is a higher-order component that wraps around a component to memorize the rendered output and avoid unnecessary renderings.
  ->This improves performance because it memorizes the result and skips rendering to reuse the last rendered result.
  ->There are two ways you can wrap your component with React.memo() : shown above via example

  ->Example above:
       In this example, the Todos component re-renders even when the todos have not changed and to fix this we use React Memo. 
       
  ->High order component:
      A higher-order component is a function that takes in a component and returns a new component with added functionality..
      const newComponent = higherFunction/component(WrappedComponent);

  ->useMemo hook vs memo ?
    -Both useMemo and memo are used for performance optimization, but they serve different purposes and are used in different scenarios.
    -useMemo:
      Purpose: Caches the result of a computation between renders.
      Use useMemo to: 1) Avoid expensive calculations on every render.
                      2) Memoize a derived value (like a filtered or sorted array).

      Syntax: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    -memo:
      Purpose: Wraps a React component to prevent unnecessary re-renders when props haven’t changed.
      Use useMemo to: Prevent re-rendering of child components if their props are the same
       Think of it as: "Only re-render this component if its props change
      Syntax:
          const MyComponent = React.memo((props) => {
            return <div>{props.name}</div>;
          });

    ->Summary:
      Feature        	          useMemo	                                   React.memo
      Type	                     Hook       	                     Higher-order component (HOC)
      What it memoizes  	  Computation result	                        Component rendering
      Prevents	        Re-calculating values unnecessarily	       Re-rendering component unnecessarily
      Use inside	            Components	                              Outside component definition
*/
