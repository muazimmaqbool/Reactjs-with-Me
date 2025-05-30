import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";

const DebounceExampleTwo = () => {
  const [search, setsearch] = useState("");
  const [valueToSearch, setvalueToSearch] = useState("");
 // console.log("search :", search);
  useEffect(() => {
    const time=setTimeout(() => {
      //console.log("To Search :", search);
        setvalueToSearch(search);
    }, 1000);
    return () => {
      //console.log("useEffect clean here");
      clearTimeout(time);
    };
  }, [search]);
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
