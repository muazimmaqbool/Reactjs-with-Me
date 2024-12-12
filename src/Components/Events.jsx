import React from "react";

//Read documentation below
const Events = () => {
  const run = () => {
    alert("running");
  };

  const speed = (s) => {
    console.log("Running Speed is:", s);
  };

  const distance = (d, e) => {
    console.log("distance :", d);
    console.log(e.type);
  };

  const mouse = (e) => {
    console.log("Its mouseOver event: ", e.type);
  };
  return (
    <>
      <button onClick={run}>Click to run!</button>

      {/* To pass an argument to an event handler, use an arrow function. */}
      {/* NOTE: if argument passed without using arrow function like this: onClick={speed("30-KMPH")}, 
      then it will be called when page loads, i.e before button is clicked */}
      <button onClick={() => speed("30-KMPH")}>Check Speed ?</button>

      {/*passing data and getting event type , here its click */}
      <button onClick={(event) => distance("5-KM", event)}>
        Get distance and event type
      </button>
      {/*here event can be named with anything */}

      <h3 onMouseOver={(event) => mouse(event)}>Use Mouse Over me</h3>
    </>
  );
};

export default Events;
/*
  Just like HTML DOM events, React can perform actions based on user events.
  React has the same events as HTML: click, change, mouseover etc.

  Adding Events :
    ->React events are written in camelCase 
      syntax: onClick instead of onclick.
    ->React event handlers are written inside curly braces:
      onClick={shoot}  instead of onClick="shoot()".
    ->Example:   
      React: <button onClick={shoot}>Take the Shot!</button>
      Html: <button onclick="shoot()">Take the Shot!</button>

    ->Passing Arguments:
      To pass an argument to an event handler, use an arrow function.
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>

    ->React Event Object
      Event handlers have access to the React event that triggered the function.
       In our example the event is the "click" event.
       function Football() {
        const shoot = (a, b) => {
          alert(b.type);
          'b' represents the React event that triggered the function,
          in this case the 'click' event
        }

        return (
          <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
        );
      }

*/
