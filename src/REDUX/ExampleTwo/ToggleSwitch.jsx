import React from "react";
import { useDispatch ,useSelector} from "react-redux";
//useDispatch is used to trigger/call our action
//useSelector is used to access value from the state

const ToggleSwitch = () => {
    const{ switchValue}=useSelector(state=>state.switchExample)
    const dispatch=useDispatch()

    const changeSwitchValue=()=>{
        dispatch({
            type:"toggleSwitch"
        })
    }
  return (
    <>
      <h3>Switch is :{switchValue ? "ON":"OFF"}</h3>
      <button onClick={changeSwitchValue}>{`Turn Switch ${switchValue?"OFF":"ON"}`}</button>
    </>
  );
};

export default ToggleSwitch;
