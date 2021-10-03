import React from 'react';
import Cambridge from '../images/Cambridge.png';
import Edexcel from '../images/Edexcel.png';
import National from '../images/nie.png';
import DOE from '../images/doe.png';
import Xtreme from '../images/xtreme.PNG';
import BC from '../images/BC.png';
import Fat from '../images/fat.png';
import pp from '../images/pastpapers.png';

function OutLinks() {
    return (
        <div>
            <div className="linkPic">
                <a href="https://www.cambridgeinternational.org/">
                    <img
                        alt="Cambridge"
                        src={Cambridge}
                        width="300"
                        height="120"
                        className="d-inline-block align-top brand-img outlink"
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html">
                    <img
                        alt="Edecxel"
                        src={Edexcel}
                        width="300"
                        height="120"
                        className="d-inline-block align-top brand-img outlink"
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://nie.lk/">
                    <img
                        alt="Mational International Examinations"
                        src={National}
                        width="300"
                        height="120"
                        className="d-inline-block align-top brand-img outlink nie"
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://www.doenets.lk/pastpapers">
                    <img
                        alt="Department of Education Sri Lanka"
                        src={DOE}
                        width="350"
                        height="200"
                        className="d-inline-block align-top brand-img outlink"
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://xtremepape.rs/">
                    <img
                        alt="Xtremepapers"
                        src={Xtreme}
                        width="350"
                        height="100"
                        className="d-inline-block align-top brand-img outlink"
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://www.britishcouncil.lk/exam/igcse-school/prepare/past-papers/cambridge">
                    <img
                        alt="British Council"
                        src={BC}
                        width="350"
                        height="120"
                        className="d-inline-block align-top brand-img outlink"
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://www.fat.lk/en/">
                    <img
                        alt="FAT.lk"
                        src={Fat}
                        width="350"
                        height="120"
                        className="d-inline-block align-top brand-img outlink"
                        style={{backgroundColor: 'gray'}}
                    />
                </a>
            </div>
            <div className="linkPic">
                <a href="https://pastpapers.lk/">
                    <img
                        alt="pastpapers.lk"
                        src={pp}
                        width="350"
                        height="150"
                        className="d-inline-block align-top brand-img outlink"
                    />
                </a>
            </div>
        </div>
    )
}

export default OutLinks;
