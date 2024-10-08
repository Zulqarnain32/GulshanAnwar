import React, { useEffect } from 'react'
import HistoryData from '../historymApi/HistoryData'
const History = () => {
  useEffect(() => {
    // Scroll to the bottom of the page with a smooth transition when the component mounts
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <div>
        {
          HistoryData.map((players, i) => (
            <div key={i} className={`match-post ${i % 2 === 0 ? "red" : "blue"}`}>
               <h5 className='match-num'>{i + 1}</h5>
              <p className='date'>Date & Day :  {players.timeStamp.day} {players.timeStamp.date}</p>
              <div className='complete-match'>
                <div className='team team1'>
                  <h2>{players.captains.captain1}</h2>
                  {Object.keys(players.team1).map((key, index) => (
                    <p key={index}>{players.team1[key]}</p>
                  ))}
                </div>
                <div className='team team2'>
                  <h2>{players.captains.captain2}</h2>
                  {Object.keys(players.team2).map((key, index) => (
                    <p key={index}>{players.team2[key]}</p>
                  ))}
                </div>
              </div>



              <div className='final-score goalscorers'>{players.finalScore} </div>
              <div className='goalscorers'>Goal Scorers</div>
              <div className="team-scorers">
                <div className="scorers1 ">
                  <div>

                    {
                      players.goalScorers.team1Scorers.map((scorer, i) => (
                        <div key={i}>
                          <h4>{scorer}</h4>
                        </div>
                      ))
                    }
                
                  </div>
                </div>
                <div className="scorers1 ">
                  <div>
                    {
                      players.goalScorers.team2Scorers.map((scorer, i) => (
                        <div key={i}>
                          <h4>{scorer}</h4>
                        </div>
                      ))
                    }
                
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default History
