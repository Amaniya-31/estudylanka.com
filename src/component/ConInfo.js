import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

const email = <FontAwesomeIcon icon={faEnvelope} />
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
const fb = <FontAwesomeIcon icon={faFacebook} />

function ConInfo() {
    return (
        <div>
            <div className="socialBg">
                <Navbar collapseOnSelect expand="md" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto link">
                            <p className="link">{email} Email: estudylanka @gmail.com </p>
                            <p className="link">{whatsapp} WhatsApp: +94 769407802 </p>
                            <p className="link"><a href="https://www.facebook.com/profile.php?id=100072647971306" className="link">{fb}</a>Facebook : EStudyLanka</p>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default ConInfo;