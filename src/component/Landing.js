import React from 'react';
import { Button } from 'react-bootstrap';
import ContactUs from './ContactUs';

function Landing() {
    return (
        <div>
            <div className="page">
                <h2>Striving to be a guide for school <br /> children and teachers</h2>
                <h3 className="pageSubtxt">Find qualified and experienced tutors at eStudyLanka to guide you</h3>
                <Button className="btn2" type="button"><strong>READ MORE</strong></Button>
            </div>

            <ContactUs />
        </div>
    )
}

export default Landing;