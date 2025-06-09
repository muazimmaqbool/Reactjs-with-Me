import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {fetchUsers,fetchTodos} from "./a_apiCalls"
/*
->You can have multiple queryKeys in React Query inside a single component. 
  Each unique queryKey represents a separate piece of cached data.

->How Multiple queryKeys Work:
    Each queryKey stores its own cached data separately.
    Different keys prevent data from overlapping.
    If the same queryKey is used in multiple places, React Query shares the cached data.
*/

const F_MultipleQueries = () => {
    const{data:users,isLoading:loadingUsers}=useQuery({
        queryKey:["users"],
        queryFn:fetchUsers,
        refetchOnWindowFocus:false, //will not refetch the data when window/tab is changed
    })
    const{data:todos}=useQuery({
        queryKey:["todos"],
        queryFn:fetchTodos,
        refetchOnWindowFocus:false, //will not refetch the data when window/tab is changed
    })
    if(loadingUsers) return <p>Loading Users...</p>;

    //["todos"] and ["users"] store separate data. (React Query will not mix their responses.)
  return (
    <div>
        <h4>Multiple Query Keys</h4>
        <h4>Users Fetched:</h4>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>#{user.id} : {user.name}</li>
            ))}
        </ul>
        <p>*************************</p>
        <h4>Todos Fetched:</h4>
        <ul>
            {todos.slice(0,10).map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default F_MultipleQueries