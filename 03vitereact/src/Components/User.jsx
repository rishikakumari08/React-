import React from 'react'

const User = (props) => {
  return (
    <>
    <div>
        <h3 className='text-3xl'>Users:</h3>
        <h4 className='text-2xl'>{props.username}</h4>
    </div>
    </>
  )
}

export default User