import { useState } from 'react';
function App() {
  const [color,setColor]=useState('white');

  return (
   <>
   <div className='w-full min-h-screen flex justify-center items-center relative' style={{ backgroundColor: color }}>
      <div className='flex justify-center itmes-center w-[60%] bg-white rounded-2xl absolute bottom-10 text-white shadow-2xl'>
        <ul className='flex justify-between items-center w-full px-4 py-2'>
          <button onClick={()=>{
            setColor('red');
          }} className='bg-red-600 rounded-full px-4 py-1'>red</button>
          <button onClick={()=>{
            setColor('gray');
          }} className='bg-zinc-600 rounded-full px-4 py-1'>zinc</button>
          <button onClick={()=>{
            setColor('purple');
          }} className='bg-purple-800 rounded-full px-4 py-1 '>purple</button>
          <button onClick={()=>{
            setColor('yellow');
          }} className='bg-yellow-600 rounded-full px-4 py-1'>yellow</button>
          <button onClick={()=>{
            setColor('green');
          }} className='bg-green-600 rounded-full px-4 py-1'>green</button>
          <button onClick={()=>{
            setColor('orange');
          }} className='bg-orange-600 rounded-full px-4 py-1'>orange</button>
          <button onClick={()=>{
            setColor('pink');
          }} className='bg-pink-600 rounded-full px-4 py-1'>pink</button>
          <button onClick={()=>{
            setColor('lavender');
          }} className='bg-purple-300 rounded-full px-4 py-1'>lavender</button>
        </ul>
      </div>
   </div>
   </>
  )
}

export default App
