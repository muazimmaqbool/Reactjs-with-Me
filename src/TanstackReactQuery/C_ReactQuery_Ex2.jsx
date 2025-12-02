import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from './a_apiCalls';

//Here we will fetch data when the button is clicked
const C_ReactQuery_Ex2 = () => {
    const [isClicked, setisClicked] = useState(false);
    //useQuery returns bunch of things, checkout here: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#usequery
    const {data:todos,isLoading,error,refetch,isError,status}=useQuery({
        queryKey:["todos"],
        queryFn:fetchTodos,
        enabled:isClicked, //prevents automatic fetching
    })
    //console.log("todos fetched:",todos)
    const hanldeClick=()=>{
        setisClicked(true);
        refetch() //allows you to manually trigger a re-fetch of the data
    }
    console.log("data:",todos)
    console.log("isLoading:",isLoading)
    console.log("isError:",isError)
    console.log("status:",status)
    //make some changes in API calls url like /todos to /todoos , then see the console
    /*
    ->refetch():
        -It re-runs the query function (queryFn) to fetch the latest data from the server.
        -It does not depend on component re-renders or cache expiration.
        -It is usefull when you want to fetch data on demand, such as when a button is clicked.
    */
  return (
    <div>
        <h2>Fetching Data On Button Click</h2>
        <button onClick={hanldeClick}>Fetch Todos</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Eror: {error.message}</p>}
        {todos && todos.length>0 && <ul>
            {todos.map((todo)=>(
            <li key={todo.id}>#{todo.userId} {todo.title}</li>
        ))}
            </ul>}
    </div>
  )
}

export default C_ReactQuery_Ex2