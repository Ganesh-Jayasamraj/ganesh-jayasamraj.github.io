import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Learning_More_Section } from './components/Learning/Learning_More_Section.jsx'
import { TL_Coding } from './components/Timeline/TL_Coding.jsx'
import { TL_Others } from './components/Timeline/TL_Others.jsx'
import { Music } from './components/Music/Music.jsx'


export const Warning = () => {
  return (
    <div className='warning text-white text-sm lg:text-xl'>
      Warning <br />
      This website is still under development <br />
      There are difference in mobile and pc version
    </div>
  )
}

export const Need_To_Do = () => {
  return (
    <div className='log text-white text-xs lg:text-sm'>
      To Do <br />
      1. Replace Photo <br />
      2. Create Project section <br />
      3. Snappin every section in view port <br />
      4. Time Line section for mobile <br />
      5. Contact Section <br />
      6. Media Player
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
        <Route path='/others_TL' element={<TL_Others />}/>
        <Route path='/music' element={<Music />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Warning />
    <Need_To_Do />
    <Main />
  </React.StrictMode>,
)
