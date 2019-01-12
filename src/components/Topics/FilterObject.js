import React, {Component} from 'react'
import '../../index.css'

class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unfilteredArray: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
      filteredArray: [],
      input: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  filterProfiles = () => {
    let filteredProfiles = this.state.unfilteredArray.filter( (profile, index) => {
      return profile.hasOwnProperty(this.state.input.toLowerCase())
    })
    this.setState({
      filteredArray: filteredProfiles
    })
  }

  render () {

    console.log(this.state.filteredArray)

    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
        <input onChange={this.handleInput} className="inputLine"/>
        <button onClick={this.filterProfiles} className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject
