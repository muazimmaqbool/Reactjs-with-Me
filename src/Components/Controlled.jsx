import React, { useState } from 'react'

/*
->Controlled Components:
    The form values are stored in React state.
    React updates the DOM whenever state changes.
    You can fully control the input (validation, transformations, resets).
*/
const Controlled = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${name}`);
    setName(""); // Clear the input after submission
  };
/*
Here:
  Input’s value is bound to React state (name).
  Every keystroke updates name via setName.
  React has full control over the input.
*/
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Controlled