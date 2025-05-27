import React from "react";

//Read Documentation Below:
const Destructuring = () => {
  return (
    <>
      {/* <Example1 /> */}
       {/* <Example2 /> */}
      {/* <ExampleObj /> */}
      <ExampleFunc />
    </>
  );
};

//Destructing Arrays:
const Example1 = () => {
  const myArray = ["a", "b", "c"];

  //Without destructuring
  const x = myArray[0];
  const y = myArray[1];
  console.log(x, y); // "a" "b"

  //With destructuring
  const [m, n] = myArray;
  console.log(m); //a
  console.log(n); //b

  //When destructuring arrays, the order that variables are declared is important.
  const vehicles = ["mustang", "f-150", "expedition"];
  //const [car, truck, suv] = vehicles;

  //If we only want the car and suv we can simply leave out the truck but keep the comma:
  const [car, , suv] = vehicles;
  console.log(car); //mustang
  console.log(suv); //expedition

  //example
  const [, , website] = ["Muazim Maqbool", "sopore", "muazimmaqbool.com"];
  console.log("website:",website);

  //Array Destructuring to Swap Variables’ Values
  let s1 = "apple";
  let s2 = "samsung";
  console.log(s1, " and ", s2);
  [s1, s2] = [s2, s1];
  console.log(s1, " & ", s2);

  return (
      <h4>Destructuring On Array</h4>
  );
};

//Destructuring comes in handy when a function returns an array:
const Example2 = () => {
  function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  }
  // const[add,subtract,multiply,divide]=calculate(4,7)
  //suppose we don't want multiply then
  const [add, subtract, , divide] = calculate(4, 7);
  return (
    <>
      <p>Add: {add}</p>
      <p>Subtract: {subtract}</p>
      {/* <p>Multiple: {multiply}</p>  */} {/*when we don't want multiply */}
      <p>Divide: {divide}</p>
    </>
  );
};

// Destructuring On Objects:
function ExampleObj() {
  const obj = { a: 1, b: 2 };
  const { a, b } = obj;
  // is equivalent to:
  // const a = obj.a;
  // const b = obj.b;
  console.log(a);
  console.log(b);

  //example
  const profile = {
    firstName: "Oluwatobi",
    lastName: "Sofela",
    website: "codesweetly.com",
  };

  const { firstName, lastName, website} = profile;

  //How to Use Object Destructuring When the Property’s Name Differs from That of the Variable

  const client = {
    firstName: "ABC",
    lastName: "DEF",
    online: "abcdef.com",
  };

  const { firstName:name, lastName: name2, online: site } = client;

  console.log(name); // ABC
  console.log(name2); // DEF
  console.log(site); // abcdef.com
  //console.log(online); // "ReferenceError: online is not defined"

  return (
    <>
      <h3>Destructuring On Objects</h3>
      <div>
        <p>firstname: {name}</p>
        <p>lastname: {name2}</p>
        <p>website: {site}</p>
      </div>
    </>
  );
}

//Destructuring on functions:
const ExampleFunc = () => {
  const product = {
    id: 235,
    brand: "DELL",
    processor: "intel i7",
    type: "Laptop",
  };
  console.log("product details:",getProductDetails(product));

  //Without destructuring
  /*function getProductDetails(product){
    const type=product.type;
    const id=product.id;
    return type+" - "+id;
  }*/

  //Using Destructuring
  function getProductDetails({ type, id, brand }) {
    return type + "-" + id + "-" + brand;
  }
  //Destructuring on arrow function
  const getProduct = ({ id, brand, processor, type }) =>id + "-" + brand + "-" + processor + "-" + type;
  console.log("product info:",getProduct(product));

  //example2
  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
  };

  const getDetails = myVehicle(vehicleOne);
  //without destructuring
  /* function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    return message
  }
  */

  //using destructuring
  function myVehicle({ type, color, brand, year }) {
    const message =
      "My " + type + " is a " + color + " " + brand + " from " + year + ".";
    return message;
  }

  //We can even destructure deeply nested objects by referencing the nested object
  //then using a colon and curly braces to again destructure the items needed from the nested object:
  const bike = {
    brand: "BMW",
    model: "GS-310",
    color: "Blue",
    owner: {
      name: "Muazim Maqbool",
      NumPlate: "JK05E 6073",
      address: "Chinkipora-Sopore",
      State: "Jammu and Kashmir",
    },
  };
  const bikeDetails = ({ model, color, owner:{NumPlate,address} }) =>
    "This is " + color + "-" + model + " and its number is " + NumPlate+" from "+ address;
  const bikedata = bikeDetails(bike);

  return (
    <>
      <h3>Destructuring On Functions</h3>
      <p>{getDetails}</p>
      <p>{bikedata}</p>
    </>
  );
};

export default Destructuring;

/*
->Destructuring:
    Destructuring is a way of creating new variables by extracting some values from data stored in objects or arrays.
    To name a few use cases, destructuring can be used to destructure function parameters or values from props

    ->Destructuring is exactly the same. We may have an array or object that we are working with,
      but we only need some of the items contained in these.
    ->Destructuring makes it easy to extract only what is needed.

    ->When destructuring arrays, the order that variables are declared is important.

    ->Notice that the object properties do not have to be declared in a specific order.


*/
