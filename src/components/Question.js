import React from 'react';

function Question(props) {
    return(
        <div className="question-answer">
            <h2 className="question">{props.question[props.questionNumber].question}</h2>
            <span>
                <input type="radio" id="1" name="answer" value={props.options} />
                <label htmlFor="male">1</label><br />
            </span>
            <span>
                <input type="radio" id="2" name="answer" value={props.options} />
                <label htmlFor="male">2</label><br />
            </span>
            <span>
                <input type="radio" id="3" name="answer" value={props.options} />
                <label htmlFor="male">3</label><br />
            </span>
            <span>
                <input type="radio" id="4" name="answer" value={props.options} />
                <label htmlFor="male">4</label><br />
            </span>
        </div>
    )
}

export default Question