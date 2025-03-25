import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addPost, fetchPosts, fetchTags } from "../API/api";
import styles from "../projectStyles.module.css";

//called from MainPage.jsx
const PostList = () => {
  const {data: postData,isLoading,isError,error} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  //getting tags
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  //adding a new post by making a POST request
  //mutate function which it returns is important, we will be calling it to make the POST request
  const queryClient = useQueryClient();
  const {mutate, isError: isPostError, isPending, error: postError,reset} = useMutation({
    mutationFn: addPost,
    onMutate: () => {
      return { id: 1 };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true, //so that it can only invalidate the above query which contains "posts"
        //predicate:(query)=>query.queryKey[0]==="posts" && query.queryKey[1].page>=2,
        //so here you can say which query to be invalided, so here "posts" and all the pages more than 2 will be invalidated
      });
    },
    onError: (error, variables, context) => {
      console.log("onError:", error);
    },
    onSettled: (data, error, variables, context) => {},
  });
/*
  here: onMutate runs before this actual mutation happens i.e before the function call
       onSuccess runs after the mutation happens i.e after function call runs successfully
      
       ->inside onSuccess: data : data which has been returned after API call
                           variables: data/variables that we provided to the mutate(parameters provided to the function call)
       ->inside onMutate we are returning id:1 , this will go directly inside context of onSuccess


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
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if (!title || !tags) return;
    //console.log("title:",title)
    //console.log("tags:",tags)
    mutate({ id: postData.length + 1, title, tags });
    e.target.reset(); //to reset the form
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
      {isPostError && <p onClick={()=>reset()}>Unable to Post</p>}
      {postData && postData.length > 0 &&
        postData.map((post) => {
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
