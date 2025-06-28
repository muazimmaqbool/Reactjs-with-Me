import React from 'react'
import styles from "../reactRouterStyle.module.css"
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <div className={styles.contactBtns}>
        <button onClick={()=>navigate("info")}>Contact Info</button>
        <button onClick={()=>navigate("form")}>Contact Form</button>
      </div>
    </div>
  )
}

export default Contact