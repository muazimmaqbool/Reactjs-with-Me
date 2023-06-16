import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./REDUX/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

//what is strict mode? ->
  // means in development and not in deployment , it will render every component twice
