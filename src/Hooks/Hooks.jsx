import React from "react";

const Hooks = () => {
  return <h1 style={{ textAlign: "center", color: "blue" }}>Hooks</h1>;
};

export default Hooks;
                       
/*
->Hooks were added to React in version 16.8.

->Hooks allow function components to have access to state and other React features.
  Because of this, class components are generally no longer needed

  Note: State contains data or information about the component

->What is a Hook?
  Hooks allow us to "hook" into React features such as state and lifecycle methods into function components.

->Hook Rules
  There are 3 rules for hooks:
    Hooks can only be called inside React function components.
    Hooks can only be called at the top level of a component.
    Hooks cannot be conditional
    
Note: Hooks will not work in React class components.

->Important Concept.
  ->Data Binding In React:
    Data Binding is the process of connecting the view element or user interface, with the data which populates it.

    In ReactJS, components are rendered to the user interface and the component’s logic contains the data to be displayed in the view(UI).
    The connection between the data to be displayed in the view and the component’s logic is called data binding in ReactJS.

    IMPORTANT:
    ->One-way Data Binding: ReactJS uses one-way data binding. In one-way data binding one of the 
      Following conditions can be followed:
        Component to View: Any change in components data would get reflected in the view.
        View to Component: Any change in View would get reflected in the component’s data.
*/
