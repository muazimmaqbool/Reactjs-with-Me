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
const B_ReactQuery_Ex1 = () => {
    const {data,isLoading,error}=useQuery({
        queryKey:["users"],
        queryFn:fetchUsers,
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