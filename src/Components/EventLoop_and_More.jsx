import React from 'react'

const EventLoop_and_More = () => {
  return (
    <div>

    </div>
  )
}

export default EventLoop_and_More
/*
🔹1. The Event Loop:
    JavaScript is single-threaded → it runs one thing at a time.
    To manage async tasks (setTimeout, Promises, etc.), JS uses:
        Call Stack → where functions run.
        Queues → waiting tasks:
        Microtask Queue
        Macrotask Queue

    ➡️ The event loop decides what runs next.

🔹2. Macrotasks:
    Scheduled in the Macrotask Queue.
    Examples:
        setTimeout
        setInterval
        setImmediate (Node.js)
        I/O events
        requestAnimationFrame

    ➡️ Macrotasks run after the current script finishes, and after all microtasks are cleared.

🔹3. Microtasks:
    Scheduled in the Microtask Queue.
    Examples:
        Promise.then / catch / finally
        queueMicrotask
        MutationObserver

    ➡️ Microtasks run immediately after the current function finishes, but before the next Macrotask.

🔹 4. Execution Order

Run all code in the current call stack.

Empty the Microtask Queue (all of it).

Take one task from Macrotask Queue and run it.

Repeat forever.


*/