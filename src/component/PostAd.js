import React from 'react';
import { Navbar, Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

function PostAd(e) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8fdml82', 'template_f6kgunq', e.target, 'user_O36l6NDGBRWGo4WGjPSmS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div id="contact">
            <Container>
                <Navbar collapseOnSelect expand="lg">
                    <Link to="/" title="estudylanka"><Navbar.Brand className="brand brandTxt">
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

            <Form className="frmBg" onSubmit={sendEmail}>
                <h3 style={{ fontWeight: '900', paddingBottom: '10px' }}>Submit your details to place your Ad here</h3>
                <h6 style={{ paddingBottom: '50px' }}>Please submit one subject at a time. You may post multiple Ads.</h6>
                <Row>
                    <Col>
                        <Form.Group className="frmTxt" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="frmTxtCon" type="email" placeholder="Enter email" name="email" required="true" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="frmTxt" >
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Name to display..." name="name" required="true" />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="+94 *********" name="contact" required="true" />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>WhatsApp Number</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="+94 *********" name="whatsapp" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="frmTxt">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Subject offered" name="subject" required="true" />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>Years of Experience</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Active years worked" name="experience" required="true" />
                        </Form.Group>
                        <Form.Group className="frmTxt" required="true">
                            <Form.Label>Syllabus</Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <div>
                                        <Form.Check
                                            type={type}
                                            id={`Edexcel`}
                                            label={`Edexcel`}
                                            style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                            name="edexcel"
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`Cambridge`}
                                            label={`Cambridge`}
                                            style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                            name="cambridge"
                                        />
                                        <Container>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Grade</Form.Label>
                                            {['radio'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade1`}
                                                        label={`Grade 01`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade1"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade2`}
                                                        label={`Grade 02`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade2"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade3`}
                                                        label={`Grade 03`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade3"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade4`}
                                                        label={`Grade 04`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade4"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade5`}
                                                        label={`Grade 05`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade5"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade6`}
                                                        label={`Grade 06`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade6"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade7`}
                                                        label={`Grade 07`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade7"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade8`}
                                                        label={`Grade 08`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade8"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade9`}
                                                        label={`Grade 09`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade9"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade10`}
                                                        label={`Grade 10`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade10"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade11`}
                                                        label={`Grade 11`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade11"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade12`}
                                                        label={`Grade 12`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade12"
                                                    />
                                                </div>
                                            ))}
                                        </Container>
                                    </div>
                                    <div>
                                        <Form.Check
                                            type={type}
                                            id={`National`}
                                            label={`National (Sri Lankan syllabus)`}
                                            style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                            name="national"
                                        />
                                        <Container>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Grade</Form.Label>
                                            {['radio'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade1`}
                                                        label={`Grade 01`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade1"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade2`}
                                                        label={`Grade 02`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade2"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade3`}
                                                        label={`Grade 03`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade3"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade4`}
                                                        label={`Grade 04`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade4"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade5`}
                                                        label={`Grade 05`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade5"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade6`}
                                                        label={`Grade 06`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade6"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade7`}
                                                        label={`Grade 07`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade7"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade8`}
                                                        label={`Grade 08`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade8"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade9`}
                                                        label={`Grade 09`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade9"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade10`}
                                                        label={`Grade 10`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade10"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade11`}
                                                        label={`Grade 11`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade11"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade12`}
                                                        label={`Grade 12`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade12"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade13`}
                                                        label={`Grade 13`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade13"
                                                    />
                                                </div>
                                            ))}
                                        </Container>
                                        <Container>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Medium</Form.Label>
                                            {['radio'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`English`}
                                                        label={`English`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="english"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Sinhala`}
                                                        label={`Sinhala`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="sinhala"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Tamil`}
                                                        label={`Tamil`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="tamil"
                                                    />
                                                </div>
                                            ))}
                                        </Container>
                                    </div>
                                </div>
                            ))}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Footer />
        </div>
    )
}

export default PostAd;