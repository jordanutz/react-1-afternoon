import React, { Component } from 'react';
import './index.css'
import TopicBrowser from './Components/TopicBrowser/TopicBrowser'
import EvenAndOdd from './Components/Topics/EvenAndOdd'
import FilterObject from './Components/Topics/FilterObject'
import FilterString from './Components/Topics/FilterString'
import Palindrome from './Components/Topics/Palindrome'
import Sum from './Components/Topics/Sum'

class App extends Component {
  render() {
    return (
      <div>

        <TopicBrowser />
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />

      </div>
    )
  }
}

export default App;
