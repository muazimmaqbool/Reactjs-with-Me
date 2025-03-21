import { useQuery,useQueryClient } from "@tanstack/react-query";
import React from "react";
import { fetchUsers } from './a_apiCalls';
/*
(important)
->What Happens When You Fetch Data?
    When you call useQuery(), React Query:
    1- Checks the Cache:
        If the data is already in cache and fresh, it returns cached data (avoiding an API call).
        If the data is stale or not in cache, it fetches from the API.

    2- Stores the Data in the Cache
        The response is saved in memory using a unique queryKey.
        Next time the same queryKey is requested, React Query returns cached data instantly.


->Cache Lifetime & Stale Time (important)
    React Query caches data but follows a lifecycle:
    Phase	                               Behavior
    Fresh	                 Data is served instantly from the cache. No API request.
    Stale (default)	         Data is shown from cache, but a background refetch happens.
    Inactive	             Data is removed from memory after some time (garbage collected).
    Expired	                 Data is fully deleted from the cache.

*/

//Note:first see previous code D_Caching.jsx (important)
const E_Caching_2 = () => {
    const queryClient = useQueryClient();
  const { data, isLoading, error,refetch, } = useQuery({
    queryKey: ["users"], //used for re-fetching, caching, and sharing data between components.
    queryFn: fetchUsers, //function typically used to call an API.
    
    //1-> staleTime (Avoid Unnecessary Refetching - Controls how long data is considered "fresh" before React Query refetches it.)
    staleTime: Infinity, //React query will never refetch the data
    //staleTime: 5000, // Data stays fresh for 5 seconds, after 5 seconds if component remounts data is fetched in background
    //staleTime: 5 * 60 * 1000 // 5 minutes : now, within 5 minutes, React Query won't refetch if the same query is used.

    //2-> Refetching & Updating Cache (React Query automatically refetches in these cases:)
    //A: On Window Focus (Default - When you return to a tab, it refetches data) (important)
    refetchOnWindowFocus: false, //default is true (no when you change the tab/window it won't fetch again)

    //B:On Interval (refetchInterval)
    //refetchInterval: 10000 // 10 seconds (fetches data in every 10 seconds)
  });
   //C:Manually Triggering Refetch (refetch() forces a fresh API request)
    /*const { refetch } = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
     <button onClick={() => refetch()}>Refetch</button>;*/

     //4-> Query Invalidation (Force Cache Update)
     //If data changes, you can invalidate the cache to force a refetch
     const updateUsers = async () => {
        //await addNewTodo(); // Assume this updates the backend
        queryClient.invalidateQueries(["users"]); // Refetch users
    };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
  // console.log("data fetched:", users);
  return (
    <div>
      <h2>Caching In React Query More</h2>
      <h4>Users Fetched:</h4>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            #{user.id} : {user.name}
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch</button>
      <button onClick={updateUsers}>Invalidate Cache</button>
    </div>
  );
};

export default E_Caching_2;
