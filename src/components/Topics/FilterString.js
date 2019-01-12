import React, {Component} from 'react'
import '../../index.css'

class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      filteredNames: [],
      userInput: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  filterNames = () => {
    let filteredNames = this.state.names.filter( (name, index) => {
      return name.includes(this.state.userInput)
    })
    this.setState({
      filteredNames: filteredNames
    })
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input className="inputLine" onChange={this.handleInput}/>
        <button className="confirmationButton" onClick={this.filterNames}>Filter</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredNames)}</span>
      </div>
    )
  }
}

export default FilterString
