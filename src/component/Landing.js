import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import FB from '../facebook.png';
import Slide1 from '../slide1.png';
import { Row, Col, Button, Container, Navbar, Nav, Carousel } from 'react-bootstrap';
import OutLinks from './OutLinks';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const fb = <FontAwesomeIcon icon={faFacebook} />
const search = <FontAwesomeIcon icon={faSearch} />

function Landing() {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="navTabs">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-bar" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{ color: '#FFFFFF', margin: 'auto' }}>
                                <Nav.Link href="/internaional-schools" className="nav-link">International Schools</Nav.Link>
                                <Nav.Link href="/universities" className="nav-link">Universities</Nav.Link>
                                <Nav.Link href="/past-papers" className="nav-link">Past Papers</Nav.Link>
                                <Nav.Link href="/tutors" className="nav-link">Tutors</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="landing">
                <Carousel variant="dark" fluid>
                    <Carousel.Item interval={5000}>
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
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <Row>
                            <Col>
                                <p className="searchSlide">{search}</p>
                                <div>
                                    <p className="intro" style={{marginTop: '120px', fontSize: '25px'}}>Find qualified and experienced tutors to guide through your academics.</p>                                    
                                </div>
                            </Col>
                            <Col>
                                <img
                                    alt=""
                                    src={Slide1}
                                    width="500"
                                    height="440"
                                    className="brand-img"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <Row>
                            <Col>
                                <p className="fbSlide">{fb}</p>
                                <h1 class="intro">Follow Us on FaceBook</h1>
                                <div>
                                    <p className="intro" style={{ textAlign: 'justify', fontSize: '25px', paddingTop: '35px' }}>Connect with us at Estudy Lanka. Gain inspiration and guidance from many successful people. Follow us to receive notification on our updates.</p>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    alt=""
                                    src={FB}
                                    width="500"
                                    height="440"
                                    className="brand-img"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
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
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
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
                    </Carousel.Item>
                </Carousel>
            </div>

            <Footer />

        </div>
    )
}

export default Landing;