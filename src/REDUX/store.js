import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store=configureStore({
    //inside this reducer we can have multiple reducer it will combine them by own
    //we can create seperate file for reducer i.e Reducers.js
    reducer:{
        custom:customReducer,
    },
});

export default store