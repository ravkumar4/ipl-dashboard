// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

let teamBGColor
class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatchCard: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchesData = await response.json()
    const updatedMatchDetails = {
      umpires: matchesData.latest_match_details.umpires,
      result: matchesData.latest_match_details.result,
      manOfTheMatch: matchesData.latest_match_details.man_of_the_match,
      id: matchesData.latest_match_details.id,
      date: matchesData.latest_match_details.date,
      venue: matchesData.latest_match_details.venue,
      competingTeam: matchesData.latest_match_details.competing_team,
      competingTeamLogo: matchesData.latest_match_details.competing_team_logo,
      firstInnings: matchesData.latest_match_details.first_innings,
      secondInnings: matchesData.latest_match_details.second_innings,
      matchStatus: matchesData.latest_match_details.match_status,
    }
    const updatedRecentMatches = matchesData.recent_matches.map(eachMatch => ({
      competingTeamLogo: eachMatch.competing_team_logo,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamBannerUrl: matchesData.team_banner_url,
      latestMatchDetails: updatedMatchDetails,
      recentMatchCard: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        teamBGColor = 'bg-RCB'
        break
      case 'CSK':
        teamBGColor = 'bg-CSK'
        break
      case 'KKR':
        teamBGColor = 'bg-KKR'
        break
      case 'KXP':
        teamBGColor = 'bg-KXP'
        break
      case 'RR':
        teamBGColor = 'bg-RR'
        break
      case 'MI':
        teamBGColor = 'bg-MI'
        break
      case 'SH':
        teamBGColor = 'bg-SH'
        break
      default:
        teamBGColor = 'bg-DC'
        break
    }
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatchCard,
      isLoading,
    } = this.state
    return (
      <div className={`matches-container ${teamBGColor}`}>
        <div className="banner-container">
          <img src={teamBannerUrl} alt="team banner" className="banner" />
        </div>
        <ul className="matches-item-list-container">
          <h1 className="latest-match-heading">Latest Matches</h1>
          <LatestMatch
            key={latestMatchDetails.id}
            latestMatchDetails={latestMatchDetails}
            isLoading={isLoading}
          />
        </ul>
        <ul className="recent-matches-container">
          {recentMatchCard.map(eachMatchCard => (
            <MatchCard
              key={eachMatchCard.id}
              recentMatchCard={eachMatchCard}
              isLoading={isLoading}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
