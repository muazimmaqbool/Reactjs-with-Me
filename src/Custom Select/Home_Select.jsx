import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
/*
->Creating Custom Select component:
    1)Custom Select component is created in CustomSelect.jsx file
    2)Home_Select.jsx file is created to use CustomSelect component.
    3)Home_Select component is imported and used in App.jsx file

*/
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Swift",
  "Kotlin",
  "PHP",
  "TypeScript",
];
const Home_Select = () => {
  const [language, setlanguage] = useState("");
  return (
    <div>
      <h1>Custom Select Component</h1>
      <h3>Please select your programming language:</h3>
      {/* 
        -> this is predefined select tag of html, we will create something similar from scratch in CustomSelect.jsx file
        <select value={language} onChange={(e)=>setlanguage(e.target.value)}>
            <option value="">Select Language</option>
            {
            programmingLanguages.map((lang, i)=>(
                <option key={i} value={lang}>{lang}</option>
            ))
            }
        </select> */}
      <CustomSelect
        options={programmingLanguages}
        value={language}
        onChange={setlanguage}
        placeholder="Select Language"
      />
      {language !== "" && <h3>Selected Language is: {language}</h3>}
    </div>
  );
};

export default Home_Select;
