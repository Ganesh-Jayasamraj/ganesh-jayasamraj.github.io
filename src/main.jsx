import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Learning_More_Section } from './components/Learning_More_Section.jsx'
import { TL_Coding } from './components/TL_Coding.jsx'
import { TL_Others } from './components/TL_Others.jsx'


export const Warning = () => {
  return (
    <div className='warning text-white text-sm lg:text-xl'>
      This website is still under development
    </div>
  )
}

export const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/learnings' element={<Learning_More_Section />}/>
        <Route path='/coding_TL' element={<TL_Coding />}/>
        <Route path='/Others_TL' element={<TL_Others />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Warning />
    <Main />
  </React.StrictMode>,
)
