import React, { useState } from "react";

const UseState2 = () => {
  return (
    <>
      <h3>More on useState</h3>
      <h4>What Can State Hold</h4>
      <Car />
      <Bike />
    </>
  );
};
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        it is a {color} {model} from {year}
      </p>
    </>
  );
}
//we can also use one state and include an objects instead
function Bike() {
  const [bike, setBike] = useState({
    brand: "BMW",
    model: "GS-310",
    color: "Light blue",
    modified: "Yes",
  });
  return (
    <>
      <h1>My {bike.brand} Bike</h1>
      <h4>
        is a {bike.model} and its of {bike.color} color
        <br />
        Is its modified? {bike.modified}
      </h4>
    </>
  );
}

export default UseState2;

/*
->What Can State Hold:
  The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects,
  and any combination of these!
  We could create multiple state Hooks to track individual values.
  function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

  //Or, we can just use one state and include an object instead!

  function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  //Since we are now tracking a single object, we need to reference that object and then the property 
   //of that object when rendering the component. (Ex: car.brand)
*/
