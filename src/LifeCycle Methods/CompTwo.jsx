import React from 'react';

class CompTwo extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log("Component Two Mounted");
  }
  
  componentWillUnmount(){
    console.log("Component Two UnMounted");
  }
  render(){
    return (
      <p className='two'>Comp <span>Two</span></p>
    )
  }
}

export default CompTwo