import React, { useEffect, useState } from "react";
import axios from "axios";

/*
Basic intro: Axios is a lightweight package and it's used to make Http requests in any js library (like react, angular or vue.js)
->Axios is easy to use version of fetch (its an upgraded version of fetch)

Main difference between Axios and Fetch:
 ->Axios converts data to json format directly while fetch doesn't convert directly we have to tell it
 see more on notes

 ->To install Axios run this command: npm install axios
 
*/
const Axios = () => {
  return (
    <>
      <h3>Axios Tutorials</h3>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3/> */}
      {/* <Example4 /> */}
      <Example5 />
    </>
  );
};

function Example1() {
  //Axios with promises
  //using useEffect to run it when component loads
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response.data)); // or response
    //here we don't need to convert it into json format as axios does it by default (it works by default on json format)
  }, []);

  return <h4>Example 1</h4>;
}

//In Example 2 we will display data on the screen using loops
//to display data we first need to store the data, we use useState to do that
function Example2() {
  const [data, setData] = useState([]); 
  //the data which api is getting is an array that's why we pass initial data as empty array [] in useState

  const getPost = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>
      //console.log(response.data)
      setData(response.data)
    );
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h4>Example 2: displaying data using map()</h4>
      <div className="grid">
        {data.map((getpost) => {
          const { id, title, body } = getpost;
          return (
            <div className="card" key={id}>
              {/* style classes are in App.css file */}
              {/* displaying only first 15 letters of title the empty spaces will also be considered*/}
              <h3>{title.slice(0, 15).toUpperCase()}</h3>
              <p>{body.slice(0, 100)}</p>

              {/* .slice(0,100) display characters form 0 to 100 */}
            </div>
          );
        })}
      </div>
      {/* getpost contains each element of the data array and it has three properties i.e id,titile,body */}
    </>
  );
}

//Handling errors
const Example3 = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(""); //used to show error on screen

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      //.catch((error)=>console.log(error)) //showing error in console
      .catch((error) => {
        setError(error.message); //used to show errors on screen
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h4>Example 3: handling and displaying errors</h4>
      {
        isError !== "" && <h2>Error: {isError}</h2>
        //means when isError is not empty so when there is an error isError will not be empty then
        //show error message using h2 tags if there is error then isError will mot be empty and this code will not run
      }
      <div className="grid">
        {data.map((getpost) => {
          const { id, title, body } = getpost;
          return (
            <div className="card" key={id}>
              <h3>{title.slice(0, 15).toUpperCase()}</h3>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

//Axios with async-await
function Example4() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [isError, setError] = useState("");

  const getAPIdata = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message); //we print error message
    }
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <>
      <h4>Example 4: Axios with async-await</h4>
      {isError !== "" && <h2>Error: {isError}</h2>}
      <div className="grid">
        {data.slice(0, 10).map((getpost) => {
          //here .slice(0,10) will show data of 10 posts only
          const { id, title, body } = getpost;
          return (
            <div className="card" key={id}>
              <h3>{title.slice(0, 15).toUpperCase()}</h3>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

//Example 5 shows best way to write axios
const APIurl = "https://jsonplaceholder.typicode.com"; //now we will call it in useEffect/getAPi function
const Example5 = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState("");

  const getAPIdata = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message); //we print error message
    }
  };

  useEffect(() => {
    getAPIdata(APIurl + "/posts");
    //now here we can use different value in place of posts to get the data
  }, []);

  return (
    <>
      <h4>Example 5: Best way to write Axios</h4>
      {isError !== "" && <h2>Error: {isError}</h2>}
      <div className="grid">
        {data.slice(0, 10).map((getpost) => {
          const { id, title, body } = getpost;
          return (
            <div className="card" key={id}>
              <h3>{title.slice(0, 15).toUpperCase()}</h3>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Axios;


