import React, { Component } from 'react'

class Game extends Component {
  constructor (props) {
    super(props)
    const initValuesArray = this.makeNewQuestion()
    this.state = {
      value1: initValuesArray[0],
      value2: initValuesArray[1],
      value3: initValuesArray[2],
      proposedAnswer: initValuesArray[3]
    }
  }

  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer]
  }

  updateState = () => {
    const newValuesArray = this.makeNewQuestion()
    this.setState({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3]
    })
  }

  handleAnswer = event => {
    const { value1, value2, value3, proposedAnswer } = this.state
    const selectedAnswer = event.target.name
    const sumIsEqual = (value1 + value2 + value3) === proposedAnswer
    console.log((value1 + value2 + value3), proposedAnswer, 'handle :', sumIsEqual)
    this.props.handleAnswer((selectedAnswer === 'true' && sumIsEqual) ||
                            (selectedAnswer === 'false' && !sumIsEqual))
    this.updateState()                            
  }
  
  render() {
    const { value1, value2, value3, proposedAnswer } = this.state
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name='true'>True</button>
        <button onClick={this.handleAnswer} name='false'>False</button>
      </div>
    )
  }
}

export default Game