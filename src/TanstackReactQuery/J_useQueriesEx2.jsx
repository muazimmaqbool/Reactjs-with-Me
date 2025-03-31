import { useQueries } from "@tanstack/react-query";
import React from "react";
import { fetchTodos, fetchUsers } from "./a_apiCalls";

const J_useQueriesEx2 = () => {
  const result = useQueries({
    queries: [
      { queryKey: ["users"], queryFn: fetchUsers, staleTime: Infinity },
      { queryKey: ["todos"], queryFn: fetchTodos, staleTime: Infinity },
    ],
  });
  const [ usersQuery, todosQuery ] = result;
  if (usersQuery?.isLoading || todosQuery?.isLoading) return <p>Loading...</p>;
  if (usersQuery?.isError) return <p>Error: {usersQuery.error.message}</p>;
  return (
    <div>
      <h4>useQueries Hook Example Two:</h4>
      {usersQuery && (
        <>
          <h2>Users</h2>
          {usersQuery?.data?.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </>
      )}

      {todosQuery && (
        <>
          <h2>Posts</h2>
          {todosQuery?.data?.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default J_useQueriesEx2;
