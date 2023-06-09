import React from "react";

const Mounting = () => {
  return (
    <div>
      <h2>Mounting</h2>
      <Example />
    </div>
  );
};

//class based component
class Example extends React.Component {
  componentDidMount() {
    //called after component is loaded/mounted/rendered in DOM
    //console.log("Mount")
    setTimeout(() => {
      console.log("Fetched..."); //showing this after component/date is loaded
    }, 2000);
  }

  render() {
    return <>componentDidMount</>;
  }
}

export default Mounting;

/*
 ->Mounting: Mounting means putting elements into the DOM.
    React has four built-in methods that gets called, in this order, when mounting a component:
        constructor() : called before anything else, when the component is initiated
        getDerivedStateFromProps() : called right before rendering the element(s) in the DOM.
        render() 
        componentDidMount() // important : called after the component is rendered.
        Note: render() is always called and its required

    ->componentDidMount():
        The componentDidMount() method is called after the component is rendered.
        inside componentDidMount() we can put things which we want to show after out component 
        is loaded/rendered here its like useEffect() its loaded automatically

 */
