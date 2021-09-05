import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const copy = <FontAwesomeIcon icon={faCopyright} />
const email = <FontAwesomeIcon icon={faEnvelope} />
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />


function Footer() {
    return (
        <div>
            <div className="ftrBg">
                <p className="ftrPs">{email} Email : estudylanka@gmail.com </p>
                <p className="ftrPs">{whatsapp} WhatsApp : +94 769407802 </p>
                <hr className="divdi"></hr>
                <p className="ftrP">{copy} Copyright 2021 - F. Amaniya</p>
            </div>
        </div>
    )
}

export default Footer;