import React from "react";

//Read Documentation Below:
const Updating = () => {
  return (
    <div>
      <h2>Updating</h2>
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
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    //console.log(this.state.count); // used to explain shouldComponentUpdate
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
    //console.log(this.state.count);
  }

  componentDidMount() {
    console.log("Mounted...");
  }

  /*
  if shouldComponentUpdate returns false then no re-render is done 
  count value will not change neither componentDidUpdate() will be called 
  NOTE: when we click on the button the Count will update but not on UI , try console.log inside increment and decrement 
*/
  shouldComponentUpdate() {
    return true; //if its false no change can be made to component i.e Add and Minus buttons won't work to make them work do: return false
    // its default value is true
  }

  //will be called whenever count value is updated
  componentDidUpdate() {
    console.log("Updated Count");
  }
  render() {
    return (
      <>
        <p>componentDidUpdate and shouldComponentUpdate</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Minus</button>
      </>
    );
  }
}

export default Updating;
/*
->Updating: The next phase in the lifecycle is when a component is updated.
        A component is updated whenever there is a change in the component's state or props.
        React has five built-in methods that gets called, in this order, when a component is updated:
        getDerivedStateFromProps()
        shouldComponentUpdate() //important
        render()
        getSnapshotBeforeUpdate()
        componentDidUpdate() //important

    ->componentDidUpdate() //used for render, jaise hee render hoga ye call hoga
        The componentDidUpdate method is called after the component is updated in the DOM.
        'jaise hee kuch be data change hota hain tabi re-render karna hain auske liye hain"

    ->shouldComponentUpdate() 
        In the shouldComponentUpdate() method you can return a Boolean value that specifies whether
        React should continue with the rendering or not.
        The default value is true.
         shouldComponentUpdate() {
                return false/true; //default is true so use it only when you want false
            }
        ager shouldComponentUpdate() false huva tou componentDidUpdate() will never be called
        

*/
