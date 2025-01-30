import React, { useEffect, useState } from "react";

const FetchAPI3 = () => {
  return <RandomImages />;
};

//Displaying random images
const url = "https://jsonplaceholder.typicode.com/photos";
const RandomImages = () => {
  const [image, setImage] = useState([]);
  const getImages = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      return setImage(result);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <h4>Random Images:</h4>
      {/* Will show only 10 images */}
      {image.slice(0, 10).map((item) => {
        return (
          <div key={item.id}>
            <p>Title: {item.title} (id={item.id})</p>
            <img src={item.url} alt="image url" />
          </div>
        );
      })}
    </>
  );
};

export default FetchAPI3;
