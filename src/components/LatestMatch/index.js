// Write your code here
import Loader from 'react-loader-spinner'
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails, isLoading} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="match-latest-container">
      {isLoading ? (
        <div testid="loader">
          <Loader type="Oval" color="#000000" height={50} width={50} />
        </div>
      ) : (
        <div className="list-container">
          <li className="match-details-logo-container">
            <div className="match-details-section">
              <p className="latest-team-name">{competingTeam}</p>
              <p className="latest-team-date">{date}</p>
              <p className="latest-match-venue">{venue} </p>
              <p className="latest-match-result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latest-team-logo"
            />
          </li>
          <div className="innings-section">
            <p className="question">First Inning</p>
            <p className="answer">{firstInnings}</p>
            <p className="question">Second Inning</p>
            <p className="answer">{secondInnings}</p>
            <p className="question"> Man Of The Match</p>
            <p className="answer">{manOfTheMatch}</p>
            <h1 className="question"> Umpires</h1>
            <p className="answer">{umpires}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default LatestMatch
