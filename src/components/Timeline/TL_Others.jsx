import React from 'react'
import './TL.css'
import Other_data from './Others.json'

export const TL_Others = () => {
  return (
    <div className='text-white'>
      <div className='w-[100vw] ml-5 self-center'>
        <h1 className='title_CODE p-4 Neon_Effects text-7xl'> &gt;&gt; Other &lt;&lt; </h1>
        <div className="timeline_CODE">
          {
            // Coding_data.filter((item, i) => i < 4).map((Detail) => {
            Other_data.map((Detail) => {
              return (
                <div className='checkpoint_CODE'>
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
    </div>
  )
}
