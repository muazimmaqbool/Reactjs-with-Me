import React, { useEffect } from "react";

//in functional component
/*const CompOne = () => {
  
  useEffect(()=>{
    console.log("Comp One Mounted");
    return()=>{
      console.log("Comp One UnMounted");
    }
  },[])
  return (
    <>
     <p className='one'>Comp One</p>
    </>
  )
}*/

//now in class based component

class CompOne extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //its like useEffect
    console.log("Comp One Mounted");
  }

  componentWillUnmount() {
    //its like return of useEffect
    console.log("Comp One Unmounted");
  }

  render() {
    return <p className="one">Comp One</p>;
  }
}
export default CompOne;
