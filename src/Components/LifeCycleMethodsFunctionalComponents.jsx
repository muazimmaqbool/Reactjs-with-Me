import React from 'react'

//Read Documentation Below:
const LifeCycleMethodsFunctionalComponents = () => {
  return (
    <div>LifeCycleMethodsFunctionalComponents</div>
  )
}

export default LifeCycleMethodsFunctionalComponents
/*
REACT FUNCTIONAL COMPONENT LIFECYCLE:
        The React component lifecycle refers to the series of phases that a React component goes through, 
        from its creation and rendering to updates and eventual removal from the DOM. 
        While the traditional lifecycle methods are associated with class components, the introduction of hooks has 
        provided a more versatile way to manage component behaviour in functional components.

            There are 3 phases in the React Component LifeCycle:
            1. Mounting Phase
            2. Updating Phase
            3. Un-Mounting Phase

    ->Mounting Phase :
        During the mounting phase, a functional component is being created and added to the DOM. 
        In this phase, you typically initialise state and perform any setup that’s needed when the component is first rendered.
            useState: The useState hook allows you to add state to your functional components. 
                      it replaces the need for a constructor and this.state in class components. 
                      You can initialise state and retrieve the current value and a function to update it.
            useEffect: The useEffect hook with an empty dependency array simulates the componentDidMount lifecycle method.
                       It runs the provided function after the component is first rendered. 
                       This is a good place to perform data fetching or initial setup.

    ->Updating Phase :
        In the updating phase, the functional component is re-rendered due to changes in its props or state. 
        You can use the useEffect hook without an empty dependency array to achieve behaviour similar to componentDidUpdate.
            useEffect : By using the useEffect hook without a dependency array, you can simulate the behaviour of componentDidUpdate.
                        The provided function will run on every render.
    
    Unmounting Phase:
        In the unmounting phase, the functional component is being removed from the DOM. The cleanup function in the useEffect hook simulates the behaviour of componentWillUnmount.
            useEffect : By returning a function from the useEffect hook, you can specify cleanup operations to be 
            performed when the component is unmounted.

*/