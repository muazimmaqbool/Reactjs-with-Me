import React,{memo} from 'react'

//called from Memo.jsx
const MemoTodo = ({todos}) => {
    console.log("todo render");
    return (
      <>
       <h3>My Todos</h3>
       {
        todos.map((todo,index)=>{
          return <p key={index}>{todo}</p>
        })
       }
      </>
    );
}

export default memo(MemoTodo);

// Now the Todos component only re-renders when the todos that are passed to it through props are updated/changed.