import React, { useState,useEffect } from 'react'

const UseEffect3 = () => {
  return (
    <>
        <AppExample/>
        <GetWidth/>
    </>
  )
}

//useEffect is basically used perform some side effect operations whenever something happens
function AppExample(){
    const[srcType,setSrcType]=useState('posts')
    //useEffect takes an function now whatever we write inside this arrow function is going to be
    //executed every single time our application/component renders
    //it also takes second parameter as array (whatever you pass into this array is going to be values that 
    // whenever they change your hook is going to run
    useEffect(()=>{
        console.log("resource changed");

        //cleanup code
        return ()=>{
            console.log('return from resource change')
        }
    },[srcType])
    // ,[] runs only once
    // ,[srcType] runs whenever srcType changes
    // note: inside array[] we put those values, when they change the useEffect hooks runs

    return(
        <>
            <div>
            <button onClick={()=>setSrcType('posts')}>Posts</button>
            <button onClick={()=>setSrcType('users')}>Users</button>
            <button onClick={()=>setSrcType('comments')}>comments</button>
            </div>
            <h1>{srcType}</h1>
        </>
    )
}

//example: modifying the variable based on the width of the window that we have open
function GetWidth(){
    const[winWidth,setWidth]=useState(window.innerWidth); //window.innerWidth : is used to get width of window
    
    useEffect(()=>{
        window.addEventListener('resize',handleWidth)

        //cleanup code , this function is going to called whenever this useEffect is removed/cleaned
        return ()=>{
            window.removeEventListener('resize',handleWidth)
        }
        
    },[]) //this will happen only on onMount i.e on run

    const handleWidth=()=>{
        setWidth(window.innerWidth)
    }
    //now the value of width will update dynamically at runtime
    return(
        <>
        <h2>{winWidth}</h2>
        </>
    )
}
//Note always add cleanup code to useEffect means removing useEffect

export default UseEffect3