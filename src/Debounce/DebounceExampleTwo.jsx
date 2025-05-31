import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";

const DebounceExampleTwo = () => {
  const [search, setsearch] = useState("");
  const [valueToSearch, setvalueToSearch] = useState("");
 // console.log("search :", search);
  useEffect(() => {
    const timeID=setTimeout(() => {
      //console.log("To Search :", search);
        setvalueToSearch(search);
    }, 1000);
    return () => {
      //console.log("useEffect clean here");
      clearTimeout(timeID);
    };
  }, [search]);
  /*
  Here when user type anything in the input field, it will wait for 1 second before updating the valueToSearch state.
  If the user types again within that 1 second, the previous timeout is cleared via return in useEffect and a new one is set.
  */
  return (
    <div>
      <h2>Debounce Example Two</h2>
      <input
        type="input"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder="Search..."
      />
      <p>Value To Search: {valueToSearch}</p>
    </div>
  );
};

export default DebounceExampleTwo;
