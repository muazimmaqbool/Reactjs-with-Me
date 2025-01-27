import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//Called from Routing.jsx
const Section = () => {
  const params = useParams(); //used to get id
  //console.log("id received:", params.enroll);

  const navigation = useNavigate();
  return (
    <div>
      <h4>Section</h4>
      <h5>
        {params.enroll === "6655"
          ? "Your section is Cse B"
          : "Your section is Cse A"}
      </h5>
      <button onClick={()=>navigation('/')}>Go To Home Page</button>
    </div>
  );
};

export default Section;
