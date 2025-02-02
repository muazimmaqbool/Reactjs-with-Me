import React, { useState } from "react";

//First Check previous code useState.jsx
const UseState2 = () => {
  return (
    <>
      <h3>More on useState hook</h3>
      <h4>What Can State Hold</h4>
      <Car />
      <Bike />
      <Item />
    </>
  );
};
const styleobj = {
  border: "2px solid green",
  width: "fit-content",
};
function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p style={styleobj}>
        it is a {color} {model} from {year}
      </p>

      {/*updating color : this is optional */}
      <button onClick={() => setColor("blue")}>Update Color</button>
    </>
  );
}

//we can also use one state and include an object inside it
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
      <h4 style={styleobj}>
        is a {bike.model} and its of {bike.color} color
        <br />
        Is it modified? {bike.modified}
      </h4>
    </>
  );
}

//updating object value inside useState hook
const Item = () => {
  const [details, setDetails] = useState({
    name: "Hp-Laptop",
    procerror: "i3",
    memory: "8GB and 1TB",
    size: "Large screen",
  });
  return (
    <>
      <h3>
        My {details.name} has {details.procerror} processor with{" "}
        {details.memory} of memory
      </h3>
      <button
        onClick={() =>
          setDetails((prev) => {
            return { ...prev, procerror: "i5" };
          })
        }
      >
        Update processor
      </button>
      <button onClick={()=>setDetails((prev)=>{
        return {...prev,memory:"16GB and 512GB SSD"}
      })}>
        Update memory
      </button>
    </>
  );
};

//updating object and arrays is in useState3.jsx
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

  Or, we can just use one state and include an object instead!

  function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  Since we are now tracking a single object, we need to reference that object and then the property 
   of that object when rendering the component. (Ex: car.brand)
*/
