import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { addPost, fetchPosts } from "../API/api";
import styles from "../projectStyles.module.css";

//called from MainPage.jsx
const PostList = () => {
  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  //getting tags

  //adding a new post by making a POST request
  //mutate function which it returns is important, we will be calling to make the POST request
  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addPost,
  });
  return (
    <div className={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Enter Your Post..."
          className={styles.postBox}
          name="title"

        />
        
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {postData &&
        postData.length > 0 &&
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
