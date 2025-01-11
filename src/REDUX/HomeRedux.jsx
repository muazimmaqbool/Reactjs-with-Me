import React from "react";
import { useDispatch ,useSelector} from "react-redux";
//useDispatch is used to dispatch/trigger/call the action
//useSelector is used to access value from the state

const HomeRedux = () => {
    //const value=20; this is added to store.js (watch at 13:11) video link: https://www.youtube.com/watch?v=pBgQhZcQxMw&t=343s
    
    const {c}=useSelector(state=>state.custom) // we can access this value in any component lets access this value in app.jsx
    // or  const c=useSelector(state=>state.custom.c)

    const dispatch=useDispatch(); //make sure its inside component

    const addBtn=()=>{
        dispatch({
            type:"increment",
        });
    };
    const subBtn=()=>{
        dispatch({
            type:"decrement",
        });
    };

    const incByValue=()=>{
        dispatch({
            type:"incrementByValue",
            payload:10
        })
    }

    const decByValue=()=>{
        dispatch({
            type:"decrementByValue",
            payload:10
        })
    }

  return (
    <>
      <h3>Inside HomeRedux.jsx, c= {c}</h3>
      <button onClick={addBtn}>Increment</button>
      <button onClick={incByValue}>increment by 10</button>
      <button onClick={subBtn}>Decrement</button>
      <button onClick={decByValue}>decrement by 10</button>
    </>
  );
};

export default HomeRedux;

/*
-> See Notes for Redux and Redux-toolkit and video

    -> const value=20; //need to store this value in store somewhere so that it can be accessible throughout the project
       for that make seperate file store.jsx or store.js and will save this value there

*/
