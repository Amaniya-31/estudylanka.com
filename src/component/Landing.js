import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBookmark, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import ContactUs from './ContactUs';

const tutors = <FontAwesomeIcon icon={faUserFriends} style={{ color: '#ffd900', marginRight: '10px' }} />
const forums = <FontAwesomeIcon icon={faBookmark} style={{ color: '#ffd900', marginRight: '10px' }} />
const pastpapers = <FontAwesomeIcon icon={faFileAlt} style={{ color: '#ffd900', marginRight: '10px' }} />

function Landing() {

    const [readMore, setReadMore] = useState(false);

    const extraContent = <h2 style={{ fontSize: '22px', marginTop: '10px' }}>Find qualified and experienced tutors at eStudyLanka to guide you.</h2>

    const linkName = readMore ? 'READ LESS' : 'READ MORE'

    return (
        <div>
            <div className="page">
                <h2>Striving to be a guide for school <br /> children and teachers</h2>
                {readMore && extraContent}<Button className="btn2" type="button" onClick={() => { setReadMore(!readMore) }}><strong>{linkName}</strong></Button>
            </div>
            
            <div className="listcontain">
                <div className="listbox">
                    <p className="listp"><Link to="/tutors/page1" className="listp">{tutors} Tutors</Link></p>
                </div>
                <div className="listbox">
                    <p className="listp"><Link to="/forum" className="listp">{forums} Forum</Link></p>
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