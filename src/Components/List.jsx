import React from "react";

//Read Documentation Below
const List = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <>
      <h3>Inside List</h3>
      <BasicExample />
      <Basic_key list={list} />
      <Garage />
      <GarageTwo />
      <GarageThree />
    </>
  );
};

//Below is JavaScript code illustrating using map() function to traverse lists:
//this is without key
function BasicExample() {
  var numbers = [2, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h3>Orginal Number:</h3>
      {numbers.map((n) => n + " ")}
      <h3>Numbers updated with +2:</h3>
      {numbers.map((n) => n + 2 + " ")}
    </>
  );
}

//basicexample with key
function Basic_key(props) {
  const list = props.list;
  const updateList = list.map((item) => {
    return <li key={item.toString()}>{item + 3}</li>;
  });
  return (
    <>
      <h3>List with Key Example</h3>
      <ul>{updateList}</ul>
    </>
  );
}

function Car(props) {
  return (
    <li>
      <h4>i am {props.carname}</h4>
    </li>
  );
}

//Let's render all of the cars from our garage:
function Garage() {
  const cars = ["Ford", "TATA", "BMW", "Audi", "Honda"];
  return (
    <>
      <h3>Who is in my Garage!</h3>
      <ul>
        {cars.map((car) => (
          <Car carname={car} />
        ))}
      </ul>
    </>
  );
}

//with keys (good to use keys)
function Bike(props) {
  return (
    <li>
      <h4>
        i am {props.bikeName} and my id is {props.Key}
      </h4>
    </li>
  );
}
function GarageTwo() {
  const bikes = [
    { id: "01", brand: "Z-1000" },
    { id: "02", brand: "GS-310" },
    { id: "03", brand: "Royal-Enfield" },
  ];
  return (
    <>
      <h3>Who is in my Garage Two!</h3>
      <ul>
        {bikes.map((bike) => (
          <Bike Key={bike.id} bikeName={bike.brand} />
        ))}
      </ul>
    </>
  );
}

//example
const Cycles = (props) => {
  return (
    <li>
      <h3>I'am {props.cycleName}</h3>
    </li>
  );
};
const GarageThree = () => {
  const cycles = ["SportsCycle", "MountainCycle", "RegularCycle", "FatCycle"];
  return (
    <>
      <h2>Inside Garage Cycle</h2>
      <ol>
        {cycles.map((cycle) => (
          <Cycles key={cycle.toString()} cycleName={cycle} />
        ))}
      </ol>
    </>
  );
};

export default List;

/*
  -> In React, you will render lists with some type of loop.
  -> The JavaScript map() array method is generally the preferred method.

  Examples Are Above

  Note: Keys:
    ->Keys allow React to keep track of elements. This way, if an item is updated or removed, 
      only that item will be re-rendered instead of the entire list.
    ->Keys need to be unique to each sibling. But they can be duplicated globally.
    ->Keys are used in React to identify which items in the list are changed, updated, or deleted.

    if we don't pass any key we will get a warning message in console:
      Warning: Each child in a list should have a unique "key" prop.

    extra information from geeksforgeeks : https://www.geeksforgeeks.org/reactjs-lists/
     
    */
