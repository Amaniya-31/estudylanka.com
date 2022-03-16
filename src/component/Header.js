import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <div>
                <Navbar className='shadow' collapseOnSelect expand="lg" bg='light' variant="light">
                    <Container fluid>
                        <Link to="/" title="estudylanka"><Navbar.Brand className="brand">
                            <img
                                alt="logo"
                                src={Logo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top brand-img"
                                style={{ paddingRight: '5px' }}
                            />
                            eStudyLanka
                        </Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto nav-link">
                                <Nav.Link href="/" style={{ paddingLeft: '15px', paddingRight: '15px' }}>HOME</Nav.Link>
                                <Nav.Link href="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }}>ABOUT</Nav.Link>
                                <Nav.Link href="/#tutors" style={{ paddingLeft: '15px', paddingRight: '15px' }}>TUTORS</Nav.Link>
                                <Nav.Link href="/#contact-us" style={{ paddingLeft: '15px', paddingRight: '15px' }}>CONTACT</Nav.Link>
                            </Nav>
                            <Nav>
                                <Link to="/post-ad"><Button className="adBtn">POST YOUR AD</Button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;