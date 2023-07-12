import React from 'react'
import Coding_data from './Coding.json'
import Other_data from './Others.json'
import './Timeline.css'
import { Link } from 'react-router-dom'

export const Timeline = () => {


  // I Have No Idea What is going on in this section

  // const Timeline_obj = data.map((info)=>
  //   {
  //     return(
  //       <div>
  //         <p className=' inline'>{info.id}. </p>
  //         <p className=' inline'>{info.name}, </p>
  //         <p className=' inline'>{info.city} </p>
  //       </div>
  //     )
  //   }
  // )

  return (
    <section id='timeline' className=' hidden lg:h-[100vh] lg:flex lg:text-white'>
      <div className='w-[45%] ml-5 self-center'>
        <h1 className='title p-6 Neon_Effects'><Link to='/coding_TL'> &gt;&gt; Coding &lt;&lt; </Link></h1>
        <div className="timeline mt-[0.5rem]">
          {
            Coding_data.filter((item, i) => i < 4).map((Detail) => {
              return (
                <div className='checkpoint'>
                  <div>
                    <h2 className=' text-2xl Neon_Effects'>{Detail.Heading}</h2>
                    <p className=' text-lg text-gray-200'>{Detail.Date}</p>
                    <p className='text-base text-justify text-gray-300'>{Detail.Description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='w-[5%] flex'>
        <div className=" midline self-center center"></div>
      </div>

      <div className='w-[45%] ml-10 mr-5 self-center'>
        <h1 className='title p-6 Neon_Effects'><Link to='/Others_TL'> &gt;&gt; Others &lt;&lt; </Link></h1>
        <div className="timeline mt-[0.5rem]">
          {
            Other_data.filter((item, i) => i < 4).map((Detail) => {
              return (
                <div className='checkpoint'>
                  <div>
                    <h2 className=' text-2xl Neon_Effects'>{Detail.Heading}</h2>
                    <p className=' text-lg text-gray-200'>{Detail.Date}</p>
                    <p className=' text-base text-justify text-gray-300'>{Detail.Description}</p>
                  </div>
                </div>
              ) 
            })
          }
        </div>
      </div>

    </section>
  )
}