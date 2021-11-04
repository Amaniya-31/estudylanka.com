import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import firebase, { db } from '../config/eStudyconfig';

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

    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [allgrade, setGrade] = useState([]);
    const [allmedium, setMedium] = useState([]);
    const [nameof, setNameOf] = useState("");
    const [subject, setSubject] = useState("");
    const [allsyllabus, setSyllabus] = useState([]);
    const [whatsapp, setWhatsapp] = useState("");
    const [years, setYears] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("ads").add({
            contact: contact,
            email: email,
            grade: allgrade,
            medium: allmedium,
            nameof: nameof,
            subject: subject,
            syllabus: allsyllabus,
            whatsapp: whatsapp,
            years: years
        }).then(() => {
            alert("Ad has been successfully posted.")
        }).catch((error) => {
            console.log(error.text);
        });
        setContact("");
        setEmail("");
        setNameOf("");
        setSubject("");
        setWhatsapp("");
        setYears("");
        setGrade([]);
        setMedium([]);
        setSyllabus([]);
    }

    return (
        <div id="contact">
            <Form action="post.php" method="post" className="frmBg" onSubmit={sendEmail}>
                <h3 className="postAdTitle">Submit your details to place your Ad here</h3>
                <h6 style={{ paddingBottom: '50px' }}>Please submit one subject at a time. You may post multiple Ads.</h6>
                <Row>
                    <Col>
                        <Form.Group className="frmTxt" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="frmTxtCon" type="email" placeholder="Enter email" name="email" id="email" required="true" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="frmTxt" >
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Name to display..." name="name" id="name" required="true" value={nameof} onChange={(e) => setNameOf(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="+94 *********" name="contact" id="contact" required="true" value={contact} onChange={(e) => setContact(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>WhatsApp Number</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="+94 *********" name="whatsapp" id="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="frmTxt">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Subject offered" name="subject" id="subject" required="true" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>Years of Experience</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Active years worked" name="experience" id="experience" required="true" value={years} onChange={(e) => setYears(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="frmTxt">
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
                                            value="Edexcel"
                                            onChange={(e) => setSyllabus(e.target.value)}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`Cambridge`}
                                            label={`Cambridge`}
                                            style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                            name="cambridge"
                                            value="Cambridge "
                                            onChange={(e) => setSyllabus(e.target.value)}
                                        />
                                        <Container fluid>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Grade</Form.Label>
                                            {['radio'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade1`}
                                                        label={`Grade 01`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade1"
                                                        value="Grade 01 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade2`}
                                                        label={`Grade 02`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade2"
                                                        value="Grade 02 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade3`}
                                                        label={`Grade 03`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade3"
                                                        value="Grade 03 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade4`}
                                                        label={`Grade 04`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade4"
                                                        value="Grade 04 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade5`}
                                                        label={`Grade 05`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade5"
                                                        value="Grade 05 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade6`}
                                                        label={`Grade 06`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade6"
                                                        value="Grade 06 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade7`}
                                                        label={`Grade 07`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade7"
                                                        value="Grade 07 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade8`}
                                                        label={`Grade 08`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade8"
                                                        value="Grade 08 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade9`}
                                                        label={`Grade 09`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade9"
                                                        value="Grade 09 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade10`}
                                                        label={`Grade 10`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade10"
                                                        value="Grade 10 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade11`}
                                                        label={`Grade 11`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade11"
                                                        value="Grade 11 "
                                                        onChange={(e) => setGrade(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade12`}
                                                        label={`Grade 12`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade12"
                                                        value="Grade 12 "
                                                        onChange={(e) => setGrade(e.target.value)}
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
                                        <Container fluid>
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
                                        <Container fluid>
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
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PostAd;