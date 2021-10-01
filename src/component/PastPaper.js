import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const exc = <FontAwesomeIcon icon={faExclamationCircle} />

function PastPaper() {
    return (
        <div> 
            <Container fluid>
                <div className="schlBg" title="pastpapers">
                    <h1> {exc} Under development</h1>
                </div>
            </Container>
        </div>
    )
}

export default PastPaper;