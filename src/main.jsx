import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Password from './Password.jsx'
createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <Password/>
    </>
)
