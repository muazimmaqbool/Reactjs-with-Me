import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchUsersID } from "./a_apiCalls";

const G_Pass_ID = () => {
    const [userId, setUserId] = useState(); //For user input
    const [fetchId, setFetchId] = useState(null); // Store ID when button is clicked
  const {
    data: userInfo,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["user", fetchId],
    queryFn: () => fetchUsersID(fetchId),
    enabled: !!fetchId, // Prevent auto-fetch when no ID is provided
  });
  /*
  ->Note: !! is used to convert a value into boolean(true/false)
  (enabled: !!fetchId  // Converts fetchId into true or false)
  ->If fetchId has a valid ID (e.g., 5), !!fetchId becomes true, allowing the query to run.
  ->If fetchId is null, undefined, empty string (""), !!fetchId becomes false, preventing the query from running.
  */
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
 
  const handleFetch=()=>{
    setFetchId(userId); // Trigger fetching only when button is clicked
    refetch()
  }

  /*
  ->Here the problem is if you pass directly userId to query it will run everytime you type any number in input field 
  (i.e:  React Query automatically refetches data when the queryKey changes.)
   so what we want we want to make the API call when button is clicked so that's why another state variable is added
  */
  return (
    <div>
      <h4>Fetching data by ID</h4>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetch} disabled={!userId}>Fetch User Info</button>
      {userInfo && (
        <div>
         <p>User Info of {fetchId}:</p>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Address: {userInfo.address.street}</p>
        </div>
      )}
    </div>
  );
};

export default G_Pass_ID;
