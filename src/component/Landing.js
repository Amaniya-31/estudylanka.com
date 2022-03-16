import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import ContactUs from './ContactUs';
import Student from '../images/student.png';
import Ad from '../images/ad.jpg';
import Ads from './Ads';

function Landing() {
    return (
        <div>
            <Carousel fade variant='dark' className='slide' indicators={false} controls={true}>
                <Carousel.Item interval={3000} style={{ backgroundColor: '#557C55', height: '400px' }}>
                    <Container>
                        <div>
                            <div className='box-shadow' style={{ backgroundColor: '#F0ECE3', height: '150px', width: '500px', zIndex: '100', position: 'absolute', marginLeft: '100px', marginTop: '25px' }}>
                                <div className='in-box-text'>
                                    <h3>Find the best tutors!</h3>
                                    <p>Here at eStudyLanka you can find the best tutors who will guide you in your academics.</p>
                                </div>
                            </div>
                            <div style={{ width: '350px', margin: '60px 50px 0px 30px', float: 'right' }}>
                                <img
                                    className="d-block w-100"
                                    src={Student}
                                    height='400px'
                                    alt=""
                                    style={{ zIndex: '500', position: 'relative', marginLeft: '50px' }}
                                />
                            </div>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={3000} style={{ backgroundColor: '#B8405E', height: '400px' }}>
                    <Container>
                        <div>
                            <div className='box-shadow' style={{ backgroundColor: '#E2DEA9', height: '180px', width: '500px', zIndex: '100', position: 'absolute', marginLeft: '150px', marginTop: '100px' }}>
                                <div className='in-box-text'>
                                    <h3>Get Your Custom Ads!</h3>
                                    <p><strong>Submit your request for a custom made advertisement and our team will design a custom advertisement for you!</strong></p>
                                </div>
                            </div>
                            <div style={{ width: '350px', margin: '50px 200px 0px 30px', float: 'right' }}>
                                <img
                                    className="d-block w-100"
                                    src={Ad}
                                    height='400px'
                                    alt=""
                                    style={{ zIndex: '500', position: 'relative', marginLeft: '50px' }}
                                />
                            </div>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>

            <Ads />

            <ContactUs />
        </div>
    )
}

export default Landing;