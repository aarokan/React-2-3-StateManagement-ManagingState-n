import React from 'react'

function Score(props) {
  const { numQuestions, numCorrect } = props
  return (
    <p className="text">
      Your Score: {numCorrect}/{numQuestions}
    </p>
  )
}

export default Score