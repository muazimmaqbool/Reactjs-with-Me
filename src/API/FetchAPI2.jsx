import React, { useState, useEffect } from "react";

//this is called from APP.jsx
const FetchAPI2 = () => {
  return (
    <>
      <CatFacts />
      <CatFacts2 />
      <GetComments/>
    </>
  );
};
const url = "https://catfact.ninja/fact";
function CatFacts() {
  const [fact, setFact] = useState([]);
  const getFacts = async () => {
    const response = await fetch(url);
    const result = await response.json();
    return setFact(result);
  };
  useEffect(() => {
    console.log("running");
    getFacts();
  }, []);
  return (
    <h1>{fact.fact}</h1>
  );
}

//this function shows different cat facts after some time
const CatFacts2 = () => {
  const [catFact, setCatFact] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        return setCatFact(result);
      } catch (error) {
        console.error(error);
      }
    }, 3000);
  });

  return (
    <>
      <h4>New Fact about cats appear after every 3 seconds</h4>
      <h3>{catFact.fact}</h3>
    </>
  );
};

//getting comments
const GetComments=()=>{
  const url ='https://jsonplaceholder.typicode.com/comments';
  const[comment,setComment]=useState([]);
  const getCom=async()=>{
    const response=await fetch(url);
    const result=await response.json();
    return setComment(result);
  }
  useEffect(()=>{
    getCom();
  },[])
  // console.log(comment)
  return(
    <>
     <p>Comments and Email</p>
     <div>
      {
        //shows only first 10 comments from 0 index to 10
        //inside return we have c.body.substring(0,25): it will show only from 25 characters of each comment string rather than showing full long comment
        comment.slice(0,10).map((c)=>{
          return(
            <h5 key={c.id}>{c.body.substring(0,25)}<br/> by {c.email}</h5>
          )
        })
      }
     </div>
    </>
  )
}



//for more see API's in javascript

export default FetchAPI2;

//using async-await its good way to use async-await on fetch
