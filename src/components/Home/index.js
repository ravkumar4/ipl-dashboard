// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamDataObj = await response.json()
    const teamDataList = teamDataObj.teams
    const updatedTeamData = teamDataList.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamList: updatedTeamData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-logo-dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-card-container">
            {teamList.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamCardDetails={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
