import React from 'react';
import { Pagination } from 'react-bootstrap';

 function PageNumbers() {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: '25px' }}>
                <Pagination>
                    <Pagination.Item href="/#page1" >{1}</Pagination.Item>
                    <Pagination.Item href="/page2" >{2}</Pagination.Item>
                    <Pagination.Item href="/page3" >{3}</Pagination.Item>
                </Pagination>
            </div>
        </div>
    )
}

export default PageNumbers;