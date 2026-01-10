import React, { memo, useState } from 'react'

//React.memo is already studied inside Componnets folder > Memo.jsx
/*
React.memo is a higher-order component (HOC) used to optimize the performance of react functional components by preventing unnecessary re-renders. 
It works by memoizing (caching) the rendered output of the component and reuses it if its input props haven't changed

->React.memo stops re-render when props don’t change.
*/

//➡️ Without memo
// const Child=({count})=>{
//     console.log("Child component renders...")
//     return <p>Count: {count}</p>
// }
//➡️ With memo
const Child=memo(({count})=>{
    console.log("Child component renders...")
    return <p>Count: {count}</p>
})
//if Child component would have been in different file then use memo like this: export default memo(MemoTodo); 
const WithMemo = () => {
    const [value, setvalue] = useState(0);
  return (
    <div>
        <h2>Optimizing react app with React.memo</h2>
        <button onClick={()=>setvalue(value+1)}>+</button>
        <p>Value:{value}</p>
        {/* here when React.memo is not used on Child component and when '+' button is clicked then Child component renders even when it's prop is not changed */}
        {/* when React.memo is used on Child component the Child component will not render when '+' button is clicked as prop to Child didn't change*/}
        <Child count={10}/>

        {/*If you pass 'value' to 'Child' component like this:  <Child count={10}/>, then it will render on whenever value changes via '+' button */}
    </div>
  )
}

export default WithMemo