import React, { useEffect, useState } from 'react'
import {Typography } from '@mui/material';
import axios from 'axios'
import './Home.css'



const Home = () => {
  let [employees, setEmployees]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      setEmployees(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div className='Home'>
      {/* <Typography variant="h1" gutterBottom>
        h5. Heading
      </Typography> */}
      <div className="container">
        <div className="row g-3 pt-5">
  {employees.map(user => (
    <div className="col-md-3 text-center" key={user.id}>
      <div className="card p-3 d-flex align-items-center">
        <img src="/profile.jpg" alt="" />
        <div className="card-body">
          <h5 className="card-title">{user.id}</h5>
          <p className="card-text">{user.name}</p>
          <a href="#" className="">{user.email}</a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Home
