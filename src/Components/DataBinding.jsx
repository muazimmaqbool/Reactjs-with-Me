//-> What is Data Binding?
/*
    Data binding means connecting your UI (view) with your data (state).
    So when data changes → UI updates automatically.
    And when user interacts with UI → data updates.
*/

/*
In React, we mainly use two types:

1->One-Way Data Binding (React Default)
    Data flows from state → UI.

    function App() {
        const [name, setName] = useState("Muazim");
        return <h2>Hello {name}</h2>;
    }
    In this example:
        State updates → UI reflects it.
        Direction: State ➝ UI
        React prefers this approach because it's predictable and easy to debug.

2->Two-Way Data Binding (User Input <-> State)
    Input value changes → state updates.
    State updates → input value updates.

    This is common with forms:
        import { useState } from "react";
        function App() {
        const [name, setName] = useState("");

        return (
            <div>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <p>Your Name: {name}</p>
            </div>
          );
        }
    In this example:
    | Action              | Effect                           |
    | ------------------- | -------------------------------- |
    | User types in input | `setName()` updates state        |
    | State updates       | Input displays that latest value |

    Direction: UI ↔ State


    Extra: Why React doesn't auto two-way bind?
    Frameworks like Angular/Vue auto-bind everything.
    React keeps control manual for performance & predictability.
    You decide when & how data updates — gives more power 

    Note:
        By default, React uses one-way data binding
        i.e Data flows in one direction → from state (or props) to UI. : State/Props  --->  UI
        But with controlled components (like input fields), we can implement two-way binding manually.
        i.e Data flows in both directions → from state to UI and from UI to state. : State  <-->  UI

*/
import React from 'react'

const DataBinding = () => {
  return (
    <div>DataBinding</div>
  )
}

export default DataBinding
