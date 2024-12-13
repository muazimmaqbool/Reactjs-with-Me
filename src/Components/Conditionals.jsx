import React from "react";

//Read Documentation below
const Conditionals = () => {
  const cars = ["BMW", "Honda", "Hyundia", "Ford"]; // try with empty array of cars: const cars = [];
  return (
    <>
      <h2>Conditionals</h2>
      <h3>Using if</h3>
      <Shoot goal={true} />
      {/*also try with {false} */}

      <h3>using &&</h3>
      <Garage cars={cars} />

      <h3>using ternary operator</h3>
      <ShootAgain goal={false} />
    </>
  );
};

// 1 -> if Statement: We can use the if JavaScript operator to decide which component to render.
function Missed() {
  return <h3>Missed</h3>;
}
function Hit() {
  return <h3>Hit</h3>;
}
//this function/component will decide which component to render/run
function Shoot(props) {
  const isGoal = props.goal;
  if (isGoal) {
    return <Hit />;
  }
  return <Missed />;
}

// 2 ->Logical && Operator:  Another way to conditionally render a React component is by using the && operator.
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h4>In Garage</h4>
      {cars.length > 0 && <h3>you have {cars.length} in your garage</h3>}
      <h4>List of cars in your garage is: {cars}</h4>
    </>
  );
}
//Note: If cars.length > 0 is equates to true, the expression after && will render.

//  3 -> Ternary Operator: Another way to conditionally render elements/component is by using a ternary operator.
//We will go back to the first example
//Return the Hit component if isGoal is true, otherwise return the Missed component:
function ShootAgain(props) {
  const isGoal = props.goal;
  return <>{isGoal ? <Hit /> : <Missed />}</>;
}

export default Conditionals;

/*
    In React, you can conditionally render components.
    There are several ways to do this.
    ->if Statement:
      We can use the if JavaScript operator to decide which component to render.
       Example: we will create two components and another third component which decides which component to render

    ->Logical && Operator
      Another way to conditionally render a React component is by using the && operator.
       {condition && statement to run if condition is true}

    ->Ternary Operator
      Another way to conditionally render elements is by using a ternary operator.
       {condition ? true : false}


        visit this page: https://www.w3schools.com/REACT/react_conditional_rendering.asp

     */
