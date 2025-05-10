import React, { useState } from "react";

//Read Documentation Below
const Forms = () => {
  return (
    <>
      <h3>Inside Forms</h3>
      <Myform />
      <MyItem />
    </>
  );
};

//simple form
function Myform() {
  return (
    <form>
      <label>
        Enter Your Name
        <input type="text" placeholder="your name?" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

//handling forms
function MyItem() {
  const [item, setItem] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    alert("Item Added to cart is: "+ item);
  };
  return (
    <form onSubmit={handleSumbit}>
      <label>
        Enter Your Product Name 
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Forms;

/*
    React Forms:
      Just like in HTML, React uses forms to allow users to interact with the web page.

    -> Adding Forms in React : You can add a form with React like any other element: example above
    -> In the above Myform example:
        This will work as normal, the form will submit and the page will refresh.
        But this is generally not what we want to happen in React.
        We want to prevent this default behavior and let React control the form.
    
    
    Handling Forms:
        Handling forms is about how you handle the data when it changes value or gets submitted.
        In HTML, form data is usually handled by the DOM.
        In React, form data is usually handled by the components.
        When the data is handled by the components, all the data is stored in the components state.
        You can control changes by adding event handlers in the onChange attribute.
        We can use the useState Hook to keep track of each input value and provide a 
        "single source of truth" for the entire application.

    Submitting Forms:
        You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:
  Note: now take a look at Forms2 component
*/
