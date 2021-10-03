import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import ContactUs from './ContactUs';

const school = <FontAwesomeIcon icon={faSchool} style={{ color: '#ffd900', marginRight: '10px' }} />
const uni = <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#ffd900', marginRight: '10px' }} />
const pastpapers = <FontAwesomeIcon icon={faFileAlt} style={{ color: '#ffd900', marginRight: '10px' }} />

function Landing() {
    return (
        <div>
            <div className="page">
                <h2>Striving to be a guide for school <br /> children and teachers</h2>
                <h2 style={{fontSize: '22px', marginTop: '10px'}}>Find qualified and experienced tutors at eStudyLanka to guide you</h2>
                <Button className="btn2" type="button"><strong>READ MORE</strong></Button>
            </div>

            <div className="listcontain">
                <div className="listbox">
                    <p className="listp"><Link to="/internaional-schools" className="listp">{school} International Schools</Link></p>
                </div>
                <div className="listbox">
                    <p className="listp"><Link to="/universities" className="listp">{uni} Universities</Link></p>
                </div>
                <div className="listbox">
                    <p className="listp"><Link to="/past-papers" className="listp">{pastpapers}Past Papers</Link></p>
                </div>
            </div>

            <ContactUs />
        </div>
    )
}

export default Landing;