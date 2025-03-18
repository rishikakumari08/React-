import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

const users=[
  {
    "username": "john_doe",
    "age": 25,
    "city": "New York"
  },
  {
    "username": "alice_smith",
    "age": 30,
    "city": "Los Angeles"
  },
  {
    "username": "mike_jones",
    "age": 28,
    "city": "Chicago"
  },
  {
    "username": "sara_wilson",
    "age": 22,
    "city": "Houston"
  },
  {
    "username": "david_brown",
    "age": 35,
    "city": "San Francisco"
  }
]



createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>

  {/* <div className='flex flex-wrap justify-center'>
  {users.map((elem,index)=>{
    return <Card key={index} username={elem.username} age={elem.age} city={elem.city}/>
  })}
  </div> */}
  <App/>

  </BrowserRouter>
  </>
)
