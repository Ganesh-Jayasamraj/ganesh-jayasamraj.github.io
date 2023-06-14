import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


export const Warning = () => {
  return (
    <div className='warning text-white text-sm lg:text-xl'>
      This website is still under development
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Warning />
    <App />
  </React.StrictMode>,
)
