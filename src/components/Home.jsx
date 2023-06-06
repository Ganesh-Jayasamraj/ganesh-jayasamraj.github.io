import './Home.css'

import React from 'react'

export const Home = () => {

  const openCV = () => {
    fetch('Resume.pdf').then(response => [
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
                alink.href = fileURL;
                alink.click();
      })
    ])
  }

  return (
    <section id='#' className='h-[100vh] flex bg-gradient-to-r from-gray-100 to-60% via-white to-sky-400'>
    {/* <section id='#' className='h-[100vh] flex'> */}
      <div className='w-[50%] text-center place-self-center translate-y-[-8rem]'>
        <h1 className=' rotate-[-10deg] text-[75px] my-[4rem]'>Greetings</h1>
        <h2 className=' text-4xl'>I'm Ganesh</h2>
        <br />
        <p className=' text-2xl'>I'm Just a random guy, <br /> Who loves computer and stuff</p>
        <button className=' px-5 py-3 mx-6 my-9 rounded-md bg-orange-600 text-white'> <a href="#contact"> Say Hello to me </a></button>
        <button id='CV' onClick={openCV} className=' px-5 py-3 mx-6 my-9 rounded-md bg-blue-400 text-white'> My Resume </button>
      </div>
      <div className='w-[50%] text-center place-self-center translate-y-[-8rem]'>
        <p>Hello</p>
      </div>
    </section>
  )
}
