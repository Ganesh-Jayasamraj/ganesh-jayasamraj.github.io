import React, {useState} from 'react'
import './Music_player.css'
import { BsFillPlayFill } from 'react-icons/Bs'
import { BsFillPauseFill } from 'react-icons/Bs'
import { BiSkipNext } from 'react-icons/bi'
import { BiSkipPrevious } from 'react-icons/bi'
import { BsArrowDownLeftCircle } from 'react-icons/Bs'
import { BsArrowUpRightCircle } from 'react-icons/Bs'



export const Music_player = () => {
  const [Play, setPlay] = useState(true)
  const [isExpand, setisExpand] = useState (true)

  const toggleExpand = () => {
    setisExpand(!isExpand)
  }

  const togglePlay = () => {
    setPlay(!Play)
  }

  return (
      <div className='Mu_player'>
        <button className='expand' onClick={toggleExpand}>
          {isExpand ? <BsArrowDownLeftCircle /> : <BsArrowUpRightCircle />}
        </button>
          <div className='Mu_player_buttons'>
            <button className='bi'><BiSkipPrevious /></button>
            <button className='play' onClick={togglePlay}>
              {Play ? <BsFillPlayFill />: <BsFillPauseFill />}
            </button>
            <button className='bi'><BiSkipNext /></button>
          </div>
          <div className='Mu_des'>
            <p>Track_name</p>
            <p>Author</p>
          </div>
      </div>
  )
}
