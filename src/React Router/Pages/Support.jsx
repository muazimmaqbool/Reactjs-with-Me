import React from 'react'
import { useParams } from 'react-router-dom'

const Support = () => {
    const {id}=useParams();
    //console.log(id)
  return (
    <div>
        <h3>Support</h3>
        <p>Id Received is : {id}</p>
    </div>
  )
}

export default Support