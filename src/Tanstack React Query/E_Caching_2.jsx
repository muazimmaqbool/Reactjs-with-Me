import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchUsers = async () => {
  console.log("Fetching users...");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("failed to fetch users");
  } else {
    return response.json();
  }
};

//Note:first see previous code D_Caching.jsx (important)
const E_Caching_2 = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"], //used for re-fetching, caching, and sharing data between components.
    queryFn: fetchUsers, //function typically used to call an API.

    //1-> staleTime (Avoid Unnecessary Refetching - Controls how long data is considered "fresh" before React Query refetches it.)
    //staleTime: Infinity, //React query will never refetch the data
    //staleTime: 5000, // Data stays fresh for 5 seconds, after 5 seconds if component remounts data is fetched in background
    //staleTime: 5 * 60 * 1000 // 5 minutes : now, within 5 minutes, React Query won't refetch if the same query is used.

    //2->  2. cacheTime (Keep Data in Memory - Controls how long inactive data stays in the cache before being removed.)
    //Default: 5 minutes (300,000ms)
    //cacheTime: 10 * 60 * 1000 // 10 minutes: React Query keeps it in memory for 10 minutes before garbage collecting.

  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
  // console.log("data fetched:", users);
  return (
    <div>
      <h2>Caching In React Query</h2>
      <h4>Users Fetched:</h4>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            #{user.id} : {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default E_Caching_2;
