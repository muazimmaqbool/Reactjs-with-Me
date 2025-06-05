import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./REDUX/store";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient=new QueryClient({ //creating a queryClient instance
  //will be applied to all the queries in the app, we can apply them separately also to each query
  // defaultOptions:{
  //   queries:{
  //     staleTime:1000*60
  //   }
  // }
});

//we are accessing the element(inside public > index.html) which has "root" id, then we are using render method on it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
      <ReactQueryDevtools initialIsOpen={false}/>
    </Provider>
  </QueryClientProvider>
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
