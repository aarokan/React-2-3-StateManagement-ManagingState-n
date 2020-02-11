import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  genValue1 = Math.floor(Math.random() * 100)
  genValue2 = Math.floor(Math.random() * 100)
  genValue3 = Math.floor(Math.random() * 100)
  genProposedAnswer = Math.floor(Math.random() * 3) + this.genValue1 + this.genValue2 + this.genValue3

  state = {
    value1: this.genValue1,
    value2: this.genValue2,
    value3: this.genValue3,
    proposedAnswer: this.genProposedAnswer,
    numQuestions: 0,
    numCorrect: 0,
  }

  updateInitialValues = () => {
    this.genValue1 = Math.floor(Math.random() * 100)
    this.genValue2 = Math.floor(Math.random() * 100)
    this.genValue3 = Math.floor(Math.random() * 100)
    this.genProposedAnswer = Math.floor(Math.random() * 3) + this.genValue1 + this.genValue2 + this.genValue3
  }

  checkAnswer = (answer) => {
    const { value1, value2, value3, proposedAnswer } = this.state
    const sum = value1 + value2 + value3
    this.updateInitialValues()
    
    if ((answer && proposedAnswer === sum) || (!answer && proposedAnswer !== sum)) {
      this.setState((prevState) => ({
        value1: this.genValue1,
        value2: this.genValue2,
        value3: this.genValue3,
        proposedAnswer: this.genProposedAnswer,
        numQuestions: prevState.numQuestions + 1,
        numCorrect: prevState.numCorrect + 1
      }))
    } else {
      this.setState((prevState) => ({
        value1: this.genValue1,
        value2: this.genValue2,
        value3: this.genValue3,
        proposedAnswer: this.genProposedAnswer,
        numQuestions: prevState.numQuestions + 1,
      }))
    }
  }

  render() {
    const { value1, value2, value3, numQuestions, proposedAnswer, numCorrect } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
