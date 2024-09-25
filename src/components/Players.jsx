import React,{useEffect} from 'react'

import PlayersData from '../apiPlayers/PlayersData'
const Players = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
       <div className='player-container'>
        {
            PlayersData.map((player,i) => (
                <div className='single-player' key={i}>
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
