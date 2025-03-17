import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from '../API/api'
import styles from "../projectStyles.module.css"

//called from MainPage.jsx
const PostList = () => {
  const {data:postData,isLoading,isError,error}=useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts
  })
  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {postData && postData.length>0 && postData.map((post)=>{
        return <div className={styles.post} key={post.id}>
          <div>{post.title}</div>
          {post.tags.map((tag)=><span key={tag}>{tag}</span>)}
        </div>
      })}

    </div>
  )
}

export default PostList