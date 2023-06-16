import React, { useEffect, useState } from "react";
import axios from "axios";
//at 9:00
const Debounce = () => {
  const [nameVal, setNameVal] = useState("");
  //console.log(nameVal);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      try {
        const { data } = await axios.get(
          `https://randomuser.me/api/?name=${nameVal}` //this api gives random users in every render
        );
        //console.log(data) //in api we have result inside it we have array and at 0 index we have email
        console.log(data.results[0].email);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    console.log("useEffect working here");
    //clear function, this will be called when component unmounts
    return () => {
      clearTimeout(timeoutID);
      console.log("useEffect clean here");
    };
    //basically before calling useEffect again function inside return will run i.e cleanup useEffect will run
  }, [nameVal]);
  //here the moment we type something in the input field useEffect gets called and function is called
  //so when i type M function runs and it prints random email then when i type U it runs again and so on..
  //so its running/called on every alphabet

  //but we want it to run after a certain delay until no change is made during that delay the run
  //if any change is made then reset delay/time then again wait for some time then run if no change is made
  // this is debouncing already seen in javascript
  //we will be using setTime(putting getUserData() function inside setTimeout) to do this
  //watch at 13:30

  return (
    <>
      <h2>Debounce</h2>
      <input
        type="text"
        value={nameVal}
        onChange={(e) => setNameVal(e.target.value)}
      />
    </>
  );
};

export default Debounce;
/*
 -> Debouncing already studied in javascript , here just implementing it uisng react
 */
