import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

function Landing() {
    return (
        <div>

            <Header />

            <div className="page">
                <h2>Striving to be a guide for school <br /> children and teachers</h2>
                <h3>Find qualified and experienced tutors at eStudyLanka to guide you</h3>
                <Button className="btn2" type="button">READ MORE</Button>
            </div>

            <Footer />

        </div>
    )
}

export default Landing;