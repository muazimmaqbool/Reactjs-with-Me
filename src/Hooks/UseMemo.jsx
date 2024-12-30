import React, { useMemo, useState } from 'react'

//Read Documentation Below:
const UseMemo = () => {
  return (
    <>
     {/* <ExampleMemo/> */}
     <MemoExample/>
    </>
  )
}

//Example One
const ExampleMemo=()=>{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //const calculation=expensiveCalculation(count); // using without memo will make it little slow
    
    //we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
    //We can wrap the expensive function call with useMemo:
     const calculation=useMemo(()=>expensiveCalculation(count),[count]);
    //useMemo also accepts second parameter its dependencies and this means it will only run when the
    //dependencie changes so here expensiceCalculation function will only run/render when count changes and 
    //not when todo's change, without using useMemo it would have run on both


    const increment=()=>{
        setCount((c)=>c+1);
    }
    const addTodo=()=>{
        setTodos((t)=>[...t, "New Todo"]);
    }
    return(
        <>
            <div>
                <h3>My Todos</h3>
                {todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>ADD TODO</button>
            </div>
            <hr/>
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
                <h4>Expensive Calculation</h4>
                {calculation}
            </div>
        </>
    )
}

const expensiveCalculation=(num)=>{
    console.log("Calculating...");
    for(let i=0; i<=1000000000; i++){
        num+=1;
    }
    return num;
};

//Note: use useMemo only when you actually need the performance benefits and when you are calling
//a slow function or fetching some data using API

//Example Two
const MemoExample =()=>{
    const[number,setNumber]=useState(0);
    const[dark,setDark]=useState(false);
    //const doubleNumber=slowFunction(number); 
    const doubleNumber=useMemo(()=>{
        return slowFunction(number)
    },[number]) 
    //slowFunction will run only when number changes and not theme

    //Note: if we don't call slowFunction via useMemo then it will also run when theme is changed

    const themeStyles={
        backgroundColor:dark ? 'black' : 'white',
        color:dark ? 'white' : 'black'
    }
    return(
        <>
        {/* parseInt converts/parses a string to integer */}
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
        <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>Double of input number is: {doubleNumber}</div>
        </>
    )
}
function slowFunction(num){
    console.log('calling slowFunction');
    for(let i=0; i <= 1000000000000000000000000000000; i++){ //using 100000000 makes this function slow
        return num*2
    }
}

export default UseMemo
/*
Intro of useMemo Hook in react:

-> React useMemo Hook
    The React useMemo Hook returns a memoized value.
    Think of memoization as caching a value so that it does not need to be recalculated.

    The useMemo Hook only runs when one of its dependencies updated.
    This can improve performance.
->What is the benefit of using useMemo Hook?
    Fundamentally, useMemo and useCallback are tools built to help us optimize re-renders. 
    They do this in two ways: Reducing the amount of work that needs to be done in a given render.
    Reducing the number of times that a component needs to re-render.
->Performance
    The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
    In this example, we have an expensive function that runs on every render.
    When changing the count or adding a todo, you will notice a delay in execution.
    and to overcome this we use useMemo hook:
    ->To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
        We can wrap the expensive function call with useMemo.
        The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
        In the following example, the expensive function will only run when count is changed and not when todo's are added.

*/