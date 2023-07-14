import './Home.css'
import '../../Fonts/Scriptina/SCRIPALT.ttf'
import Photo from '../../assets/pngwing.com.png'
// import Photo01 from '../assets/pic.png'

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
    <section id='#' className='h-[100vh] lg:flex bg-blue-950 w-[100%]'>
      <div className='w-[97%] lg:w-[50%] relative top-[5rem] lg:top-0 text-center place-self-center'>
        <h1 className=' text-[50px] lg:text-[90px] lg:mt-[-5rem] Scriptina_font text_skew text-cyan-100 Neon_Effects z-0'>Greetings Everyone</h1>
        {/* Need to change to photo */}
        <img src={Photo} className='inline-flex z-[1] w-[45%] mt-[-5rem] mb-[-10rem] lg:mt-[-18rem] lg:mb-[-24rem] grayscale'/>
        {/* <img src={Photo01} className='inline-flex z-[1] w-[30%] mt-[-5rem] mb-[-10rem] lg:mt-[-18rem] lg:mb-[-24rem] grayscale-0'/> */}
        <p className=' text-[48px] lg:text-[95px] Scriptina_font text_skew mt-[2rem] lg:mt-[2rem] text-cyan-100 Neon_Effects'>I'm Ganesh</p>
      </div>
    {/* <section id='#' className='h-[100vh] flex'> */}
      {/* <div className='w-[50%] text-center place-self-center translate-y-[-5rem] text-cyan-100 inline-block'> */}
      <div className='lg:w-[50%] lg:mt-[-5rem] mt-[5rem] text-center place-self-center text-cyan-100 inline-block'>
        {/* <h1 className=' text-[90px] my-[8rem] Scriptina_font text_skew ml-[-2rem] Neon_Effects'>Greetings Everyone</h1> */}
     
        <p className=' text-sm lg:text-2xl text-cyan-300 inline-block lorem mx-10 mt-20 mb-10 lg:my-20 lg:mx-40'> Got no idea what to write here, So enjoy "lorem" <br /> <br /> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe in quaerat, fuga iure iste, laborum libero nisi dicta illum quod deleniti ipsum aut repellat est eligendi ratione neque minus accusamus." </p>
        <br />
        <a href="#contact">
          <button className='px-4 py-3 mx-6 my-3 lg:px-8 lg:py-3 lg:mx-10 lg:my-9 rounded-md bg-orange-600 text-white'>  Say Hello to me </button>
        </a>
        <button id='CV' onClick={openCV} className=' px-4 py-3 mx-6 my-3 lg:px-8 lg:py-3 lg:mx-10 lg:my-9 rounded-md bg-blue-500 text-white'> My Resume </button>
      </div>
    </section>
  )
}