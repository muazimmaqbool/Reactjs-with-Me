import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, {
  //here we can write multiple reducers , this will be called when action is dispatched/called
  increment: (state) => {
    // here action is optional
    state.c = state.c + 1; // or state.c += 1;
  },
  //action is used to receive parameters here
  incrementByValue: (state, action) => {
    state.c += action.payload;
  },

  decrement: (state) => {
    state.c -= 1;
  },

  decrementByValue:(state,action)=>{
    state.c-=action.payload;
  }
});

//export default Reducers
