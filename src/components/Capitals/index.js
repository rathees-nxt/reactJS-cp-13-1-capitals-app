import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeActiveId = event => {
    this.setState({activeId: event.target.value})
  }

  toGetCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeId,
    )
    return activeCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.toGetCountry(activeId)
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeActiveId}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachList => (
                <option
                  className="capital-option"
                  key={eachList.id}
                  value={eachList.id}
                >
                  {eachList.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
