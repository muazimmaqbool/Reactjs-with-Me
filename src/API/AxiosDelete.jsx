import React, { useEffect, useState } from "react";
import axios from "axios";

//First check previous codes on axios
const AxiosDelete = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/2";
  const [status, setStatus] = useState("");
  const deleteData = async () => {
    try {
      const response = await axios.delete(url);
      console.log("delete response:",response)
      setStatus("Deleted successfully!");
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  useEffect(() => {
    deleteData();
  }, []);
  return (
    <>
      <h3>Axios Delete Request</h3>
      <p>{status}</p>
    </>
  );
};

export default AxiosDelete;
