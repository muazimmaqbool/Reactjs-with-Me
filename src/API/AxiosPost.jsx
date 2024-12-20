import React, { useEffect, useState } from "react";
import axios from "axios";


//first checkout previous code
const AxiosPost = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const data = {
    userId: "6655",
    title: "Solve DSA Problem using Java",
    completed: false,
  };
  function updateTask(){
    data.completed=true;
    postData();
  }
  const postData = async () => {
   try{
    const response=await axios.post(url,data);
    console.log("Post response",response.data)
   }catch(error){
    console.log("error",error)
   }
  };


  return (
    <>
      <h3>Axios Post Request</h3>
      <button onClick={updateTask}>Updated Task</button>
    </>
  );
};

export default AxiosPost;
