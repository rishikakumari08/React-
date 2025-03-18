import React from 'react'
import User from './User'

const Card = (props) => {
  return (
    <>
    <div className='bg-zinc-300 rounded-md shadow-lg w-80 p-10 m-5'>
        <div className=' px-5 flex flex-col gap-5 items-center'>
        <h2>username:{props.username}</h2>
        <h2>Age:{props.age}</h2>
        <h2>city:{props.city}</h2>
        <button className='bg-orange-800 px-3 py-2 rounded-full '>submit</button>
        </div>
    </div>
    </>
  )
}

export default Card