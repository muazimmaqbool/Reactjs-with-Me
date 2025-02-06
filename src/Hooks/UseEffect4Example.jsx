import React, { useState, useEffect } from "react";

const UseEffect4Example = () => {
  return <Example />;
};

//using API
function Example() {
  const [srcType, setSrcType] = useState("posts");
  //printing data to screen
  const [item, setItems] = useState([]);

  function callAPI() {
    fetch(`https://jsonplaceholder.typicode.com/${srcType}`)
      .then((response) => response.json())
      .then((result) => setItems(result));
  }

  useEffect(() => {
    callAPI();
  }, [srcType]);
  return (
    <>
      <div>
        <button onClick={() => setSrcType("posts")}>Posts</button>
        <button onClick={() => setSrcType("users")}>Users</button>
        <button onClick={() => setSrcType("comments")}>comments</button>
      </div>
      <h1>{srcType}</h1>
      {item.map((i, index) => (
        <p key={index}>{JSON.stringify(i)}</p>
      ))}
    </>
  );
}

export default UseEffect4Example;
