import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import PageNumbers from './PageNumbers';

function Ads3() {
    return (
        <div id="page3">
            <div style={{ marginTop: '50px' }}>
                <CardGroup>
                    <Card className="polaroid">
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#5089C6' }} title="mathematics">MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> S Mayuiran</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 20 years</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 719649644</p>
                                <p><strong>WHATSAPP :</strong> +94 719649644</p>
                                <p><strong>SYLLABUS :</strong> Edexcel and Cambridge</p>
                                <p><strong>GRADE :</strong> Grade 09, Grade 10, Grade 11, Grade 12</p>
                                <p><strong>MEDIUM :</strong> English</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid">
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B61919' }} title="mathematics">MATHEMATICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> Mrs F S Mohideen</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 06 years</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 771391864</p>
                                <p><strong>WHATSAPP :</strong> +94 771391864</p>
                                <p><strong>SYLLABUS :</strong> Edexcel and Cambridge</p>
                                <p><strong>GRADE :</strong> Grade 02</p>
                                <p><strong>MEDIUM :</strong> English</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid">
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }} title="physics">PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> Mohamed Firdous</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 years</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p><strong>SYLLABUS :</strong> Edexcel, Cambridge and National(Sri Lankan syllabus)</p>
                                <p><strong>GRADE :</strong> Grade 10, Grade 11, Grade 12, Grade 13</p>
                                <p><strong>MEDIUM :</strong> English, Sinhala</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="polaroid">
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#B85C38' }} title="spoken english for adults">SPOKEN ENGLISH FOR ADULTS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p><strong>TEACHER :</strong> Imthiyas Thaslim</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 23 years</p>
                                <p><strong>CONTACT NUMBER :</strong> +94 774542901</p>
                                <p><strong>WHATSAPP :</strong> +94 774542901</p>
                                <p><strong>MEDIUM :</strong> English</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ visibility: 'hidden' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }} title="physics">PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="Mohamed Firdous"><strong>TEACHER :</strong> MOHAMED FIRDOUS</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p><strong>SYLLABUS :</strong> Edexcel, Cambridge and National(Sri Lankan syllabus)</p>
                                <p><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p title="english, sinhala medium"><strong>MEDIUM :</strong> English, Sinhala</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="polaroid" style={{ visibility: 'hidden' }}>
                        {/* <Card.Img variant="top" src={Photo} width="250" height="250" className="card-align" style={{ borderRadius: "50%" }} /> */}
                        <Card.Body className="card-align">
                            <Card.Title className="crdTitle" style={{ color: '#4A47A3' }} title="physics">PHYSICS</Card.Title>
                            <Card.Text className="crdTxt">
                                <p title="Mohamed Firdous"><strong>TEACHER :</strong> MOHAMED FIRDOUS</p>
                                <p><strong>YEARS OF EXPERIENCE :</strong> 10 YEARS</p>
                                <p><strong>CONTACT NUMBER :</strong> +966 553658254</p>
                                <p><strong>WHATSAPP :</strong> +966 553658254</p>
                                <p><strong>SYLLABUS :</strong> Edexcel, Cambridge and National(Sri Lankan syllabus)</p>
                                <p><strong>GRADE :</strong> GRADE 10, GRADE 11, GRADE 12, GRADE 13</p>
                                <p title="english, sinhala medium"><strong>MEDIUM :</strong> English, Sinhala</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

            <PageNumbers />
        </div>
    )
}

export default Ads3;