import React from 'react';
import { Pagination } from 'react-bootstrap';

function PageNumbers() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: '25px' }}>
                <Pagination>
                    <Pagination.Item href="/tutors-page1" >{1}</Pagination.Item>
                    <Pagination.Item href="/tutors-page2" >{2}</Pagination.Item>
                    <Pagination.Item href="/tutors-page3" >{3}</Pagination.Item>
                </Pagination>
            </div>
        </div>
    )
}

export default PageNumbers;