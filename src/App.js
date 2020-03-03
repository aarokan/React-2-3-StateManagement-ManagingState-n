import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js'
import Score from './Score.js'

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState((prevState) => ({
        numCorrect: prevState.numCorrect + 1
      }))
    }
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1
    }))
  }
  render() {
    const { numQuestions, numCorrect } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer} />
          <Score numQuestions={numQuestions} numCorrect={numCorrect} />
        </div>
      </div>
    );
  }
}

export default App;
