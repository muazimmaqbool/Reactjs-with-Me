import React, { useEffect, useState } from "react";
import axios from "axios";

//First check previous codes on axios
const AxiosDelete = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/2";
  const [status, setStatus] = useState("");
  const deleteData = async () => {
    try {
      const response = await axios.delete(url);
      console.log("delete request response:",response)
      setStatus("Deleted successfully!");
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  return (
    <>
      <h3>Axios Delete Request:</h3>
      <p>{status}</p>
      <button onClick={deleteData}>Delete Post</button>
    </>
  );
};

export default AxiosDelete;
