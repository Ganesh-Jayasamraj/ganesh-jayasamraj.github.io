import './Home.css'
import '../Fonts/Scriptina/SCRIPALT.ttf'

import React from 'react'

export const Home = () => {

  const openCV = () => {
    fetch('Resume.pdf').then(response => [
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
                alink.href = fileURL;
                alink.target="_blank";
                alink.click();
      })
    ])
  }

  return (
    <section id='#' className='h-[100vh] flex bg-blue-950'>
    {/* <section id='#' className='h-[100vh] flex'> */}
      <div className='w-[50%] text-center place-self-center translate-y-[-8rem] text-cyan-300'>
        <h1 className=' text-[90px] my-[8rem] Scriptina_font fon text_skew ml-[-2rem] '>Greetings Everyone</h1>
        <h2 className=' text-[60px] text-cyan-400'>I'm Ganesh</h2>
        <br />
        <p className=' text-2xl text-cyan-400'>I'm Just a random guy, <br /> Who loves computer and stuff</p>
        <a href="#contact">
          <button className=' px-5 py-3 mx-6 my-9 rounded-md bg-orange-600 text-white'>  Say Hello to me </button>
        </a>
        <button id='CV' onClick={openCV} className=' px-5 py-3 mx-6 my-9 rounded-md bg-blue-400 text-white'> My Resume </button>
      </div>
      <div className='w-[50%] text-center place-self-center translate-y-[-8rem]'>
        <p>Hello</p>
      </div>
    </section>
  )
}
