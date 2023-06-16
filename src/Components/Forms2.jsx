import React, { useState } from "react";

const Forms2 = () => {
  return (
    <>
      <h3>Form with multiple input fields</h3>
      <Myform />
    </>
  );
};

//form with multiple input fields
function Myform() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  };
  return (
    <>
      <h5>Please Enter below details</h5>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input type="text" name="name" value={inputs.name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Your Age:
          <input type="number" name="age" value={inputs.age} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Your Email:
          <input type="email" name="email" value={inputs.email} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          Pincode:
          <input type="number" name="pincode" value={inputs.pincode} onChange={handleChange}/>
        </label>
        <br/>
        <input type="submit" />
      </form>
    </>
  );
}

export default Forms2;

/*
-> Form with multiple input fields:
    You can control the values of more than one input field by adding a name attribute to each element.
    We will initialize our state with an empty object.
    To access the fields in the event handler use the event.target.name and event.target.value syntax.
    To update the state, use square brackets [bracket notation] around the property name.

    visit: https://www.w3schools.com/REACT/react_forms.asp
 */
