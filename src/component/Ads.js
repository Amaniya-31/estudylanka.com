import React from 'react';
import { Container } from 'react-bootstrap';
import Ad1 from '../images/accountingFaizal.jpg';
import Ad2 from '../images/accountingSafran.png';
import Ad3 from '../images/bsZuraida.png';
// import firebase from '../config/eStudyconfig';

function Ads() {

    // const titleColour = [{ color: '#5089C6' }, { color: '#B61919' }, { color: '#4A47A3' }, { color: '#B85C38' }, { color: '#30475E' }, { color: '#911F2' }, { color: '#444941' }, { color: '#6F4C5B' }, { color: '#5F7A61' }];
    // var selectedCol = titleColour[Math.floor(Math.random() * titleColour.length)];
    // console.log(selectedCol);

    // const [ads, setAds] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const adsRefStart = firebase.firestore().collection("ads").orderBy("subject", "asc");

    // function getAds() {
    //     setLoading(true);
    //     adsRefStart.onSnapshot((querySnapshot) => {
    //         const items = [];
    //         querySnapshot.forEach((doc) => {
    //             items.push(doc.data());
    //         });
    //         setAds(items);
    //         setLoading(false);
    //     });
    // }

    // useEffect(() => {
    //     getAds();
    // }, []);

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <div id='tutors'>
            <Container fluid>
                <h2 style={{ color: '#524A4E' }}>Find Your Tutor Here!</h2>
                <img
                    src={Ad1}
                    alt="Accounting By Mohammed Faizal"
                    width='350px'
                    height='400px'
                    className='ad-img'
                />
                <img
                    src={Ad2}
                    alt="Accounting By Safran Saly"
                    width='350px'
                    height='400px'
                    className='ad-img'
                />
                <img
                    src={Ad3}
                    alt="Business Studies by Zuraida Ansari"
                    width='350px'
                    height='400px'
                    className='ad-img'
                />
                {/* <div id="page1">
                    <div style={{ marginTop: '50px' }}>

                        {ads.map((ad) => (
                            <>
                                <Card className="polaroid" key={ad.id}>
                                    <Card.Body className="card-align">
                                        <Card.Title className="crdTitle" style={selectedCol} title="accounting">{ad.subject}</Card.Title>
                                        <Card.Text className="crdTxt">
                                            <p><strong>TEACHER :</strong> {ad.nameof}</p>
                                            <p><strong>YEARS OF EXPERIENCE :</strong> {ad.years} years</p>
                                            <p><strong>CONTACT NUMBER :</strong> {ad.contact}</p>
                                            <p><strong>WHATSAPP :</strong> {ad.whatsapp}</p>
                                            <p><strong>SYLLABUS :</strong> {ad.syllabus}</p>
                                            <p><strong>GRADE :</strong> {ad.grade}</p>
                                            <p><strong>GRADE(National) :</strong> {ad.gradeN}</p>
                                            <p><strong>MEDIUM :</strong> {ad.medium}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </>
                        ))}
                    </div>
                </div> */}
            </Container>
        </div>
    )
}

export default Ads;