import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchTodos=async()=>{
    //console.log("API Called...")
    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!response.ok){
        throw new Error("failed to fetch todos list");
    }else{
        return response.json()
    }
}

//Here we will fetch data when the button is clicked
const C_ReactQuery_Ex2 = () => {
    const [isClicked, setisClicked] = useState(false);
    const {data:todos,isLoading,error,refetch}=useQuery({
        queryKey:["todos"],
        queryFn:fetchTodos,
        enabled:isClicked, //prevents automatic fetching
    })
    //console.log("todos fetched:",todos)
    const hanldeClick=()=>{
        setisClicked(true);
        refetch() //allows you to manually trigger a re-fetch of the data
    }
    /*
    ->refetch():
        -It re-runs the query function (queryFn) to fetch the latest data from the server.
        -It does not depend on component re-renders or cache expiration.
        -It is useful when you want to fetch data on demand, such as when a button is clicked.
    */
  return (
    <div>
        <h2>Fetching Data On Button Click</h2>
        <button onClick={hanldeClick}>Fetch Todos</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Eror: {error.message}</p>}
        {todos && todos.length>0 && <ul>
            {todos.map((todo)=>(
            <li key={todo.id}>#{todo.userId}{todo.title}</li>
        ))}
            </ul>}
    </div>
  )
}

export default C_ReactQuery_Ex2