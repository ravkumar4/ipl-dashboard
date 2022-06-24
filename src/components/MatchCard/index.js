// Write your code here
import './index.css'

let resultClassName
const MatchCard = props => {
  const {recentMatchCard} = props
  const {
    key,
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchCard

  switch (matchStatus) {
    case 'Won':
      resultClassName = 'won'
      break

    default:
      resultClassName = 'lost'
      break
  }

  return (
    <li className="match-card-container" id={key}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={resultClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
