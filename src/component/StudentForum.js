import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const exc = <FontAwesomeIcon icon={faExclamationCircle} />

function StudentForum() {
    return (
        <div>
            <div style={{ margin: '50px' }}>
                <h1> {exc} Under development</h1>
            </div>
        </div>
    )
}

export default StudentForum;