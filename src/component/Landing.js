import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import { Row, Col, Button, Container } from 'react-bootstrap';
import ConInfo from './ConInfo';

function Landing() {
    return (
        <div>
            <ConInfo />

            <div className="landing">
                <Container fluid>
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
                                    Or want to advertise your tuition service?
                                    eStudyLanka is an online platform for parents and students to contact teachers,
                                    who have advertised their services.
                                </p>
                                <Link to="/contact"><Button variant="dark" size="lg" className="adBtn">CLICK HERE TO POST YOUR AD</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <Link to="/schools"><Button variant="warning" size="lg" className="adBtn linkBtn" style={{ float: 'right' }}>BROWSE SRI LANKAN SCHOOLS</Button></Link>
                            <Link to="/universities"><Button variant="warning" size="lg" className="adBtn linkBtn" style={{ float: 'right' }}>BROWSE SRI LANKAN UNIVERSITIES</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Landing;