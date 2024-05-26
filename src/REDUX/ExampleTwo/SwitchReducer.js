import { createReducer } from "@reduxjs/toolkit";

const initialState={
    switchValue:false,
}

export const switchReducer=createReducer(initialState,{
    toggleSwitch:(state)=>{
        state.switchValue=!state.switchValue;
    }
})