import React, {Component} from 'react'
import '../../index.css'

class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      numbers: [],
      evens: [],
      odds: []
    }
  }

  handleNumbers = (event) => {
    this.setState({
      numbers: event.target.value
    })
  }

  sortNumbers = () => {
    const numbersCopy = this.state.numbers.split(',')
    const evensCopy = []
    const oddsCopy = []
    for (let i = 0; i < numbersCopy.length; i++) {
      if (numbersCopy[i] % 2 === 0) {
        evensCopy.push(numbersCopy[i])
      }
    else {
      oddsCopy.push(numbersCopy[i])
      }
    }
    this.setState({
      evens: evensCopy,
      odds: oddsCopy,
    })
  }

  render () {

    console.log(this.state)

    const displayEvens = this.state.evens.map(number => {
      return number
    })

    const displayOdds = this.state.odds.map(number => {
      return number
    })

    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input onChange={this.handleNumbers} className="inputLine"/>
        <button onClick={this.sortNumbers} className="confirmationButton">Split</button>
        <span className="resultsBox">Evens: {displayEvens}</span>
        <span className="resultsBox">Odds: {displayOdds}</span>
      </div>
    )
  }
}

export default EvenAndOdd
