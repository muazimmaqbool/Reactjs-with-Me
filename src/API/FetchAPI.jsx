import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  return (
    <>
      <h2>fetch API</h2>
      <GetUsers />
      <CatFacts />
    </>
  );
};
const url = "https://jsonplaceholder.typicode.com/users";
function GetUsers() {
  const [users, setUsers] = useState([]);

  //fuction to get data
  const fetchUsersData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setUsers(result)); //console.log(result)
  };

  //used to executed fetchUserData
  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} : {user.username}</li>
          ))}
        </ul>
      )}
    </>
  );
}

//it displays random cat facts
function CatFacts() {
  const url = "https://catfact.ninja/fact";
  const [fact, setFact] = useState([]);
  const getFacts = () => {
    fetch(url)
    .then((response) =>response.json()
     .then((result) => setFact(result))
     .catch((error)=>console.log(error))
    );
  };
  useEffect(() => {
    console.log("inside effect")
    getFacts();
  },[]);
  return (
    <>
      <h3>{fact.fact}</h3>
      <p>fact length is: {fact.length}</p>
    </>
  );
}

export default FetchAPI;

/*
Study fetch() API method in javascript and from notes of javascript
 fetch() in react works in  similar manner like in javascript 
 but here in react instead of fetch() axios is used because its much easy to use
 */
