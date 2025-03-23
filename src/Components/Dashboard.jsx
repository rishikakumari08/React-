import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Dashboard = () => {
    // const {id}=useParams();
  return (
    <div>
      {/* Params:{id} */}
      <h1>Dashboard</h1>
      <Outlet/>
      </div>
  )
}

export default Dashboard