import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const openEnv = <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ fontSize: '300px', margin: 'auto', color: '#889EAF', marginBottom: '25px' }} />

function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8fdml82', 'template_yx2vxbl', e.target, 'user_O36l6NDGBRWGo4WGjPSmS')
            .then((result) => {
                alert("Your message has been sent.");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div>
            <Form id="contact-us" className="frmBg" onSubmit={sendEmail}>
                <h3 className="postAdTitle" style={{ textAlign: 'left' }}>Send us your feedback and we will reach out to you</h3>

                <Row>
                    <Col>
                        {openEnv}
                    </Col>
                    <Col>
                        <Form.Group className="frmTxt" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="frmTxtCon" type="email" placeholder="someone@gmail.com" name="email" required="true" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="frmTxt">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control className="frmTxtCon" type="text" name="subject" required="true" />
                        </Form.Group>
                        <Form.Group className="frmTxt" controlId="ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control className="frmTxtCon" as="textarea" name="message" rows={3} required="true" />
                        </Form.Group>
                        <Button variant="success" type="submit" size="sm" style={{ float: 'right' }}>
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ContactUs;