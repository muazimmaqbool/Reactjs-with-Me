import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addPost, fetchPosts, fetchPostsByPage, fetchTags } from "../API/api";
import styles from "../projectStyles.module.css";

//called from MainPage.jsx
const PostList = () => {
  const [page, setpage] = useState(1);
  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    //queryKey: ["posts"],
    //queryFn: fetchPosts,
    //pagination:
    //Now it will cache the data with respect to the page number, so each page will have separate query
    queryKey: ["posts", page], //or queryKey:["posts",{page}]
    queryFn: () => fetchPostsByPage(page),
    //staleTime: 1000 * 60, //will fetch every 1 minute, when page is loaded again after 1 minute
    staleTime:1000*60*5 //5 minutes
  });
  //when fetching posts via pagination, the postData contains many things
  //console.log("postData:", postData);
  /*
  o/p: data: (5) [{…}, {…}, {…}, {…}, {…}]
      first: 1
      items: 17
      last: 4
      next: 2, //means there is 2 page and if it's null then no next page
      pages: 4
      prev: null, //means no previous page, if prev:1 //then there is a previous page
  */

  //? see infinite scrolling: https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery#useinfinitequery
  //? also explore useQueries, used to fetch multiple queries: https://tanstack.com/query/latest/docs/framework/react/reference/useQueries#usequeries

  //see more options from docs and from files of TanstackReactQuery folder

  //getting tags
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity, //it will not refetch the data again and again
    //gcTime:0, //will never cache the data, even tough staleTime is infinity
  });

  //adding a new post by making a POST request
  //mutate function which it returns is important, we will be calling it to make the POST request
  const queryClient = useQueryClient();
  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset, //used to clean the mutation internal state (i.e., it resets the mutation to its initial state)/like clearing error etc.
  } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
      return { id: 1 };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"], //it will refetch the data for this query key
        //or queryKey:["posts",{page:1}], //it will invalidate only the page 1 of posts query key
        exact: true, //so that it can only invalidate the above query which contains "posts"
        //predicate:(query)=>query.queryKey[0]==="posts" && query.queryKey[1].page>=2,
        //so here you can say which query to be invalided, so here "posts" and all the pages more than 2 will be invalidated
      });
    },
    onError: (error, variables, context) => {
      console.log("onError:", error);
    },
    onSettled: (data, error, variables, context) => {
      // console.log("data:", data); //data it returns
      //console.log("variables:", variables); //data we provide
    },
  });
  /*
  here: onMutate runs before this actual mutation happens i.e before the function call
       onSuccess runs after the mutation happens i.e after function call runs successfully
      
       ->inside onSuccess: data : data which has been returned after API call
                           variables: data/variables that we provided to the mutate(parameters provided to the function call)
       ->inside onMutate we are returning id:1 , this will go directly inside context of onSuccess

       Note: Mostly only onSuccess and onError is used

  ->queryClient.invalidateQueries({
        queryKey:["posts"]
      }) : will invalidate the query key we provided basically it will refetch the data for this query key
       
       Note: exact and predicate are optional although they can be useful in some cases
       predicate is not that much frequently used

       ->onError: this takes an function and runs if the error happens
       ->onSettled: it runs now matter what is result of API call

 */

  const hanldeSubmit = (e) => {
    e.preventDefault();
    //console.log("e.target:",e.target)
    const formData = new FormData(e.target);
    const title = formData.get("title"); //here "title" is name of input field
    /*
    Array.from : creates an array from an iterable object i.e it will create an array from fromData objects
                 here formData.keys() will contain basically checkboxes
    -Basically checkbox has two properties on and off, on means its checked
    */
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if (!title || !tags) return;
    //console.log("title:",title)
    //console.log("tags:",tags)

    //we give it title and tags because inside data.json posts contain id, title and tags
    mutate({ id: postData.length + 1, title, tags });
    {
      /* use postData.length when not using pagination
      use postData?.data.length when using pagination */
    }

    e.target.reset(); //it resets the mutation
  };
  return (
    <div className={styles.container}>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          placeholder="Enter Your Post..."
          className={styles.postbox}
          name="title"
        />
        <div className={styles.tags}>
          {tagsData &&
            tagsData.length > 0 &&
            tagsData.map((tag) => {
              return (
                <div key={tag}>
                  <input name={tag} id={tag} type="checkbox" />
                  {/* htmlFor={tag} means this label is linked to the element with id tag i.e here its input with type checkbox */}
                  <label htmlFor={tag}>{tag}</label>
                </div>
              );
            })}
        </div>
        <button type="submit">POST</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}

      {isPending && <p>Posting...</p>}
      {isPostError && <p onClick={() => reset()}>Unable to Post</p>}

      {/* paging from 32:10 */}
      <div className={styles.pages}>
        {/*including 0 in Math.max to make sure it will not go beyond 0 */}
        <button
          onClick={() => setpage((prevPage) => Math.max(prevPage - 1, 0))}
          disabled={postData?.prev===null}
        >
          Previous Page
        </button>
        <span>{page}</span>
        <button
          onClick={() => setpage((prevPage) => prevPage+1)}
          disabled={postData?.next===null}
        >
          Next Page
        </button>
      </div>

      {/* use postData.map(..) when not using pagination and postData.length
      use postData?.data.map(..) when using pagination and postData.data.length */}
      {postData &&
        postData?.data?.length > 0 &&
        postData?.data?.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <div>{post.title}</div>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
