import React from 'react'

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

*/
const MainPage = () => {
  return (
    <div>MainPage</div>
  )
}

export default MainPage