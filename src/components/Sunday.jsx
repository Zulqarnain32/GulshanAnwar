import React,{useEffect} from 'react'
import HistoryData from '../historymApi/HistoryData'
const Sunday = () => {
  useEffect(() => {
    // window.scrollTo(0, document.body.scrollHeight); //first parameter is horizontal second parameter is vertical
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
                <h5 className='match-num'>{i+1}</h5>
                <p className='date'>Date & Day :  {players.timeStamp.day} {players.timeStamp.date}</p>
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
                    <p>{players.team1.player8}</p>
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
                <div className='final-score goalscorers'>{players.finalScore} </div>
                <div className='goalscorers'>Goal Scorers</div>
                <div className="team-scorers">
                  <div className="scorers1 ">
                    <div>
                    {players.team1.goalscorers.map((elm, i) => (
                        <div key={i}>
                          <h4>{elm}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="scorers1 ">
                    <div>

                      {players.team2.goalscorers.map((elm, i) => (
                        <div key={i}>
                          <h4>{elm}</h4>
                        </div>
                      ))}

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

export default Sunday
