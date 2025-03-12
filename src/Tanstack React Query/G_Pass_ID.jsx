import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchUsersID } from "./a_apiCalls";

const G_Pass_ID = () => {
    const [userId, setUserId] = useState();
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
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;
 
  const handleFetch=()=>{
    setFetchId(userId); // Trigger fetching only when button is clicked
    refetch()
  }
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
         <p>User Info of {userId}:</p>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Address: {userInfo.address.street}</p>
        </div>
      )}
    </div>
  );
};

export default G_Pass_ID;
