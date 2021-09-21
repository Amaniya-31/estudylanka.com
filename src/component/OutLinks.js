import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Cambridge from '../Cambridge.png';
import Edexcel from '../Edexcel.png';
import National from '../nie.png';

function OutLinks() {
    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <a href="https://www.cambridgeinternational.org/"  title="cambridge">
                            <img
                                alt="Cambridge logo"
                                src={Cambridge}
                                width="300"
                                height="120"
                                className="d-inline-block align-top brand-img outlink"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://qualifications.pearson.com/en/home.html" title="edexcel">
                            <img
                                alt="Edecxel logo"
                                src={Edexcel}
                                width="300"
                                height="120"
                                className="d-inline-block align-top brand-img outlink"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://nie.lk/" title="nie">
                            <img
                                alt="nie logo"
                                src={National}
                                width="300"
                                height="120"
                                className="d-inline-block align-top brand-img outlink nie"                                
                            />
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OutLinks;
