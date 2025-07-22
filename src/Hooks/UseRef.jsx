import React, { useEffect, useState,useRef } from 'react'

//Read Documentation Below
const UseRef = () => {
  return (
    <>
      <Example1/>

      {/*Accessing DOM Elements */}
      {/* <Example2/>  */}

      {/*Tracking State Changes: track of previous state values */}
      {/* <Example3/>  */}
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
    console.log("renderCount:",renderCount) // o/p: {current: 0}, 1,2,...
    useEffect(()=>{
        renderCount.current=renderCount.current+1
        //so when i change the value in input, it will never cause our component to re-render because it's completely
        //seperate from our components render cycle
    },)
    return(
        <>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <div>My name is {name}</div>

        {/*showing number of times component rendered */}
        <div>I render {renderCount.current} times</div>
        </>
    )
}

//Accessing DOM Elements: using useRef to focus the input:
//In React, we can add a ref attribute to an element to access it directly in the DOM.
function Example2(){
    const inputElement=useRef();
    
    const getFocus=()=>{
        inputElement.current.focus();
    }

    const pTag=useRef();
    console.log("pTag:",pTag) 
    const updateColor=()=>{
        pTag.current.style.color="teal";
    }
    
    const resetP=()=>{
        pTag.current.style.color="black";
        pTag.current.style.fontSize="1rem"
    }
    return(
        <>
            <input type="text" ref={inputElement} />
            <button onClick={getFocus}>Focus Input</button>

            {/* changing color of p tag */}
            <p ref={pTag}>Hey change my color</p>
            <button onClick={updateColor}>Change Color</button>
            <button onClick={()=>pTag.current.style.fontSize="2rem"}>Change Size</button>
            <button onClick={resetP}>Reset P Tag</button>
        </>
    )
}

//example 3
//Tracking State Changes: track of previous state values
function Example3(){
    const [item,setItem]=useState('');
    const previousItem=useRef()

    useEffect(()=>{
        console.log("called")
        previousItem.current=item
        //console.log("previous item:",previousItem)
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
    It can be used to access a DOM elements directly.
    Refs doesn't cause your component to re-update/re-render when it gets changed

->useRef() only returns one item. 
            It returns an Object called current.
            When we initialize useRef we set the initial value: useRef(0);
    ->It's like doing this: const count = {current: 0}. We can access the current by using count.current.
    

->When to use useRef() instead of useState():
    A rule of thumb is to use useState when you need to re-render the component when the 
    state changes and useRef when you don't need to re-render the component when the state changes.

->Accessing DOM Elements (important): 
    In general, we want to let React handle all DOM manipulation.
    But there are some instances where useRef can be used without causing issues.
    In React, we can add a ref attribute to an element to access it directly in the DOM
    code in : Example 2

->Basically we use useRef hook to store those things which are not related to the render and for things which are related to the
    render use useState hook.
    ->const refName=useRef(initial value)
     ->refName is the refrence object and this refrence object have current property i.e refName.current
     ->you can read and also change this current property
     ->and by changing this current property nothing will re-render 
     ->main job of reference is to give reference to DOM example <input ref={refName}/> now you will have direct access to the real DOM
        now with refName.current you can update/change the input element in DOM like scroll, focus etc
        exmaple: refName.current.focus(), refName.current.scroll(),etc...

Note: always do your management like updating value/setting value to variable using useState/props

To Understand it clearly with real example checkout this article: https://muazim.substack.com/p/understanding-useref-in-react


*/