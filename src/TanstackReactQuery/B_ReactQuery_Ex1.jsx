import React from 'react'
import { useQuery } from '@tanstack/react-query'

//Checkout previous component first
//Example One Tanstack React Query

//api call
const fetchUsers=async()=>{
    //console.log("Fetching users...")
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error("failed to fetch users")
    }else{
        return response.json()
    }
}

//Documentation of useQuery: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#usequery
const B_ReactQuery_Ex1 = () => {
    //we can change the name of data like this: data:users, also for others as well: isLoading:loading
    //Note: queryKey is the unique key that you provide to each and every query so we can identify it uniquely
    const {data,isLoading,error}=useQuery({
        queryKey:["users"], //used for re-fetching, caching, and sharing data between components.
        queryFn:fetchUsers,//async function typically used to call an API.
    })
    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error:{error.message}</p>
    console.log("data fetched:",data)
  return (
    <div>
        <h2>Example One Of React Query</h2>
        <h4>Users Fetched:</h4>
        <ul>
            {data.map((user)=>(
                <li key={user.id}>#{user.id} : {user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default B_ReactQuery_Ex1