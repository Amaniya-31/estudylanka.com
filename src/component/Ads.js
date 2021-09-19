import React from 'react';
import { Container, Card, CardGroup, Navbar } from 'react-bootstrap';
import Footer from './Footer';
import PageNumbers from './PageNumbers';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

function Ads() {
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

            <div id="page1">
                <Container style={{ alignContent: 'center' }}>
                    <CardGroup>
                        <Card className="polaroid" style={{ backgroundColor: '#CEE5D0' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                            <Card.Body className="card-align">
                                <Card.Title className="crdTitle" style={{ color: '#5089C6' }}>ACCOUNTING</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> MOHAMMED</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 22 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +966 533261280</p>
                                    <p><strong>WHATSAPP :</strong> +966 533261280</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="polaroid" style={{ backgroundColor: '#F7D59C' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#B61919' }}>ACCOUNTING</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> SAFRAN SALY</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 8 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                    <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="polaroid" style={{ backgroundColor: '#C9CCD5' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#4A47A3' }}>BUSINESS STUDIES</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> ZURAIDA ANSARI</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 18 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 769112570</p>
                                    <p><strong>WHATSAPP :</strong> +94 769112570</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className="polaroid" style={{ backgroundColor: '#FFE194' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#B85C38' }}>BUSINESS STUDIES</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> SAFRAN SALY</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 8 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                    <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="polaroid" style={{ backgroundColor: '#CEE5D0' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#30475E' }}>BUSINESS STUDIES</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> SHAHBAZ AHMED</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 7735277994</p>
                                    <p><strong>WHATSAPP :</strong> +94 7735277994</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="polaroid" style={{ backgroundColor: '#FCDEC0' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#911F27' }}>ECONOMICS</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> ZURAIDA ANSARI</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 18 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 769112570</p>
                                    <p><strong>WHATSAPP :</strong> +94 769112570</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className="polaroid" style={{ backgroundColor: '#D5EEBB' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#444941' }}>ECONOMICS</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> SAFRAN SALY</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 8 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                    <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="polaroid" style={{ backgroundColor: '#F5E8C7' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" /> */}
                            <Card.Body>
                                <Card.Title className="crdTitle" style={{ color: '#6F4C5B' }}>ECONOMICS</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> SHAHBAZ AHMED</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 7735277994</p>
                                    <p><strong>WHATSAPP :</strong> +94 7735277994</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="polaroid" style={{ backgroundColor: '#F0F0CB' }}>
                            {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                            <Card.Body className="card-align">
                                <Card.Title className="crdTitle" style={{ color: '#5F7A61' }}>ENGLISH</Card.Title>
                                <Card.Text className="crdTxt">
                                    <p><strong>TEACHER :</strong> Mrs F S MOHIDEEN</p>
                                    <p><strong>YEARS OF EXPERIENCE :</strong> 06 YEARS</p>
                                    <p><strong>CONTACT NUMBER :</strong> +94 771391864</p>
                                    <p><strong>WHATSAPP :</strong> +94 771391864</p>
                                    <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                    <p><strong>GRADE :</strong> GRADE 02</p>
                                    <p><strong>MEDIUM :</strong> ENGLISH</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>

            <PageNumbers />

            <Footer />
        </div>
    )
}

export default Ads;