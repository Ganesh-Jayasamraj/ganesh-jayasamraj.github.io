import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Warning = () => {
  return (
    <div>
      This website is still in development
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Warning />
    <App />
  </React.StrictMode>,
)
