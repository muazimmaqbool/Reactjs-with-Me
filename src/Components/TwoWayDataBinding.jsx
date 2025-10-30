import React from 'react'

/*
First: React’s default is one-way data binding:
    React’s data flow goes from parent → child (downward).
    State is passed as props, and when something changes in the UI, you update the state with an event handler.

    So, React does not have automatic two-way binding like Angular —
    but you can simulate it easily using state + event handlers.
*/
/*
Two-way Data Binding Pattern (Controlled Component)
    Here’s the core idea:
    The UI displays data from state.
    The user input updates that same state.

    Example — Controlled Input:
        import React, { useState } from "react";
        function TwoWayBindingExample() {
        const [name, setName] = useState("");
        return (
            <div>
                <input
                    type="text"
                    value={name} // state → UI
                    onChange={(e) => setName(e.target.value)} // UI → state
                    placeholder="Enter your name"
                />

                <p>Hello, {name}!</p>
            </div>
         );
        }
    -> Here’s what’s happening:
        value={name} — input shows what’s in state
        onChange — updates state whenever user types
        State change re-renders component → input reflects new value
        That’s two-way binding — both the state and the UI stay in sync.

    -> Summary:
        | Concept         | Description                            |
        | --------------- | -------------------------------------- |
        | React default   | One-way binding (state → UI)           |
        | Two-way binding | UI ↔ State via `value` + `onChange`    |
        | Implementation  | Use controlled components              |
        | Libraries       | Formik, React Hook Form make it easier |

*/
const TwoWayDataBinding = () => {
  return (
    <div>TwoWayDataBinding</div>
  )
}

export default TwoWayDataBinding