import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import Footer from './Footer';

function Schools() {
    return (
        <div id="schools">
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

            <br />

            <Container fluid>
                <div className="schlBg">
                    <p><a href="https://amaledu.lk/" className="schlLnk">Amal International School</a></p>
                    <p><a href="https://www.facebook.com/almanarintern/" className="schlLnk">Al-Manar International School</a></p>
                    <p><a href="https://www.ais.lk/" className="schlLnk">Asian International School</a></p>
                    <p><a href="https://www.bishopscollege.lk/" className="schlLnk">Bishop’s College</a></p>
                    <p><a href="https://www.britishschool.lk/" className="schlLnk">British School in Colombo</a></p>
                    <p><a href="http://www.cis.lk/" className="schlLnk">Colombo International School</a></p>
                    <p><a href="https://m.facebook.com/CSIC-Kalubowila-305619226467251/" className="schlLnk">Colombo South International College</a></p>
                    <p><a href="https://www.facebook.com/cres.international/" className="schlLnk">Crescent Schools International</a></p>
                    <p><a href="https://www.ecolekandy.com/" className="schlLnk">École Internationale Kandy</a></p>
                    <p><a href="https://elizabethmoirschool.com/" className="schlLnk">Elizabeth Moir School</a></p>
                    <p><a href="https://galleinternationalcollege.com/" className="schlLnk">Galle International College</a></p>
                    <p><a href="http://www.gatewayworldwide.com/index.php" className="schlLnk">Gateway College, Sri Lanka</a></p>
                    <p><a href="https://www.harcourtsschool.org/" className="schlLnk">Harcourts International School</a></p>
                    <p><a href="https://www.facebook.com/Hejaaz.intschool/" className="schlLnk">Hejaaz International School</a></p>
                    <p><a href="https://www.ilma.edu.lk/" className="schlLnk">Ilma International Girls’ School</a></p>
                    <p><a href="https://www.facebook.com/jenningsinternationalcollege/" className="schlLnk">Jennings International College</a></p>
                    <p><a href="https://www.facebook.com/Learnium-International-School-436453953048535/" className="schlLnk">Learnium International School</a></p>
                    <p><a href="https://www.leeds.lk/" className="schlLnk">Leeds International School</a></p>
                    <p><a href="https://www.facebook.com/LEXICONITES/" className="schlLnk">Lexicon International School</a></p>
                    <p><a href="https://lyceum.lk/" className="schlLnk">Lyceum International School</a></p>
                    <p><a href="https://osc.lk/" className="schlLnk">Overseas School of Colombo</a></p>
                    <p><a href="https://royalinstitute.org/" className="schlLnk">Royal Institute International School</a></p>
                    <p><a href="https://csdeafblind.lk/" className="schlLnk">School for the Deaf & Blind</a></p>
                    <p><a href="https://www.siscolombo.lk/" className="schlLnk">Stafford International School</a></p>
                    <p><a href="http://wycherley.lk/" className="schlLnk">Wycherley International School</a></p>
                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default Schools;