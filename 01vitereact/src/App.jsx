import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount(count+1);
  }
  
  const removeValue=()=>{
    if(count==0){
      return;
    }
    setCount(count-1);
  }
  
  return (
   <>
   <h1>Counter project</h1>
   <h3>Counter value: {count}</h3>
   <button onClick={addValue}>Add value</button>
   <br />
   <button onClick={removeValue}>Remove value</button>
   </>
  )
}

export default App
