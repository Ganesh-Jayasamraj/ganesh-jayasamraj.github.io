import React, { useState, useRef, useEffect } from 'react'
import M_Data from './Music.json'

import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs'

export const Music = () => {

  const [songs, setSongs] = useState(M_Data)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(M_Data[0])

  const audioElem = useRef()

  useEffect(() => {
    if(isPlaying){
      audioElem.current.play()
    }
    else{
      audioElem.current.pause()
    }
  }, [isPlaying])

  // const onPlaying = () => {
  //   const duration = audioElem.current.duration;
  //   const ct = audioElem.current.currentTime;
  //   setCurrentSong({...currentSong, "Progress" : ct / duration * 100, "length": duration})
  // }


  // No idea What to do
  // const autoSkip = () => {
  //   const duration = audioElem.current.duration;
  //   const ct = audioElem.current.currentTime;
  //   if (ct == duration){
  //     skipNext()
  //   }
  // }

  const PlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const skipBack = () => {
    const index = songs.findIndex(x => x.title == currentSong.title)
    if (index == 0) {
      setCurrentSong(songs[songs.length-1])
    }
    else {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0
  }

  const skipNext = () => {
    const index = songs.findIndex(x => x.title == currentSong.title)
    if (index == songs.length - 1) {
      setCurrentSong(songs[0])
    }
    else {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0
  }

  return (
    <div className=' bg-blue-950 h-[100vh] w-[100%] text-white'>
      <p className=' text-center text-2xl'>Testing Page for Music Player</p>
      {/* <audio src={currentSong.URl} ref={audioElem} onTimeUpdate={onPlaying}/> */}
      <audio src={currentSong.URl} ref={audioElem} autoPlay />

      <div className="player_container">
        <div className="title">
          <p>{currentSong.title}</p>
        </div>

        {/* <div className="navigation">
          <div className="navigation_wrapper">
            <div className="seek_bar" style={{width: `${currentSong.Progress+"%"}`}}></div>
          </div>
        </div> */}
        <div className="controls">

          <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack} />
          {
            !isPlaying ? <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/>
          }
          <BsFillSkipEndCircleFill className='btn_action' onClick={skipNext} />

        </div>
      </div>

    </div>
  )
}
