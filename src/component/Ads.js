import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import PageNumbers from './PageNumbers';
import firebase from '../config/eStudyconfig';

function Ads() {

    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(false);

    const adsRef = firebase.firestore().collection("ads").orderBy("subject", "asc");

    function getAds() {
        setLoading(true);
        adsRef.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setAds(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getAds();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div id="page1">
                <div style={{ marginTop: '50px' }}>
                    {ads.map((ad) => (
                        <>
                            <Card className="polaroid crd-sz" key={ad.id}>
                                <Card.Body className="card-align">
                                    <Card.Title className="crdTitle" style={{ color: '#5089C6' }} title="accounting">{ad.subject}</Card.Title>
                                    <Card.Text className="crdTxt">
                                        <p><strong>TEACHER :</strong> {ad.nameof}</p>
                                        <p><strong>YEARS OF EXPERIENCE :</strong> {ad.years} years</p>
                                        <p><strong>CONTACT NUMBER :</strong> {ad.contact}</p>
                                        <p><strong>WHATSAPP :</strong> {ad.whatsapp}</p>
                                        <p><strong>SYLLABUS :</strong> {ad.syllabus}</p>
                                        <p><strong>GRADE :</strong> {ad.grade}</p>
                                        <p><strong>MEDIUM :</strong> {ad.medium}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    ))}
                </div>
            </div>

            <PageNumbers />
        </div>
    )
}

export default Ads;