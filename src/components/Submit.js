import React from 'react';
import {Button} from 'react-bootstrap'

function Submit(props) {
    return(
        <div className="submit">
            <Button variant="outline-success" onClick={props.handleSubmit}>Submit</Button>{' '}
        </div>
    )
}

export default Submit