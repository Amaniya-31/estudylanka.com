import React from 'react';
import { Container, Navbar, Card, CardGroup } from 'react-bootstrap';
import Footer from './Footer';
import PageNumbers from './PageNumbers';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

function Ads2() {
    return (
        <div id="page2">
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

            <Container style={{ alignContent: 'center', marginTop: '50px' }}>
                <CardGroup>
                    <Card className="polaroid" style={{ backgroundColor: '#CEE5D0' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#5089C6' }}>INFORMATION AND COMMUNICATION TECHNOLOGY</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> RAVINDU MADARASINGHE</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 01 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 769363440</p>
                                <p><strong>WHATSAPP :</strong> +94 769363440</p>
                                <p><strong>SYLLABUS :</strong> NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p><strong>GRADE :</strong> GRADE 01, GRADE 02, GRADE 03, GRADE 04, GRADE 05, GRADE 06, GRADE 09, GRADE 10, GRADE 11</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#F7D59C' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B61919' }}>MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> MOHAMED HUSSAIN</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 25 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 779209244</p>
                                <p><strong>WHATSAPP :</strong> +94 779209244</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#C9CCD5' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }}>MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> S MAYUIRAN</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 20 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="polaroid" style={{ backgroundColor: '#FFE194' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B85C38' }}>PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> MOHAMED FIRDOUS</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL, CAMBRIDGE AND NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p><strong>MEDIUM :</strong> ENGLISH, SINHALA</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#F7D59C', visibility: 'hidden' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B61919' }}>MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> MOHAMED HUSSAIN</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 25 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 779209244</p>
                                <p><strong>WHATSAPP :</strong> +94 779209244</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#C9CCD5', visibility: 'hidden' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }}>MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> S MAYUIRAN</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 20 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>                    
                </CardGroup>
            </Container>

            <PageNumbers />

            <Footer />

        </div>
    )
}

export default Ads2;