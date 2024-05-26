import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";
import { switchReducer } from "./ExampleTwo/SwitchReducer";

const store=configureStore({
    //inside this we have reducers
    //we can have multiple reducer it will combine them by own
    //we can create seperate file for reducer i.e Reducers.js
    reducer:{
        custom:customReducer,
        switchExample:switchReducer
    },
});

export default store