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
      {/* <div className='w-[50%] text-center place-self-center translate-y-[-5rem] text-cyan-100 inline-block'> */}
      <div className='w-[50%] text-center place-self-center text-cyan-100 inline-block'>
        {/* <h1 className=' text-[90px] my-[8rem] Scriptina_font text_skew ml-[-2rem] Neon_Effects'>Greetings Everyone</h1> */}
        <br />
        <p className=' text-2xl text-cyan-300 inline-block lorem mx-40'> Got no idea what to write, So enjoy lorem <br /> <br /> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in quaerat, fuga iure iste, laborum libero nisi dicta illum quod deleniti ipsum aut repellat est eligendi ratione neque minus accusamus." </p>
        <br />
        <a href="#contact">
          <button className=' px-8 py-3 mx-10 my-9 rounded-md bg-orange-600 text-white'>  Say Hello to me </button>
        </a>
        <button id='CV' onClick={openCV} className=' px-8 py-3 mx-10 my-9 rounded-md bg-blue-500 text-white'> My Resume </button>
      </div>

      <div className='w-[45%] text-center place-self-center'>
        <h1 className=' text-[90px] mt-[-10rem] Scriptina_font text_skew text-cyan-100 Neon_Effects'>Greetings Everyone</h1>
        <p className='text-[80px] Scriptina_font text_skew mt-[5rem] text-cyan-100 Neon_Effects'>I'm Ganesh</p>
      </div>
    </section>
  )
}
