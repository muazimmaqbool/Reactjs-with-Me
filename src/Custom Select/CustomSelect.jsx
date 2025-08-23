import React, { useState, useRef, useEffect } from "react";
import styles from "./select.module.css";

//called from Home_Select.jsx
/*
->This will be called like this:
  <Select // or CustomSelect
    options={["React", "Vue", "Angular"]}
    value={selectedFramework}
    onChange={setSelectedFramework}
  />
*/
const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  const [open, setopen] = useState(false);
  const ref = useRef();
  return (
    <div ref={ref} className={styles.container}>
      {/*selected value */}
      <div
        onClick={() => setopen((prev) => !prev)}
        className={styles.selectedValue}
      >
        {value || placeholder}
      </div>
      {/*dropdown options */}
      {open && (
        <ul>
          {options?.map((option, i) => (
            <li
              onClick={() => {
                onChange(option);
                setopen(false);
              }}
              key={i}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
