import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const supportInfo = [
  {
    id: 1,
    number: "+1-800-123-4567",
    email: "support@example.com",
    location: "New York, USA"
  },
  {
    id: 2,
    number: "+44-20-7946-0958",
    email: "helpdesk@company.co.uk",
    location: "London, UK"
  },
  {
    id: 3,
    number: "+91-9876543210",
    email: "care@service.in",
    location: "Mumbai, India"
  },
  {
    id: 4,
    number: "+61-2-9374-4000",
    email: "contact@support.au",
    location: "Sydney, Australia"
  },
  {
    id: 5,
    number: "+81-3-1234-5678",
    email: "support@japan.co.jp",
    location: "Tokyo, Japan"
  }
];

const Support = () => {
    const {id}=useParams();
    //console.log(id)
    const [info, setinfo] = useState({});
    useEffect(() => {
        if(id){
            setinfo(supportInfo.find(info => info.id === parseInt(id)));
        }
    }, [id]);
  return (
    <div>
        <h3>Support</h3>
        {info ? (
        <div>
          <p><strong>ID:</strong> {info.id}</p>
          <p><strong>Phone:</strong> {info.number}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Location:</strong> {info.location}</p>
        </div>
      ) : (
        <p>No support info found for ID {id}</p>
      )}
    </div>
  )
}

export default Support