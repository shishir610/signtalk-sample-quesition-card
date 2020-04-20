import React from 'react';
import '../styles.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Topbar(props) {
    const question = 10 * props.questionNumber
    return (
        <div className="progress-bar">
            <ProgressBar animated now={question} striped variant="success" />
        </div>
    )
}

export default Topbar