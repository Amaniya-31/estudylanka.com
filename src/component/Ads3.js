import React from 'react';
import { Container, Navbar, Card, CardGroup } from 'react-bootstrap';
import PageNumbers from './PageNumbers';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

function Ads3() {
    return (
        <div id="page3">
            <Container>
                <Navbar collapseOnSelect expand="lg">
                    <Link to="/"><Navbar.Brand className="brand brandTxt">
                        <img
                            alt="logo"
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
                            <Card.Title className="crdTitle" style={{ color: '#5089C6' }} title="mathematics">MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="S Mayuiran"><strong>TEACHER :</strong> S MAYUIRAN</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 20 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                <p title="edexcel and cambridge"><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                <p title="grade"><strong>GRADE :</strong> GRADE 09, GRADE 10, GRADE 11, GRADE 12</p>
                                <p title="english medium"><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#F7D59C' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B61919' }} title="mathematics">MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="F S Mohideen"><strong>TEACHER :</strong> Mrs F S MOHIDEEN</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 06 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 771391864</p>
                                <p><strong>WHATSAPP :</strong> +94 771391864</p>
                                <p title="edexcel and cambrige"><strong>SYLLABUS :</strong> EDEXCEL AND CAMBRIDGE</p>
                                <p title="grade 02"><strong>GRADE :</strong> GRADE 02</p>
                                <p title="english medium"><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#C9CCD5' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }} title="physics">PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="Mohamed Firdous"><strong>TEACHER :</strong> MOHAMED FIRDOUS</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p title="edexcel, cambridge and national syllabus"><strong>SYLLABUS :</strong> EDEXCEL, CAMBRIDGE AND NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p title="grade"><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p title="english, sinhala medium"><strong>MEDIUM :</strong> ENGLISH, SINHALA</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="polaroid" style={{ backgroundColor: '#FFE194' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B85C38' }} title="spoken english for adults">SPOKEN ENGLISH FOR ADULTS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="Imthiyas Thaslim"><strong>TEACHER :</strong> IMTHIYAS THASLIM</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 23 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 774542901</p>
                                <p><strong>WHATSAPP :</strong> +94 774542901</p>
                                <p title="english medium"><strong>MEDIUM :</strong> ENGLISH</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#F7D59C', visibility: 'hidden' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                        <Card.Title className="crdTitle" style={{ color: '#4A47A3' }} title="physics">PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="Mohamed Firdous"><strong>TEACHER :</strong> MOHAMED FIRDOUS</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p title="edexcel, cambridge and national syllabus"><strong>SYLLABUS :</strong> EDEXCEL, CAMBRIDGE AND NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p title="grade"><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p title="english, sinhala medium"><strong>MEDIUM :</strong> ENGLISH, SINHALA</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ backgroundColor: '#C9CCD5', visibility: 'hidden' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }} title="physics">PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="Mohamed Firdous"><strong>TEACHER :</strong> MOHAMED FIRDOUS</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p title="edexcel, cambridge and national syllabus"><strong>SYLLABUS :</strong> EDEXCEL, CAMBRIDGE AND NATIONAL(SRI LANKAN SYLLABUS)</p>
                                <p title="grade"><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p title="english, sinhala medium"><strong>MEDIUM :</strong> ENGLISH, SINHALA</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>

            <PageNumbers />
        </div>
    )
}

export default Ads3;