import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'
import styles from "../reactRouterStyle.module.css";

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <div className={styles.container}>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout