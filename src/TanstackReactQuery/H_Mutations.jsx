import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, fetchUsers } from "./a_apiCalls";

/*
->Mutations with useMutation (POST, PUT, DELETE requests)
  Mutations are used to modify data on the server (e.g., creating, updating, or deleting resources).
  Need to import these two modules: useMutation and useQueryClient

->Post Request:
  In this example we will create a post request to /user endpoint (see in a_apiCall.js file)
*/
const H_Mutations = () => {
  const [name, setname] = useState("");
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const [newUser, setnewUser] = useState();//used to save api response
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["users"]);
      console.log("New user added successfully:", res);
      setnewUser(res);
    },
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
    setname("");
  };
  return (
    <div>
      <h2>Mutation in React Query</h2>
      <h3>Mutations with useMutation (POST, PUT, DELETE requests)</h3>
      <h4>POST Rquest:</h4>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Enter Users Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <h4>Users Fetched:</h4>
      <ul>
        {data &&
          data.map((user) => (
            <li key={user.id}>
              #{user.id} : {user.name}
            </li>
          ))}
        {newUser && (
          <li>
            #{newUser.id} : {newUser.name}
          </li>
        )}
      </ul>
      {mutation.isLoading && <p>Adding user...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>User added successfully!</p>}
    </div>
  );
};

export default H_Mutations;
