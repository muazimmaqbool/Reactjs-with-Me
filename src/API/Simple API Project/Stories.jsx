import React, { useEffect } from 'react'

const Stories = () => {
  let isLoading=true; //used to show loading till data is fetched

  let Api="https://hn.algolia.com/api/v1/search?query=html";

  const fetchAPIdata=async (url)=>{
    try {
      const reponse=await fetch(url);
      const data=await reponse.json();
      console.log(data);
      isLoading=false;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAPIdata(Api);
  })

  if(isLoading){
    return(
      <>
      <h2>Loading...</h2>
      </>
    )
  }

  return (
    <>
      <h1>My Tech News Post</h1>
    </>
  )
}

export default Stories