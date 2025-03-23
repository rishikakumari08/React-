import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const handleLogin=()=>
    {setTimeout(()=>{
        alert('Login succefully');
        navigate('/dashboard');
    })}
  return (
    <>
    <div className='text-center p-20'>
        <h1>Login Page</h1>
        <button onClick={handleLogin} className="bg-green-500 text-white p-2">Login</button>
    </div>
    </>
  )
}

export default Login