import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <div className="navTabs">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container fluid>
                        <Link to="/" title="estudylanka"><Navbar.Brand className="brand">
                            <img
                                alt="logo"
                                src={Logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top brand-img"
                                style={{ paddingRight: '5px' }}
                            />
                            eStudyLanka
                        </Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto nav-link">
                                <Nav.Link href="/" style={{ paddingLeft: '15px', paddingRight: '15px' }}>HOME</Nav.Link>
                                <Nav.Link href="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }}>ABOUT</Nav.Link>
                                <Nav.Link href="/#contact-us" style={{ paddingLeft: '15px', paddingRight: '15px' }}>CONTACT</Nav.Link>
                                <Nav.Link href="/tutors/page1" style={{ paddingLeft: '15px', paddingRight: '15px' }}>TUTORS</Nav.Link>
                                <Nav.Link href="/forum" style={{ paddingLeft: '15px', paddingRight: '15px' }}>FORUM</Nav.Link>
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