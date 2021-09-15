import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import { Row, Col, Button, Container } from 'react-bootstrap';
import ConInfo from './ConInfo';
import OutLinks from './OutLinks';

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
                                <p className="intro">"Striving to be a guide for school children and teachers."</p>
                                <Link to="/contact"><Button variant="dark" size="lg" className="adBtn">CLICK HERE TO POST YOUR AD</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <OutLinks />
                        </Col>
                    </Row>
                </Container>             
            </div>
        </div>
    )
}

export default Landing;