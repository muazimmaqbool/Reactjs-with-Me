import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

/*
->The useInfiniteQuery hook is used for pagination where data is loaded incrementally as the user scrolls or clicks "Load More" button.

docs:https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery#useinfinitequery
*/

const fetchPosts = async ({ page = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  return res.json();
};
const K_useInfiniteQuery = () => {
  
   //fetchNextPage(): fetches the data of next page
   //hasNextPage: disables the button when no more data is available
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
      getNextPageParam: (lastPage, allPages) => {
        //if the last page has data, return allPages.length + 1 for the next request
        return lastPage.length ? allPages.length + 1 : undefined; // stops if no more data
      },
    });
    console.log("data:",data)
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error fetching data</p>;
  return (
    <div>
      <h4>useInfiniteQuery Example:</h4>
      {data &&
        data.pages.map((page, i) => (
          <div key={i}>
            {page.map((post) => (
              <p key={post.id}>#{post.id} : {post.title}</p>
            ))}
          </div>
        ))}

     <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? "Loading more..." : "Load More"}
      </button>
    </div>
  );
};

export default K_useInfiniteQuery;
