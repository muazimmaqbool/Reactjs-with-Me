import React from 'react'

const List = () => {
  return (
    <>
        <h3>Inside List</h3>
        <Garage/>
        <GarageTwo/>
    </>
  )
}

function Car(props){
  return <li><h4>i am {props.carName}</h4></li>
}
//Let's render all of the cars from our garage:
function Garage(){
  const cars=["Ford","TATA","BMW","Audi","Honda"]
  return(
    <>
    <h2>Who is in my Garage!</h2>
    <ul>
      {cars.map((car) => <Car carName={car}/>)}
    </ul>
    </>
  )
}

//with keys (good to use keys)

function Bike(props){
  return <li><h4>i am {props.bikeName} and my id is {props.Key}</h4></li>
}
function GarageTwo(){
  const bikes=[
    {id:"01",brand:"Z-1000"},
    {id:"02", brand:"GS-310"},
    {id:"03",brand:"Royal-Enfield"}
  ]
  return(
    <>
    <h2>Who is in my Garage Two!</h2>
    <ul>
      {bikes.map((bike) => <Bike Key={bike.id} bikeName={bike.brand}/>)}
    </ul>
    </>
  )
}




export default List

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
*/