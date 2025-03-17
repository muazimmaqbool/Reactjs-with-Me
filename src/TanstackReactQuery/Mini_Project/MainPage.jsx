import React from 'react'
import PostList from './Component/PostList'
import styles from "./projectStyles.module.css"

/*
->We are going to need some APIs for this project for that we will download a package called "json server" (npm i json-server)
  -So this package helps us create some mock APIs from the json data
  -So inside API folder we will create data.json file for json data and api.js file which will contain methods for performing operations
    on this json data
  - now run this command: npx json-server (location of json file)
                 here: npx json-server src\TanstackReactQuery\Mini_Project\API\data.json
                 (Note if any error occur remove the tags array from data.json and when it runs past it back)
                 - it will create two endpoints like this:  Endpoints:
                                                            http://localhost:3000/posts
                                                            http://localhost:3000/tags
                                        - hold and click on these links they will open in browser

  - and this json server not only the GET request it also provides us the POST, PUT , PATCH AND DELETE REQUESTS AS WELL

->Now post List component is added which will contain posts

->Note: we are also using react query dev tools:
    - make sure you have installed this package:npm i @tanstack/react-query-devtools
    -now add in this in file where you are wrapping your app like here in index.js
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