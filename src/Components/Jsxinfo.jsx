import React from "react";

//Note before going throgh the code react the documentation below
const Jsxinfo = () => {
  const x = 20;
  let text = "Hello React";
  if (x < 25) {
    text = "Hello JSX";
  }
  return (
    <>
      <h2>Inside Jsxinfo file</h2>
      <h2>Expressions in JSX:</h2>
      <h3>sum of 10 and 5: {10 + 5}</h3>
      <h3>value of x is: {x}</h3>
      <h3>text: {text}</h3>
      <h3>ternary expressions inside jsx:</h3>
      <h3>using ternary o/p : {x < 15 ? "less then 15" : "greater then 15"}</h3>
    </>
  );
};

export default Jsxinfo;

/*
  ->JSX info:
    JSX: means javascript XML, its an extention of javascript syntax, which is used in react to write html and javascript together. 
    >It makes easy to write react code
    >JSX coverts html tags in react elements
    >JSX allows us to write Html in react
    >JSX makes it easier to write and add html in react
    >JSX is translated into regular J.S at runtime
 
  ->Expressions in JSX
    With JSX you can write expressions inside curly braces { }.
    The expression can be a React variable, or property, or any other valid JavaScript expression.
    JSX will execute the expression and return the result:
    example : <h1>React is {5 + 5} times better with JSX</h1>

  -> Important:
    >JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
    >Elements Must be Closed
    >JSX follows XML rules, and therefore HTML elements must be properly closed. -> Close empty elements with />
    JSX will throw an error if the HTML is not properly closed.

  ->Attribute class = className:
    The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, 
    and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
    Use attribute className instead.
    JSX solved this by using className instead. When JSX is rendered, it translates className 
    attributes into class attributes.
        Example: <h1 className="myclass">Hello World</h1>;

  ->Conditions - if statements
    React supports if statements, but not inside JSX.
    To be able to use conditional statements in JSX, you should put the if statements outside
    of the JSX, or you could use a ternary expression instead:
    Option 1:
    Write if statements outside of the JSX code: example in code above
    Option 2:
    Use ternary expressions instead: example in code above
    const x = 5;
    then inside return:
                <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

  ->Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped
    with curly braces, {}.
    ->JSX is only written inside return
    */
