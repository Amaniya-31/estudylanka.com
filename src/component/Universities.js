import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

function Universities() {
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg">
                    <Link to="/"><Navbar.Brand className="brand brandTxt">
                        <img
                            alt=""
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top brand-img"
                        />
                        eStudyLanka
                    </Navbar.Brand></Link>
                </Navbar>
            </Container>

            <Container fluid>
                <div className="schlBg">
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Northern Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>North-Central Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>North-Western Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Eastern Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Central Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Western Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Uva Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Sabaramgamuwa Province</h4>
                    </div>
                    <div>
                        <h4 style={{color: '#bd8e50'}}>Southern Province</h4>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Universities;