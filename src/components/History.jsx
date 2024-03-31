import React from 'react'
import HistoryData from '../historymApi/HistoryData'
const History = () => {

  return (
    <>
        <div>
          {
            HistoryData.map((players,i) => (
              <div className='black-layer' key={i}>
              <div className='match-post'>
                <p className='date'>Date & Day :  {players.timeStamp.day} { players.timeStamp.date}</p>
              <div className='complete-match'>
                 <div className='team team1'>
                     <h2>{players.team1.captain}</h2>
                     <p>{players.team1.player1}</p>
                     <p>{players.team1.player2}</p>
                     <p>{players.team1.player3}</p>
                     <p>{players.team1.player4}</p>
                     <p>{players.team1.player5}</p>
                     <p>{players.team1.player6}</p>
                     <p>{players.team1.player7}</p>
                 </div>
                 <div className='team team2'>
                     <h2>{players.team2.captain}</h2>
                     <p>{players.team2.player1}</p>
                     <p>{players.team2.player2}</p>
                     <p>{players.team2.player3}</p>
                     <p>{players.team2.player4}</p>
                     <p>{players.team2.player5}</p>
                     <p>{players.team2.player6}</p>
                     <p>{players.team2.player7}</p>
                 </div>
              </div>
              <div className='final-score goalscorers'>4-3 </div>
              <div className='goalscorers'>Goal Scorers</div>
              <div className="team-scorers">
                 <div className="scorers1 ">
                   <div>
                      <h4>{players.team1.goalscorers[0]} </h4>
                      <h4>{players.team1.goalscorers[1]} </h4>
                      <h4>{players.team1.goalscorers[2]} </h4>
                   </div>
                 </div>
                 <div className="scorers1 ">
                   <div>
                      <h4>{players.team2.goalscorers[0]} </h4>
                      <h4>{players.team2.goalscorers[1]} </h4>
                      <h4>{players.team2.goalscorers[2]} </h4>
                   </div>
                 </div>
                </div>
              </div> 
              </div> //black layers end  
            ))
          }
        </div>
    </>
  )
}

export default History