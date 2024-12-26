import React from "react";

//Read documentation below:
const SpreadOperator = () => {
  return (
    <>
      <Example1 />
      <Example2 />
    </>
  );
};

//basic example of spread operator
const Example1 = () => {
  const num1 = [1, 2, 3, 4];
  const num2 = [5, 6, 7, 8, 9];
  const num = [...num1, ...num2];
  console.log("num:", num);

  //Assign the first and second items  to variables and put the rest in an array:
  const items = [
    "laptop",
    "camera",
    "printer",
    "desktop",
    "charger",
    "phone-stand",
  ];
  const [item1, item2, ...restItems] = items;
  console.log("item1", item1);
  console.log("item2", item2);
  console.log(restItems);

  const fullName = ["Muazim", "Maqbool"];
  const data = [6655, ...fullName, "Cse", "B"];

  return (
    <>
      <p>{num}</p>
      <p>{data}</p>
    </>
  );
};

//example-2 explains how we use spread operator on objects
const Example2 = () => {
  //We can use the spread operator with objects too:
  // Example
  // Combine these two objects:

  const name = {
    firstN: "Muazim",
    lastN: "Maqbool",
    branch: "computer",
  };
  const details = {
    enroll: 6655,
    ...name,
    branch: "CSE", //branch CSE overrides branch in name
  };
  console.log(details);
  return <></>;
};

export default SpreadOperator;

/*
-> Spread Operator/ React Bonus
    ->The JavaScript spread operator (...) allows us to quickly copy all or part of an existing 
      array or object into another array or object.
    ->The spread operator is commonly used to make deep copies of JS objects

    Example
        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        const numbersCombined = [...numbersOne, ...numbersTwo];

    ->The spread operator is often used in combination with destructuring.
    ->spread operator is already seen in JS: https://github.com/muazimmaqbool/Javascript-from-scratch/blob/master/51%20Spread%20(...)%20Operator.html
        
*/
