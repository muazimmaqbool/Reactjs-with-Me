import { useQueries } from '@tanstack/react-query'
import React from 'react'
import { fetchUsersID } from './a_apiCalls'
/*
->useQueries is a powerful hook from TanStack Query that allows you to run multiple queries in parallel
->The useQueries hook can also be used to fetch a variable number of queries
  example: fetching multiple users via id
*/
const I_useQueriesHook = () => {
  const userIds=[1,2,3,4,5,6]
  const result=useQueries({
    queries:userIds.map((id)=>({
      queryKey:['user',id],
      queryFn:()=>fetchUsersID(id),
      
    })),
    //if you want to combine data (or other Query information) from the results into a single value, you can use the combine option
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })
  // console.log("data:",data)
  return (
    <div>useQueries Hook Example:
      <h4>Users Fetched:</h4>
        <ul>
            {result && result?.data?.map((user)=>(
                <li key={user?.id}>#{user?.id} : {user?.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default I_useQueriesHook