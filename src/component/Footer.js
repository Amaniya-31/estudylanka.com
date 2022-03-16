import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const copy = <FontAwesomeIcon icon={faCopyright} />
const email = <FontAwesomeIcon icon={faEnvelope} />
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
const fb = <FontAwesomeIcon icon={faFacebook} />

function Footer() {
    return (
        <div>
            <div className="ftrBg">
                <h4 className="ftrPs">Contact Us</h4>
                <p className="ftrPs">{email} Email : estudylanka@gmail.com </p>
                <p className="ftrPs">{whatsapp} WhatsApp : +94 769407802 </p>
                <p className="ftrPs">{fb} Facebook : EStudyLanka </p>
                <hr className="divdi"></hr>
                <p className="ftrP">{copy} 2021 All Rights Reserved - <a href="https://bitwebsol.web.app" >BitWeb Solutions</a></p>
            </div>
        </div>
    )
}

export default Footer;