import React from 'react';
import { Container, Navbar, Card, CardGroup } from 'react-bootstrap';
import Footer from './Footer';
import PageNumbers from './PageNumbers';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import ConInfo from './ConInfo';

function Ads2() {
    return (
        <div id="page2">
            <ConInfo />

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
                            <Card.Title className="crdTitle" style={{ color: '#5089C6' }}>ENGLISH LANGUAGE</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> IMTHIYAS THASLIM</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 23 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 774542901</p>
                                <p><strong>WHATSAPP :</strong> +94 774542901</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL AND NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#F7D59C' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B61919' }}>ENGLISH LANGUAGE</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> SAMINDI KUSALYA</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 03 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 773669367</p>
                                <p><strong>WHATSAPP :</strong> +94 705135759</p>
                                <p><strong>SYLLABUS :</strong> NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#C9CCD5' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }}>ENGLISH LITERATURE</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> SAMINDI KUSALYA</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 03 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 773669367</p>
                                <p><strong>WHATSAPP :</strong> +94 705135759</p>
                                <p><strong>SYLLABUS :</strong> NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="polaroid" style={{ backgroundColor: '#FFE194' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B85C38' }}>ENVIRONMENTAL STUDIES</Card.Title>
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
                    <Card className="polaroid" style={{ backgroundColor: '#CEE5D0' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#30475E' }}>INFORMATION AND COMMUNICATION TECHNOLOGY</Card.Title>
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
                    <Card className="polaroid" style={{ backgroundColor: '#FCDEC0' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#911F27' }}>ISLAM</Card.Title>
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
                <CardGroup>
                    <Card className="polaroid" style={{ backgroundColor: '#D5EEBB' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#444941' }}>ISLAMIC STUDIES</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> MOHOMED ZUFAR</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 29 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 714850613</p>
                                <p><strong>WHATSAPP :</strong> +94 714850613</p>
                                <p><strong>SYLLABUS :</strong> EDEXCEL AND NATIONAL (SRI LANKAN SYLLABUS)</p>
                                <p><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p><strong>MEDIUM :</strong> ENGLISH, SINHALA, TAMIL</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#F5E8C7' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#6F4C5B' }}>MATHEMATICS</Card.Title>
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
                    <Card className="polaroid" style={{ backgroundColor: '#F0F0CB' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#5F7A61' }}>MATHEMATICS</Card.Title>
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