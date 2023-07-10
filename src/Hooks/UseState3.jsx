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
    fuelTank: "Full",
  });

  const updateColor = () => {
    setBike((previousState) => {
      return { ...previousState, color: "Black" };
    });
  };
  const updateFuelTank = () => {
    setTimeout(() => {
      setBike((previousState) => {
        return { ...previousState, fuelTank: "Half-Full" };
      });
    }, 2000);
  };
  const updateModified = () =>{
    setBike((prevState)=>{
      return {...prevState , modified:"Not Fully!"}
    });
  };

  const updateBikeModel = ()=>{
    console.log("Updating Model...")
    setTimeout(()=>{
      setBike((prevState)=>{
          return {...prevState, model:"GS-1250"}
      })
      console.log("Bike Model Updated")
    },3000)
  }


  //Note: previousState is just an identifier it can be of any name

  return (
    <>
      <h1>My {bike.brand} Bike</h1>
      <h4>
        is a {bike.model} and its of {bike.color} color
        <br />
        Is its modified? {bike.modified}
      </h4>
      <h4 style={{ color: "teal" }}>Fuel Tank Status: {bike.fuelTank}</h4>

      <button onClick={updateColor}>Update Color</button>
      <button onClick={updateFuelTank}>Update Fuel-Tank</button>
      <button onClick={updateModified}>Modification Status</button>
      <button onClick={updateBikeModel}>Update Bike Model</button>
    </>
  );
}

export default UseState3;

/*
->Updating Objects and Arrays in State
    When state is updated, the entire state gets overwritten.
    What if we only want to update the color of our Bike?
    If we only call setCar({color: "blue"}), this would remove the 
    brand, model, and year from our state.
    We can use the JavaScript spread operator to help us. 

    const updateColor = () => {
        setCar(previousState => {
        return { ...previousState, color: "blue" }
        });
    }
    Because we need the current value of state, we pass a function into our setCar function.
     This function receives the previous value.
    We then return an object, spreading the previousState and overwriting only the color

*/
