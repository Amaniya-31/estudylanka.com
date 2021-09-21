import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import FB from '../facebook.png';
import Slide1 from '../slide1.png';
import AdSlide from '../Adslide.PNG';
import schl from '../schl.PNG';
import { Row, Col, Button, Container, Navbar, Nav, Carousel } from 'react-bootstrap';
import OutLinks from './OutLinks';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faAd } from '@fortawesome/free-solid-svg-icons';

const fb = <FontAwesomeIcon icon={faFacebook} />
const search = <FontAwesomeIcon icon={faSearch} />
const Ad = <FontAwesomeIcon icon={faAd} />

function Landing() {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="navTabs">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-bar" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{ color: '#FFFFFF', margin: 'auto' }}>
                                <Nav.Link href="/internaional-schools" className="nav-link" title="international schools">International Schools</Nav.Link>
                                <Nav.Link href="/universities" className="nav-link" title="universities sri lanka">Universities</Nav.Link>
                                <Nav.Link href="/past-papers" className="nav-link" title="past papers">Past Papers</Nav.Link>
                                <Nav.Link href="/tutors-page1" className="nav-link" title="tuitions">Tutors</Nav.Link>
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
                                        alt="logo"
                                        src={Logo}
                                        width="100"
                                        height="100"
                                        className="brand-img"
                                    />
                                </Link>
                                <Link className="brand" to="/" title="estudylanka">eStudyLanka</Link>
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
                                    <p className="intro introSmall" style={{ letterSpacing: '0.5px' }}>Find qualified and experienced tutors at eStudyLanka to guide you.</p>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    alt="searchIcon"
                                    src={Slide1}
                                    width="510px"
                                    height="440px"
                                    className="brand-img outlink searchImg"
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
                                    <p className="fbTxt" style={{ color: '#4B6587' }}>Connect with us at Estudy Lanka. Gain inspiration and guidance from many successful people. Follow us to receive notification on our updates.</p>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    alt="facebook-like"
                                    src={FB}
                                    width="500"
                                    height="440"
                                    className="brand-img outlink searchImg"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div>
                            <p className="intro adSlide" style={{ textAlign: 'center', lineHeight: '42px', color: '#78DEC7', letterSpacing: '1px', marginTop: '25px' }}>Send us your <p style={{ fontSize: '40px', display: 'inline-block', color: '#FD6F96' }}>{Ad}</p> and we will post it on eStudyLanka for you, to reach out to students seeking tutors.</p>
                        </div>
                        <img
                            alt="advertise"
                            src={AdSlide}
                            width="400"
                            height="347"
                            className="brand-img outlink adImg"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <Row>
                            <Col>
                                <div>
                                    <p className="intro fbTxt" style={{ textAlign: 'center', letterSpacing: '0.5px' }}>Our Students can also browse through international schools and universities in Sri Lanka. You also have access to pastpapers to help you in your examinations.</p>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    alt="school"
                                    src={schl}
                                    width="500"
                                    height="440"
                                    className="brand-img outlink schlImg"
                                />
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div id="section" className="section secRow">
                <Container fluid>
                    <Row className="secRow">
                        <Col>
                            <div>
                                <h1 style={{ fontWeight: '900', marginTop: '40px' }}>OUR MISSION</h1>
                            </div>
                            <div className="mission">
                                <p>“To be the most student-centric and strive to be the best site for Sri-Lankan students in guiding them for their educational need.”</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h1 style={{ fontWeight: '900', marginTop: '40px' }}>OUR VISION</h1>
                            </div>
                            <div className="vision">
                                <p>Provide information about tutors in and out of Sri-Lanka.</p>
                                <p>Provide information about private and internationals schools in Sri-Lanka</p>
                                <p>Ensure to reach all online materials accessible for students through the site.</p>
                                <p>Make available list of universities and colleges for browsing.</p>
                                <p>Establish and monitor a system to help poor and needy school children</p>
                                <p>Help to identify all potential higher study opportunities in Sri -Lanka and abroad.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />

        </div>
    )
}

export default Landing;