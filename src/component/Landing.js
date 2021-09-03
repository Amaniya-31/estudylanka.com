import React from 'react';
import Vec from '../bck.jpg';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import { Row, Col, Button } from 'react-bootstrap';

function Landing() {
    return (
        <div className="landing">
            <Row>
                <Col>
                    <Link className="brand" to="/">
                        <img
                            alt=""
                            src={Logo}
                            width="100"
                            height="100"
                            className="brand-img"
                        />
                    </Link>
                    <Link className="brand" to="/">eStudyLanka</Link>
                    <div>
                        <p className="intro">
                            Seeking teachers offering online tutoring? 
                            Or want to advertise your tution service? 
                            eStudyLanka is an online platform for parents and students to contact teachers, 
                            who have advertised their services.
                        </p>
                        <Link to="/contact"><Button variant="dark" size="lg" className="adBtn">CLICK HERE TO POST YOUR AD</Button></Link>
                    </div>
                </Col>
                <Col>
                    <img
                        alt=""
                        src={Vec}
                        width="500"
                        height="500"
                        className="brand-img vec"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Landing;