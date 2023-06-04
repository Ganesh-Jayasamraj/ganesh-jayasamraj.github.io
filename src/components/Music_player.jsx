import React from 'react'
import './Music_player.css'

export const Music_player = () => {
  return (
    <div>
        Music player
        <audio controls autoPlay src='/Music/TheWeightOfLives.mp3' type="audio/mpeg" /> 
    </div>
  )
}
