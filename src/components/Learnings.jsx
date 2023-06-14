import React from 'react'
import "./Learning.css"
import { FaPython } from 'react-icons/Fa'
import { DiJavascript1, DiReact } from 'react-icons/Di'
import { SiJulia, SiRust } from 'react-icons/si'

export const Learnings = () => {
  return (
    <section id='learnings' className='lg:h-[100vh] sm:h-[100%]'>
      <h1 className='text-center p-5 mt-6 mb-1 block text-[40px] lg:text-[50px] text-cyan-100 Neon_Effects'>Technical Skills</h1>
      <div className='grid gap-4 lg:grid-cols-3 grid-rows-3 mx-20 grid-cols-1'>
        <div className='card text-yellow-300'>
          <FaPython size={90}/>
          <br />
          Python

        </div>
        <div className='card text-yellow-500'>
          <DiJavascript1 size={90}/>
          <br />
          JavaScript
        </div>
        <div className='card text-cyan-400'>
          <DiReact size={90}/>
          <br />
          React
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        {/* <div className='card text-purple-400'>
          <SiJulia size={90}/>
          <br />
          Julia
        </div>
        <div className='card text-red-500'>
          <SiRust size={90}/>
          <br />
          Rust
        </div> */}

      </div>
    </section>
  )
}
