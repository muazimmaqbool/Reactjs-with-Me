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
/*
-> Key Differences
    Feature	               Controlled	                   Uncontrolled
    Value stored in	     React state	                 DOM (input element itself)
    Access value	     Through state	                 Using ref
    React in control?	 Yes (single source of truth)    No (React just reads when needed)
    Use cases	         Validation, live updates,       Quick forms, file inputs, minimal overhead
                          conditional rendering	

-> Real-World Usage:
    Controlled → Best for most forms (validation, live error messages, conditional UI).
    Uncontrolled → Handy for:
        File uploads (<input type="file" />)
        Quick uncontrolled form submissions
        Performance optimization in huge forms

->Pro Tip:
    Controlled components give you predictability → you know exactly what’s in your form at all times.
    Uncontrolled components give you simplicity → less React code, but less control.
*/