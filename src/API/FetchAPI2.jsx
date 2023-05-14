import React, { useState, useEffect } from "react";

const FetchAPI2 = () => {
  return (
    <>
      <CatFacts />
      <CatFacts2 />
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
    <>
      <h1>{fact.fact}</h1>
    </>
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

//for more see API's in javascript

export default FetchAPI2;

//using async-await its good way to use async-await on fetch
