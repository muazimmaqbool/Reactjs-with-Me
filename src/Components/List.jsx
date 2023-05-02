import React from "react";

const List = () => {
  const list=[1,2,3,4,5]
  return (
    <>
      <h3>Inside List</h3>
      <BasicExample />
      <Basic_key list={list}/>
      <Garage />
      <GarageTwo />  
    </>
  );
};

//Below is JavaScript code illustrating using map() function to traverse lists:
//this is without key
function BasicExample() {
  var numbers = [2, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h4>Numbers updated with +2</h4>
      {numbers.map((num) => num + 2 + " ")}
    </>
  );
}
//basicexample with key
function Basic_key(props){
  const list=props.list;
  const updateList=list.map((item)=>{
    return(
      <li key={item.toString()}>
        {item+2}
      </li>
    )
  })
  return(
    <>
      <ul>{updateList}</ul>
    </>
  )
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
      <h2>Who is in my Garage!</h2>
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
      <h2>Who is in my Garage Two!</h2>
      <ul>
        {bikes.map((bike) => (
          <Bike Key={bike.id} bikeName={bike.brand} />
        ))}
      </ul>
    </>
  );
}



export default List;

/*
  -> In React, you will render lists with some type of loop.
  -> The JavaScript map() array method is generally the preferred method.

  //example above

  //Note: Keys
    Keys allow React to keep track of elements. This way, if an item is updated or removed, 
    only that item will be re-rendered instead of the entire list.
    Keys need to be unique to each sibling. But they can be duplicated globally.

    //Generally, the key should be a unique ID assigned to each item. As a last resort, you 
    can use the array index as a key.
    //A “key” is a special string attribute you need to include when creating lists of elements in React.
    //Keys are used in React to identify which items in the list are changed, updated, or deleted.

    //if we don't pass any key we will get this message in console:
        Warning: Each child in a list should have a unique "key" prop.

    //extra information from geeksforgeeks : https://www.geeksforgeeks.org/reactjs-lists/
     
    */
