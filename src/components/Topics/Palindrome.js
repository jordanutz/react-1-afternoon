import React, {Component} from 'react'
import '../../index.css'

class Palindrome extends Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  testPalindrome = () => {
    let palindrome = this.state.userInput.split('').reverse().join('')
    if (palindrome === this.state.userInput) {
        this.setState({
          palindrome: 'true'
        })
      } else {
        this.setState({
          palindrome: 'false'
        })
      }
    }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={this.handleInput}/>
        <button className="confirmationButton" onClick={this.testPalindrome}>Palindrome</button>
        <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}

export default Palindrome
