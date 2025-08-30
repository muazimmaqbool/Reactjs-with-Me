import React from "react";

const EventLoop_and_More = () => {
  //Example explained in point 5 below and also why result is coming in that order
  console.log("Start");
  setTimeout(() => {
    console.log("Macrotask (setTimeout)");
  }, 0);
  Promise.resolve().then(() => {
    console.log("Microtask (Promise.then)");
  });
  console.log("End");
  //Output: Start, End, Microtask (Promise.then), Macrotask (setTimeout)
  return <div></div>;
};

export default EventLoop_and_More;
/*
1. The Event Loop:
    JavaScript is single-threaded → it runs one thing at a time.
    To manage async tasks (setTimeout, Promises, etc.), JS uses:
        Call Stack → where functions run.
        Queues → waiting tasks:
        Microtask Queue
        Macrotask Queue

    ➡️ The event loop decides what runs next.

2. Macrotasks:
    Scheduled in the Macrotask Queue.
    Examples:
        setTimeout
        setInterval
        setImmediate (Node.js)
        I/O events
        requestAnimationFrame

    ➡️ Macrotasks run after the current script finishes, and after all microtasks are cleared.

3. Microtasks:
    Scheduled in the Microtask Queue.
    Examples:
        Promise.then / catch / finally
        queueMicrotask
        MutationObserver

    ➡️ Microtasks run immediately after the current function finishes, but before the next Macrotask.

4. Execution Order:
    Run all code in the current call stack.
    Empty the Microtask Queue (all of it).
    Take one task from Macrotask Queue and run it.
    Repeat forever.

5.Example to Understand:
    console.log("Start");
    setTimeout(() => {
    console.log("Macrotask (setTimeout)");
    }, 0);
    Promise.resolve().then(() => {
    console.log("Microtask (Promise.then)");
    });
    console.log("End");
    Output:
    Start, End, Microtask (Promise.then), Macrotask (setTimeout)

    ➡️ Why?
        console.log("Start") → runs immediately.
        setTimeout → goes into Macrotask Queue.
        Promise.then → goes into Microtask Queue.
        console.log("End") → runs.
        Event loop finishes current stack, then runs Microtasks first → "Microtask...".
        Then it runs Macrotasks → "Macrotask...".

6. Visual Analogy:
    Macrotasks = big tasks like cooking a meal → scheduled one by one.
    Microtasks = small tasks like stirring the pot or adding salt → must be done before moving to the next big task.

7. Why it matters in React/JS:
    React’s state updates and async effects rely on microtasks.
    Understanding this helps debug async code (useEffect, setState, async/await).
    Example: await is essentially a microtask checkpoint.
*/
