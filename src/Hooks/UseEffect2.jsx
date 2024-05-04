import React, { useState , useEffect } from "react";

const UseEffect2 = () => {
  const[a, setA] = useState(0); 

  useEffect(()=>{
    console.log("use effect runs")

    //return runs only when component is unmounted
    // return ()=>{
    //     console.log()
    // }
  },[]) //it runs also on when value of a changes
         // use effect runs is printed on console everytime we change value of a
         // if [] used then use effect runs is only printed one
         // if [] is not used then it runs infinitly
  return (
    <>
      <div>
        <button onClick={() => setA(a + 1)}>ADD</button>
        <p>{a}</p>
        <button onClick={() => setA(a - 1)}>Minus</button>
      </div>

      <Counter/>
    </>
  );
};

//example2
function Counter(){
  const[count,setCount]=useState(0);
  const[cal,setCal]=useState(0);

  useEffect(()=>{
    console.log("runs") //prints only when count value changes and when its loaded
    setCal(()=>count*2);
  },[count]) //runs when value of count changes and that changes when we click on + button

  return(
    <>
     <p>Count: {count}</p>
     <button onClick={()=>setCount((c)=>c+1)}>+</button>
     <p>{count} * 2 = {cal}</p>
    </>
  )
}

export default UseEffect2;
/*
 -> in useEffect when we give it dependency [] it means run only once
  and [a,b] : runs whenever value of a or b changes
 */
