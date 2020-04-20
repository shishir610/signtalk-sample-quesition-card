import React from 'react'
import Topbar from './Topbar'
import Submit from './Submit'
import Question from './Question'
import questionsData from '../questions.js'

class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            questionNumber: 0,
            questions: questionsData
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        if (this.state.questions.length-1 > this.state.questionNumber) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    questionNumber: prevState.questionNumber + 1
                }
            })
        }
        console.log(this.state.questionNumber)
    }
    render() {
        return (
            <div>
                <Topbar questionNumber={this.state.questionNumber} />
                <Question question={this.state.questions} questionNumber={this.state.questionNumber} />
                <Submit handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Card