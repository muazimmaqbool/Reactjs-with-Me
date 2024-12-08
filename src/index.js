import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./REDUX/store";

//we are accessing the element(inside public > index.html) which has "root" id, then we are using render method on it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

//what is strict mode? ->
  //Means in development and not in deployment , it will render every component twice
  /*
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  
  */
