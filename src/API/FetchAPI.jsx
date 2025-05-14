import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  return (
    <>
      <h2>Simple Fetch API Example</h2>
      <GetUsers />
      <CatFacts />
    </>
  );
};

//Example 1:
const url = "https://jsonplaceholder.typicode.com/users";
function GetUsers() {
  const [users, setUsers] = useState([]);

  //fuction to get data from API
  const fetchUsersData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error)=>console.log("error occurred:",error))
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

//Example 2:
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
      <p>Fact length is: {fact.length}</p>
    </>
  );
}

export default FetchAPI;

/*
 Study fetch() API method in javascript and from notes of javascript
 fetch() in react works in  similar manner like in javascript 
 but here in react instead of fetch() axios is used because its much easy to use
 ->although fetch also works fine
 */
