import React from "react";

//Read documentation below
const Props = () => {
  return (
    <>
      <h2>Props</h2>
      <Garage />
    </>
  );
};

//passing data using props from Garage component
function Car(props) {
  return (
    <>
      {/* <h3>I am a {props.brand} Car</h3> */}
      {/* accessing object values when object is passed in props*/}
      <h3>
        I am a {props.brand.name} and i have {props.brand.topSpeed} of top speed!
      </h3>
    </>
  );
}
const carName = "Ford"; //variable
//If you have a variable or object to send, and not a string as in the example above, you just put the
//variable/object name inside curly brackets:
const carInfo = {
  name: "BMW",
  model: "Z-10RG",
  topSpeed: "220/KMPH",
  mileage: "15KMPH",
  Price: "80L INR",
};
function Garage() {
  return (
    <>
      <h3>Which car is in my Garage?</h3>
      {/* <Car brand="BMW"/> */}

      {/* passing variable: */}
      {/* <Car brand={carName}/>*/}

      {/* passing object: */}
      <Car brand={carInfo} />
    </>
  );
}

export default Props;

/* 
    >React Props:
        props stands for properties.
        Props are arguments passed into React components.
        props are read only (we can't change or modify props as they are imutable)
        Data can be passed from one component to another using props
        They are like function arguments in js and attributes in html
        The props can have any name

    >To send props into a component, use the same syntax as HTML attributes: <Car brand="Ford" />;
        The component receives the argument as a props object:
                function Car(props) {
                    return <h2>I am a { props.brand }!</h2>;
                }
    >Pass Data
        Props are also used to you pass data from one component to another, as parameters.
        see example above
*/
