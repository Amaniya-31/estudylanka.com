import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

function TabBtns() {
    return (
        <div>
            <div className="uniLink">
                <Row>
                    <Col>
                        <Link to="/internaional-schools"><Button variant="warning" size="lg" className="linkBtn">INTERNATIONAL SCHOOLS (SL)</Button></Link>
                    </Col>
                    <Col>
                        <Link to="/universities"><Button variant="warning" size="lg" className="linkBtn">UNIVERSITIES (SL)</Button></Link>
                    </Col>
                    <Col>
                        <Link to="/past-papers"><Button variant="warning" size="lg" className="linkBtn">PAST PAPERS</Button></Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TabBtns;