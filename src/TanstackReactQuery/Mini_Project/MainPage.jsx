import React from 'react'
import PostList from './Component/PostList'
import styles from "./projectStyles.module.css"

/*
->We are going to need some APIs for this project for that we will download a package called "json server" (npm i json-server)
  -Basically this package helps us create some mock APIs from the json data
  -So inside API folder we will create data.json file for json data and api.js file which will contain methods for performing operations
    on this json data inside data.json file
  -Now run this command: npx json-server (location of json file)
                 here: npx json-server src\TanstackReactQuery\Mini_Project\API\data.json
                 (Note if any error occur remove the tags array from data.json and when it runs past it back)
                 - it will create two endpoints like this:  Endpoints:
                                                            http://localhost:3000/posts
                                                            http://localhost:3000/tags
                                        - hold and click on these links they will open in browser

  -And this json server not only supports the GET request it also provides us the POST, PUT, PATCH and DELETE requests as well.

->Now post List component is added which will contain posts

->Note: we are also using react query dev tools:
    -make sure you have installed this package:npm i @tanstack/react-query-devtools
    -now inside the file where you are wrapping your app like here in index.js
      import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
      import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

      const queryClient=new QueryClient(); //creating a queryClient instance

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
            <ReactQueryDevtools initialIsOpen={false}/>
          </Provider>
        </QueryClientProvider>
      );
    - Now you will see small tanstack icon in the bottom in the browser click on that
      you will see the dev tools of react query. now you can click on the query and see its data and much more
*/
const MainPage = () => {
  return (
    <div>
      <h2 className={styles.title}>My Posts</h2>
      <PostList/>
    </div>
  )
}

export default MainPage