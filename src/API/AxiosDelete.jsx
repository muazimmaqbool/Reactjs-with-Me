import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosDelete = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/2";
  const [status, setStatus] = useState("");
  const delData = async () => {
    try {
      const response = await axios.delete(url);
      setStatus("Deleted successfully!");
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  useEffect(() => {
    delData();
  }, []);
  return (
    <>
      <h3>Axios Delete</h3>
      <p>{status}</p>
    </>
  );
};

export default AxiosDelete;
