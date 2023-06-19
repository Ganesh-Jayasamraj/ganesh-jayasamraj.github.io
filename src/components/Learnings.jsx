import React from 'react'
import "./Learning.css"
import { FaPython } from 'react-icons/Fa'
import { DiJavascript1, DiReact } from 'react-icons/Di'
import { SiJulia, SiRust } from 'react-icons/si'

export const Learnings = () => {
  return (
    <section id='learnings' className='lg:h-[100vh] h-[100%]'>
      <h1 className='p-5 mt-6 mb-1 Neon_Effects Section_Heading'>Technical Skills</h1>

    {/* For Laptops */}

      <div className='lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:mx-20 hidden'>
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

        <div className='card text-purple-400'>
          <SiJulia size={90}/>
          <br />
          Julia
        </div>
        <div className='card text-red-500'>
          <SiRust size={90}/>
          <br />
          Rust
        </div>

      </div>

    {/* For Mobile */}

      <div className='grid grid-cols-2 lg:hidden mb-[6rem]'>
        <div className='card_mb text-yellow-300'>
          <FaPython size={55}/>
          <br />
          Python

        </div>
        <div className='card_mb text-yellow-500'>
          <DiJavascript1 size={55}/>
          <br />
          JavaScript
        </div>
        <div className='card_mb text-cyan-400'>
          <DiReact size={55}/>
          <br />
          React
        </div>
        <div className='card_mb text-purple-400'>
          <SiJulia size={55}/>
          <br />
          Julia
        </div>
        <div className='card_mb text-red-500'>
          <SiRust size={55}/>
          <br />
          Rust
        </div>

      </div>


    </section>
  )
}
