import React from 'react'

import PlayersData from '../apiPlayers/PlayersData'
const Players = () => {
  return (
    <>
       <div className='player-container'>
        {
            PlayersData.map((player,i) => (
                <div className='single-player'>
                    <img src={player.image} alt="" className='player-img'/>
                    <h1>Name <span>{player.name}</span></h1>
                    <h1>Age <span> {player.age}</span></h1>
                    <h1>Position <span>{player.position}</span></h1>
                </div>
            ))
        }
       </div>

    </>
  )
}

export default Players
