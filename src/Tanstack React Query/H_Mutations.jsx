import React, { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createUser } from "./a_apiCalls";

/*
->Mutations with useMutation (POST, PUT, DELETE requests)
  Mutations are used to modify data on the server (e.g., creating, updating, or deleting resources).
  Need to import this two modules: useMutation and useQueryClient

->Post Request:
  In this example we will create a post request to /user endpoint (see in a_apiCall.js file)
*/
const H_Mutations = () => {
  const [name, setname] = useState("");
  const queryClient=useQueryClient()

  const mutation=useMutation({
    mutationFn:createUser,
    onSuccess:(val)=>{
     // queryClient.invalidateQueries(["users"]);
     console.log("New user added successfully:",val)
    }
  })

  const handleAddUser=(e)=>{
    e.preventDefault()
    mutation.mutate({name})
    setname("")
  }
  return (
    <div>
      <h2>Mutation in React Query</h2>
      <h3>Mutations with useMutation (POST, PUT, DELETE requests)</h3>
      <h4>POST Rquest:</h4>
      <form onSubmit={handleAddUser}>
        <input type="text" placeholder="Enter Users Name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button type="submit">Add User</button>
      </form>
      {mutation.isLoading && <p>Adding user...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>User added successfully!</p>}
    </div>
  );
};

export default H_Mutations;
