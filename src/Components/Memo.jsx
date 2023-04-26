import React, { useState} from "react";
import MemoTodo from "./MemoTodo";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1", "Todo 2","Todo 3"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <h1>MEMO</h1>
      {/* <Todo todos={todos} /> */}
      {/*using memeo */}
      <MemoTodo todos={todos}/>
      <hr />
      <div>
        count: {count}
        <button
          onClick={increment}
          style={{margin:"5px" }}
        >
          +
        </button>
      </div>
    </>
  );
};

//without using memo
// or const Todo = ({ todos }) => {
function Todo({ todos }) {
    console.log("child render");
  return (
    <>
      <h3>MY TODOs</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}
//When you click the increment button, the Todos component re-renders.
//If this component was complex, it could cause performance issues.

/* Solution
To fix this, we can use memo.
Use memoto keep the Todos component from needlessly re-rendering.
Wrap the To; dos component export in memo:*/
//like this : export default memo(Todos);

//but here we have make this component in the same file so, to see how it works we create another
//component named as TodoMemo.jsx
//Now the Todos component only re-renders when the todos that are passed to it through props are updated.

export default Memo;

/*
-> Using memo will cause React to skip rendering a component if its props have not changed.
    This can improve performance.

->React Memo is a higher-order component that wraps around a component to memoize the rendered output 
  and avoid unnecessary renderings. This improves performance because it memoizes the result and skips 
  rendering to reuse the last rendered result. There are two ways you can wrap your component with 
  React.memo() 

  ->Example above:
       In this example, the Todos component re-renders even when the todos have not changed.   
*/
