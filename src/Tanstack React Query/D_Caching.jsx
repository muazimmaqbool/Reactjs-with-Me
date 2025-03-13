import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchUsers } from './a_apiCalls';
//Explaing caching in Tanstack React Query

/*
->TanStack React Query automatically caches API responses to improve performance and reduce unnecessary network requests
*/

const D_Caching = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"], //used for re-fetching, caching, and sharing data between components.
    queryFn: fetchUsers, //function typically used to call an API.
    //staleTime: Infinity, //learn about it from below comments
  });
  /*
  react query uses caching via the queryKey, basically it uses this queryKey to create the cache for queryKey which the cache
  is basically the result of the API call, and then its going to show the cache instead of fetching from backend over and over again.
  */

  /*
  Here to see caching behavior, i have added in Button in App.jsx which is going to toggle this component basically unmount and remount
  this component. which is going to recreate every single query
  What's going to happen:
  ->When you mount the component the loading is happening and data is fetched and if you refresh the component the loading is going to
    happen again.
  ->Now if you click on the toggle button the component is unmounted and if click again the component is mounted but no loading
    it will show data directly without loading but the API call will be made (see console)
    Basically react query by default will cache you data for this request and it's going to know to cache the data via the
    queryKey "users" here, and then its going to show you its cached data if it has it. So when you load component first time
    its shows loading it fetches data and caches it and when you unmount the component and mounted it again and this time it shows you
    cached data, but react query will make the request even though its showing you the cached data, it will make a request in the
    backgound and then update your data without being visually obvious and you can see this when you mount this component you
    can see "fetching users..." in console
    ->and this behavior react query does by default it will you show you the cached data if it has it and then its goint to make a
      API request in backgound and then update your data
      ->And you remove this behavior by passing this to useQuery : staleTime:Infinity, this will tell react query that it should never
         consider its data stale, which means the data is still valid and if you do it react query is not going to refetch the data even
         in the background
         after doing this: const { data:users, isLoading, error } = useQuery({
                                                                      queryKey: ["users"],
                                                                      queryFn: fetchUsers,
                                                                      staleTime:Infinity
                                                                    });
        Now if you remount the component you won't see "fetching users..." in the console
    ->if you add: cacheTime:0 , the react query will never cache your data, checkout more from docs
  */

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
  // console.log("data fetched:", users);
  return (
    <div>
      <h2>Caching In React Query</h2>
      <h4>Users Fetched:</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            #{user.id} : {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default D_Caching;
