import React, {Component} from 'react'
import '../../index.css'


class Sum extends Component {
  constructor () {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleNumber1 = (event) => {
    this.setState({
      number1: event.target.value
    })
  }

  handleNumber2 = (event) => {
    this.setState({
      number2: event.target.value
    })
  }

  addSum = () => {
    let sum = parseInt(this.state.number1) + parseInt(this.state.number2)
    console.log(sum)
    this.setState({
      sum: sum
    })
  }


  render () {

    console.log(this.state)

    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input onChange={this.handleNumber1} className="inputLine" type="number"/>
        <input onChange={this.handleNumber2} className="inputLine" type="number"/>
        <button className="confirmationButton" onClick={this.addSum}>Total</button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    )
  }
}

export default Sum
