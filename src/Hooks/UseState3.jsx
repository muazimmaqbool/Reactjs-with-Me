import React, { useState } from "react";

const UseState3 = () => {
  return (
    <>
      <h3>Updating Objects and Arrays in State</h3>
      <Bike />
    </>
  );
};
function Bike() {
  const [bike, setBike] = useState({
    brand: "BMW",
    model: "GS-310",
    color: "Light blue",
    modified: "Yes",
  });
  const updateColor = () => {
    setBike((previousState) => {
      return { ...previousState, color: "Black" };
    });
  };
  return (
    <>
      <h1>My {bike.brand} Bike</h1>
      <h4>
        is a {bike.model} and its of {bike.color} color
        <br />
        Is its modified? {bike.modified}
      </h4>
      <button
        type="button"
        onClick={updateColor}
      >
        Update Color
      </button>
    </>
  );
}

export default UseState3;

/*
->Updating Objects and Arrays in State
    When state is updated, the entire state gets overwritten.
    What if we only want to update the color of our Bike?
    If we only called setCar({color: "blue"}), this would remove the 
    brand, model, and year from our state.
    We can use the JavaScript spread operator to help us. 

    v=const updateColor = () => {
        setCar(previousState => {
        return { ...previousState, color: "blue" }
        });
    }
    Because we need the current value of state, we pass a function into our setBike function.
     This function receives the previous value.
    We then return an object, spreading the previousState and overwriting only the color

*/
