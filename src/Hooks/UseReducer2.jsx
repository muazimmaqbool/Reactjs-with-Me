import React, { useState,useReducer } from 'react'

const UseReducer2 = () => {
  return (
    <Example1/>
  )
}
function reducer(state,action){
    if(action.type==='increment-task'){
        return{
            task:state.task+1
        }
    }else{
        return{
            task:state.task-1
        }
    }
}
//useReducer Example of increment Task
const Example1=()=>{
    const[state,dispatch]=useReducer(reducer,{task:1})

    function addTask(){
        dispatch({type:'increment-task'})
    }
    return(
        <>
        <button onClick={addTask}>ADD TASK</button>
        <p>Pending Tasks:{state.task}</p>
        <button onClick={()=>{
            dispatch({type:'decrement-task'})
        }}>Remove TASK</button>
        </>
    )
}

export default UseReducer2