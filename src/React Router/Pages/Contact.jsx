import React from 'react'
import styles from "../reactRouterStyle.module.css"
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <ul style={{display:"flex", gap:"20px"}}>
        <li><Link to={"1"}>Support 1</Link></li>
         <li><Link to={"2"}>Support 2</Link></li>
          <li><Link to={"3"}>Support 3</Link></li>
           <li><Link to={"4"}>Support 4</Link></li>
            <li><Link to={"5"}>Support 5</Link></li>
      </ul>
      <div className={styles.contactBtns}>
        <button onClick={()=>navigate("info")}>Contact Info</button>
        <button onClick={()=>navigate("form")}>Contact Form</button>
      </div>
      
    </div>
  )
}

export default Contact