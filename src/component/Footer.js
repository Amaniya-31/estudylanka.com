import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const copy = <FontAwesomeIcon icon={faCopyright} />
const email = <FontAwesomeIcon icon={faEnvelope} />

function Footer() {
    return (
        <div>
            <div className="ftrBg">
                <p className="ftrPs">{email} Email : estudylanka@gmail.com </p>
                <hr className="divdi"></hr>
                <p className="ftrP">{copy} Copyright 2021 - F. Amaniya</p>
            </div>
        </div>
    )
}

export default Footer;