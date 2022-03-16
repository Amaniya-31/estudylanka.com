import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { db } from '../config/eStudyconfig';

function PostAd(e) {

    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [nameof, setNameOf] = useState("");
    const [subject, setSubject] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [years, setYears] = useState("");
    const [image, setInmage] = useState('');

    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm('service_8fdml82', 'template_f6kgunq', e.target, 'user_O36l6NDGBRWGo4WGjPSmS')
    //         .then((result) => {

    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_8fdml82', 'template_f6kgunq', e.target, 'user_O36l6NDGBRWGo4WGjPSmS')
            .then((result) => {

            }, (error) => {
                console.log(error.text);
            });

        var edex = document.getElementById("Edexcel");
        var camb = document.getElementById("Cambridge");
        var nati = document.getElementById("National");

        var ecg1 = document.getElementById("ECGrade1");
        var ecg2 = document.getElementById("ECGrade2");
        var ecg3 = document.getElementById("ECGrade3");
        var ecg4 = document.getElementById("ECGrade4");
        var ecg5 = document.getElementById("ECGrade5");
        var ecg6 = document.getElementById("ECGrade6");
        var ecg7 = document.getElementById("ECGrade7");
        var ecg8 = document.getElementById("ECGrade8");
        var ecg9 = document.getElementById("ECGrade9");
        var ecg10 = document.getElementById("ECGrade10");
        var ecg11 = document.getElementById("ECGrade11");
        var ecg12 = document.getElementById("ECGrade12");

        var g1 = document.getElementById("Grade1");
        var g2 = document.getElementById("Grade2");
        var g3 = document.getElementById("Grade3");
        var g4 = document.getElementById("Grade4");
        var g5 = document.getElementById("Grade5");
        var g6 = document.getElementById("Grade6");
        var g7 = document.getElementById("Grade7");
        var g8 = document.getElementById("Grade8");
        var g9 = document.getElementById("Grade9");
        var g10 = document.getElementById("Grade10");
        var g11 = document.getElementById("Grade11");
        var g12 = document.getElementById("Grade12");
        var g13 = document.getElementById("Grade13");

        var eng = document.getElementById("English");
        var sin = document.getElementById("Sinhala");
        var tam = document.getElementById("Tamil");

        var syllres = [];
        var graderes = [];
        var graderesN = [];
        var mediumres = [];

        if (edex.checked === true) {
            syllres.push(edex.value);
        }
        if (camb.checked === true) {
            syllres.push(camb.value);
        }
        if (nati.checked === true) {
            syllres.push(nati.value);
        }

        if (ecg1.checked === true) {
            graderes.push(ecg1.value);
        }
        if (ecg2.checked === true) {
            graderes.push(ecg2.value);
        }
        if (ecg3.checked === true) {
            graderes.push(ecg3.value);
        }
        if (ecg4.checked === true) {
            graderes.push(ecg4.value);
        }
        if (ecg5.checked === true) {
            graderes.push(ecg5.value);
        }
        if (ecg6.checked === true) {
            graderes.push(ecg6.value);
        }
        if (ecg7.checked === true) {
            graderes.push(ecg7.value);
        }
        if (ecg8.checked === true) {
            graderes.push(ecg8.value);
        }
        if (ecg9.checked === true) {
            graderes.push(ecg9.value);
        }
        if (ecg10.checked === true) {
            graderes.push(ecg10.value);
        }
        if (ecg11.checked === true) {
            graderes.push(ecg11.value);
        }
        if (ecg12.checked === true) {
            graderes.push(ecg12.value);
        }

        if (g1.checked === true) {
            graderesN.push(g1.value);
        }
        if (g2.checked === true) {
            graderesN.push(g2.value);
        }
        else if (g3.checked === true) {
            graderesN.push(g3.value);
        }
        else if (g4.checked === true) {
            graderesN.push(g4.value);
        }
        else if (g5.checked === true) {
            graderesN.push(g5.value);
        }
        else if (g6.checked === true) {
            graderesN.push(g6.value);
        }
        else if (g7.checked === true) {
            graderesN.push(g7.value);
        }
        else if (g8.checked === true) {
            graderesN.push(g8.value);
        }
        else if (g9.checked === true) {
            graderesN.push(g9.value);
        }
        else if (g10.checked === true) {
            graderesN.push(g10.value);
        }
        else if (g11.checked === true) {
            graderesN.push(g11.value);
        }
        else if (g12.checked === true) {
            graderesN.push(g12.value);
        }
        else if (g13.checked === true) {
            graderesN.push(g13.value);
        }

        if (eng.checked === true) {
            mediumres.push(eng.value);
        }
        if (sin.checked === true) {
            mediumres.push(sin.value);
        }
        if (tam.checked === true) {
            mediumres.push(tam.value);
        }

        db.collection("ads").add({
            contact: contact,
            email: email,
            grade: graderes,
            gradeN: graderesN,
            medium: mediumres,
            nameof: nameof,
            subject: subject,
            syllabus: syllres,
            whatsapp: whatsapp,
            years: years,
            image: image
        }).then(() => {
            alert("Ad has been successfully posted.");
        }).catch((error) => {
            console.log(error.text);
        });
        setContact("");
        setEmail("");
        setNameOf("");
        setSubject("");
        setWhatsapp("");
        setYears("");
        setInmage("");
    }

    return (
        <div id="contact">
            <Form method="post" className="frmBg" onSubmit={handleSubmit}>
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
                        <Form.Group className="frmTxt">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Subject offered" name="subject" id="subject" required="true" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>Years of Experience</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" placeholder="Active years worked" name="experience" id="experience" required="true" value={years} onChange={(e) => setYears(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
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
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`Cambridge`}
                                            label={`Cambridge`}
                                            style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                            name="cambridge"
                                            value="Cambridge "
                                        />
                                        <Container fluid>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Grade</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade1`}
                                                        label={`Grade 01`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade1"
                                                        value="Grade 01 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade2`}
                                                        label={`Grade 02`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade2"
                                                        value="Grade 02 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade3`}
                                                        label={`Grade 03`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade3"
                                                        value="Grade 03 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade4`}
                                                        label={`Grade 04`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade4"
                                                        value="Grade 04 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade5`}
                                                        label={`Grade 05`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade5"
                                                        value="Grade 05 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade6`}
                                                        label={`Grade 06`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade6"
                                                        value="Grade 06 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade7`}
                                                        label={`Grade 07`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade7"
                                                        value="Grade 07 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade8`}
                                                        label={`Grade 08`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade8"
                                                        value="Grade 08 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade9`}
                                                        label={`Grade 09`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade9"
                                                        value="Grade 09 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade10`}
                                                        label={`Grade 10`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade10"
                                                        value="Grade 10 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade11`}
                                                        label={`Grade 11`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade11"
                                                        value="Grade 11 "
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`ECGrade12`}
                                                        label={`Grade 12`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="ecgrade12"
                                                        value="Grade 12 "
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
                                            value="National(Sri Lanka)"
                                        />
                                        <Container fluid>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Grade</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade1`}
                                                        label={`Grade 01`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade1"
                                                        value="Grade 01(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade2`}
                                                        label={`Grade 02`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade2"
                                                        value="Grade 02(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade3`}
                                                        label={`Grade 03`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade3"
                                                        value="Grade 03(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade4`}
                                                        label={`Grade 04`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade4"
                                                        value="Grade 04(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade5`}
                                                        label={`Grade 05`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade5"
                                                        value="Grade 05(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade6`}
                                                        label={`Grade 06`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade6"
                                                        value="Grade 06(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade7`}
                                                        label={`Grade 07`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade7"
                                                        value="Grade 07(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade8`}
                                                        label={`Grade 08`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade8"
                                                        value="Grade 08(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade9`}
                                                        label={`Grade 09`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade9"
                                                        value="Grade 09(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade10`}
                                                        label={`Grade 10`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade10"
                                                        value="Grade 10(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade11`}
                                                        label={`Grade 11`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade11"
                                                        value="Grade 11(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade12`}
                                                        label={`Grade 12`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade12"
                                                        value="Grade 12(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Grade13`}
                                                        label={`Grade 13`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="grade13"
                                                        value="Grade 13(N)"
                                                    />
                                                </div>
                                            ))}
                                        </Container>
                                        <Container fluid>
                                            <Form.Label className="frmTxtCon" style={{ fontSize: '14px' }}>Select Medium</Form.Label>
                                            {['checkbox'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`English`}
                                                        label={`English`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="english"
                                                        value="English"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Sinhala`}
                                                        label={`Sinhala`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="sinhala"
                                                        value="Sinhala(N)"
                                                    />
                                                    <Form.Check
                                                        type={type}
                                                        id={`Tamil`}
                                                        label={`Tamil`}
                                                        style={{ display: 'inline-block', padding: '2px 20px 2px 20px', fontWeight: '400' }}
                                                        name="tamil"
                                                        value="Tamil(N)"
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
                <br />
                <Button variant="primary" type="submit" onClick='handleSubmit'>
                    Submit
                </Button>
            </Form>
        </div >
    )
}

export default PostAd;