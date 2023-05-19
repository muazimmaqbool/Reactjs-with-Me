import React,{useEffect} from "react";
import axios from "axios";

const AxiosPut = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/100";
  const data = {
    userId:"6631",
    title:"React Hooks?",
    body:"Hooks are used to add functionality to function component"
  };
  ;const putData = async () => {
    try {
      const response = await axios.put(url, data);
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    putData();
  }, []);
  return (
    <>
      <h3>Axios Put</h3>
    </>
  );
};

export default AxiosPut;
