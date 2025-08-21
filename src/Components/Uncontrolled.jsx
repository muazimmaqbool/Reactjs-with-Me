import React, { useRef } from 'react'
/*
-> Uncontrolled Components:
    The input value is not stored in React state.
    Instead, you use a ref to directly access the DOM’s value only when needed.
    React doesn’t “control” the typing behavior.
*/
const Uncontrolled = () => {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${nameRef.current.value}`);
  };
/*
Here:
    Input value lives in the DOM, not React state.
    We grab it only when submitting via ref.
*/
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Uncontrolled