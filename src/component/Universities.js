import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import Footer from './Footer';

function Universities() {
    return (
        <div id="universities">
            <Container>
                <Navbar collapseOnSelect expand="lg">
                    <Link to="/"><Navbar.Brand className="brand brandTxt">
                        <img
                            alt=""
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top brand-img"
                        />
                        eStudyLanka
                    </Navbar.Brand></Link>
                </Navbar>
            </Container>

            <br />

            <Container fluid>
                <div className="schlBg">
                    <p><a href="https://www.apiit.lk/" className="schlLnk">Asia Pacific Institute Of Information Technology (APIIT)</a></p>
                    <p><a href="https://atikegalle.com/" className="schlLnk">ATI Kegalle</a></p>
                    <p><a href="https://www.acbt.net/" className="schlLnk">Australian College of Business and Technology (ACBT)</a></p>
                    <p><a href="http://busl.ac.lk/" className="schlLnk">Buddhasravaka Bhiksu University</a></p>
                    <p><a href="http://www.bpu.ac.lk/" className="schlLnk">Buddhist and Pali University of Sri Lanka</a></p>
                    <p><a href="http://www.cgtti.lk/" className="schlLnk">Ceylon German Technical Training Institute</a></p>
                    <p><a href="https://researchandpsychology.com/" className="schlLnk">Colombo Institute of Research and Psychology</a></p>
                    <p><a href="https://www.cinec.edu/" className="schlLnk">Colombo International Nautical and Engineering College</a></p>
                    <p><a href="https://www.esn.ac.lk/" className="schlLnk">Eastern University</a></p>
                    <p><a href="https://gwu.ac.lk/" className="schlLnk">Gampaha Wickramarachchi University</a></p>
                    <p><a href="https://www.kdu.ac.lk/" className="schlLnk">General Sir John Kotelawala Defence University</a></p>
                    <p><a href="https://www.iit.ac.lk/" className="schlLnk">Informatics Institute of Technology</a></p>
                    <p><a href="https://www.iet.edu.lk/" className="schlLnk">Institute of Engineering Technology, Sri Lanka</a></p>
                    <p><a href="https://www.coursenet.lk/course/22424/higher-national-diploma-in-engineering-hnde" className="schlLnk">Institute of Higher National Diploma in Engineering</a></p>
                    <p><a href="https://iim.cmb.ac.lk/" className="schlLnk">Institute of Indigenous Medicine</a></p>
                    <p><a href="https://icbt.lk/" className="schlLnk">International College of Business and Technology (ICBT)</a></p>
                    <p><a href="https://nibm.lk/" className="schlLnk">National Institute of Business Management (NIBM)</a></p>
                    <p><a href="https://ocu.ac.lk/" className="schlLnk">Ocean University of Sri Lanka</a></p>
                    <p><a href="https://www.ou.ac.lk/" className="schlLnk">Open University</a></p>
                    <p><a href="http://www.rjt.ac.lk/" className="schlLnk">Rajarata University</a></p>
                    <p><a href="https://www.sab.ac.lk/" className="schlLnk">Sabaragamuwa University</a></p>
                    <p><a href="http://www.seu.ac.lk/" className="schlLnk">South Eastern University</a></p>
                    <p><a href="http://www.sllc.ac.lk/" className="schlLnk">Sri Lanka Law College</a></p>
                    <p><a href="http://www.sliate.ac.lk/" className="schlLnk">Sri Lanka Institute of Advanced Technological Education</a></p>
                    <p><a href="https://www.sliit.lk/" className="schlLnk">Sri Lanka Institute of Information Technology</a></p>
                    <p><a href="https://www.slintec.lk/" className="schlLnk">Sri Lanka Institute of Nanotechnology</a></p>
                    <p><a href="https://sltc.ac.lk/" className="schlLnk">Sri Lanka Technological Campus</a></p>
                    <p><a href="https://cmb.ac.lk/" className="schlLnk">University of Colombo</a></p>
                    <p><a href="http://www.jfn.ac.lk/" className="schlLnk">University of Jaffna</a></p>
                    <p><a href="https://www.kln.ac.lk/" className="schlLnk">University of Kelaniya</a></p>
                    <p><a href="https://uom.lk/" className="schlLnk">University of Moratuwa</a></p>
                    <p><a href="https://www.pdn.ac.lk/" className="schlLnk">University of Peradeniya</a></p>
                    <p><a href="https://www.ruh.ac.lk/" className="schlLnk">University of Ruhuna</a></p>
                    <p><a href="https://www.sjp.ac.lk/" className="schlLnk">University of Sri Jayewardenepura</a></p>
                    <p><a href="https://vpa.ac.lk/" className="schlLnk">University of the Visual and Performing Arts</a></p>
                    <p><a href="http://www.vau.jfn.ac.lk/" className="schlLnk">University of Vavuniya</a></p>
                    <p><a href="http://univotec.ac.lk/" className="schlLnk">University of Vocational Technology</a></p>
                    <p><a href="http://www.uwu.ac.lk/" className="schlLnk">Uva Wellassa University</a></p>
                    <p><a href="https://www.wyb.ac.lk/" className="schlLnk">Wayamba University</a></p>


                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default Universities;