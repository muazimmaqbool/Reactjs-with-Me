import React, { useEffect, useState,useRef } from 'react'

const UseRef = () => {
  return (
    <>
      <Example1/>
      <Example2/> {/*Accessing DOM Elements */}
      <Example3/> {/*Tracking State Changes: track of previous state values */}
    </>
  )
}

const Example1=()=>{
    const [name,setName]=useState('');
    /*
    If we tried to count how many times our application renders using the useState Hook, 
    we would be caught in an infinite loop since this Hook itself causes a re-render.
    To avoid this, we can use the useRef Hook.
    */
    const renderCount=useRef(0);
    useEffect(()=>{
        renderCount.current=renderCount.current+1
        //so when i change the value in input, it will never cause our component to re-render because it's completely
        //seperate from our component render cycle
    })
    return(
        <>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <div>My name is {name}</div>

        {/*showing number of times component rendered */}
        <div>I render {renderCount.current} times</div>
        </>
    )
}

//Accessing DOM Elements example: Use useRef to focus the input:
//In React, we can add a ref attribute to an element to access it directly in the DOM.
function Example2(){
    const inputElement=useRef();
    const getFocus=()=>{
        inputElement.current.focus();
    }
    return(
        <>
            <input type="text" ref={inputElement} />
            <button onClick={getFocus}>Focus</button>
        </>
    )
}
//example 3
//Tracking State Changes: track of previous state values
function Example3(){
    const [item,setItem]=useState('');
    const previousItem=useRef()

    useEffect(()=>{
        previousItem.current=item
    },[item])
    return(
        <>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            <div>current item {item}</div>
            <div>Previous Item is {previousItem.current}</div>
        </>
    )
}

export default UseRef

/*
->React useRef Hook:
    Used when you don't want to re-render the component when state changes
    It can be used to access a DOM element directly.
    Refs doesn't cause your component to re-update when it gets changed

->useRef() only returns one item. It returns an Object called current.
            When we initialize useRef we set the initial value: useRef(0);
    ->It's like doing this: const count = {current: 0}. We can access the count by using count.current.
    

->When to use useRef() instead of useState()
    A rule of thumb is to use useState when you need to re-render the component when the 
    state changes and useRef when you don't need to re-render the component when the state changes.

->Accessing DOM Elements: 
        In general, we want to let React handle all DOM manipulation.
        But there are some instances where useRef can be used without causing issues.
        In React, we can add a ref attribute to an element to access it directly in the DOM
        code in : example2

Note: always do your management like updating value/setting value to variable usng ref do it using useState/props

*/