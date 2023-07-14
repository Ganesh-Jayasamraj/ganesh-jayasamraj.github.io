import React, { useState, useRef, useEffect } from 'react'
import M_Data from './Music.json'

import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs'

export const Music = () => {

  const [songs, setSongs] = useState(M_Data)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(M_Data[1])

  const audioElem = useRef()

  useEffect(() => {
    if(isPlaying){
      audioElem.current.play()
    }
    else{
      audioElem.current.pause()
    }
  }, [isPlaying])

  const PlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className=' bg-blue-950 h-[100vh] w-[100%] text-white'>
      <p className=' text-center text-2xl'>Testing Page for Music Player</p>
      <audio src={currentSong.URl} ref={audioElem}/>

      <div className="player_container">
        <div className="title">
          <p>{currentSong.title}</p>
        </div>

        <div className="navigation">
          <div className="navigation_wrapper">
            <div className="seek_bar w-[50%]"></div>
          </div>
        </div>
        <div className="controls">

          <BsFillSkipStartCircleFill className='btn_action' />
          {
            !isPlaying ? <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/>
          }
          <BsFillSkipEndCircleFill className='btn_action' />

        </div>
      </div>

    </div>
  )
}
