import React from "react";

//Read Documentation Below:
const Unmounting = () => {
  return (
    <div>
      <h2>Unmounting</h2>
      <Example />
    </div>
  );
};

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() { //called when component is loaded
    console.log("Mounted...");
  }

  componentDidUpdate() { //called when component is updated
    console.log("Updated..");
  }

  componentWillUnmount(){ //called just before component is removed/unmounted 
    console.log("Unmounting...")
    //to see it properly use StrictMode in index.js
  }

  render() {
    return (
      <div>
        <p>componentWillUnmount()</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}

export default Unmounting;

/*
->Unmounting
    The next phase in the lifecycle is when a component is removed from the DOM, or unmounted as 
    React likes to call it.
    React has only one built-in method that gets called when a component is unmounted:
        -> componentWillUnmount() : called when the component is about to be removed from the DOM.
    ->To understand it with better example we will use react router dom
      -> creating another component UnMountingExample.jsx -> then inside we will use react router dom to see componentWillUnmount
*/
