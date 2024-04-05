import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';
import AsteroidCollectorModal from '../asteroidCollectorModal/AsteroidCollectorModal';
import BenjiWorldModal from '../benjiWorldModal/BenjiWorldModal';
import DynamicWeatherModal from '../dynamicWeatherModal/DynamicWeatherModal';
import PortfolioModal from '../portfolioModal/PortfolioModal';
import RecipeLewisModal from '../recipeLewisModal/RecipeLewisModal';
import SurfNEatModal from '../surfNEatModal/SurfNEatModal';
import PlateManiaModal from '../plateManiaModal/PlateManiaModal';
import SharkToothTrackerModal from '../sharkToothTrackerModal/SharkToothTrackerModal';

function Home() {
    const [surfNEatShow, setSurfNEatShow] = useState(false);
    const [dynamicWeatherShow, setDynamicWeatherShow] = useState(false);
    const [portfolioShow, setPortfolioShow] = useState(false);
    const [benjiWorldShow, setBenjiWorldShow] = useState(false);
    const [recipeLewisShow, setRecipeLewisShow] = useState(false);
    const [asteroidCollectorShow, setAsteroidCollectorShow] = useState(false);
    const [plateManiaShow, setPlateManiaShow] = useState(false);    
    const [sharkToothTrackerShow, setSharkToothTrackerShow] = useState(false);

    const surfNEatClose = () => setSurfNEatShow(false);
    const surfNEatDoShow = () => setSurfNEatShow(true);

    const dynamicWeatherClose = () => setDynamicWeatherShow(false);
    const dynamicWeatherDoShow = () => setDynamicWeatherShow(true);

    const portfolioClose = () => setPortfolioShow(false);
    const portfolioDoShow = () => setPortfolioShow(true);

    const benjiWorldClose = () => setBenjiWorldShow(false);
    const benjiWorldDoShow = () => setBenjiWorldShow(true);

    const recipeLewisClose = () => setRecipeLewisShow(false);
    const recipeLewisDoShow = () => setRecipeLewisShow(true);

    const asteroidCollectorClose = () => setAsteroidCollectorShow(false);
    const asteroidCollectorDoShow = () => setAsteroidCollectorShow(true);

    const plateManiaClose = () => setPlateManiaShow(false);
    const plateManiaDoShow = () => setPlateManiaShow(true);

    const sharkToothTrackerClose = () => setSharkToothTrackerShow(false);
    const sharkToothTrackerDoShow = () => setSharkToothTrackerShow(true);

    function startProfessionalYear() {
        return new Date().getFullYear() - 2017;
    }
    return (
        <div className="home">
            <header className="masthead bg-primary text-white text-center" id="page-top">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5" src={require("../../assets/img/ProfilePic2.png")} alt="" />
                    <h1 className="masthead-heading text-uppercase mb-0">Scott Lewis</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Senior Full Stack Developer</p>
                </div>
            </header>
            <section className="page-section portfolio" id="portfolio-home">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1" onClick={surfNEatDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid sharkTooth-img" style={{ marginLeft: "20%" }} src={require("../../assets/img/portfolio/sharkToothTracker.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Shark Tooth Tracker</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2" onClick={plateManiaDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid plateMania-img" src={require("../../assets/img/portfolio/LicensePlateMania_180px.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">License Plate Mania</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3" onClick={portfolioDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ height: "100px", marginLeft: "28%" }} src={require("../../assets/img/portfolio/logo.svg").default} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Portfolio</h5>
                        </div>
                        <div className="text-center mt-5">
                            <a className="btn btn-xl btn-outline-dark mr-3" href="/portfolio#portfolio">
                                <i className="fas fa-address-card mr-2"></i>
                                More Portfolio
                            </a>
                        </div>
                        <div className="text-center mt-5">
                            <a className="btn btn-xl btn-outline-dark mr-3" href="/portfolio#certifications">
                                <i className="fas fa-address-card mr-2"></i>
                                Skills and Certifications
                            </a>
                        </div>
                    </div>
                </div>

            </section>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center text-white">
                        <div className="col-auto">
                            <p className="lead">
                                Hello! I'm Scott Lewis, a senior full-stack developer with a passion for leading teams and mentoring emerging talent. With over {startProfessionalYear()} years of professional experience, I've navigated diverse industries, from startups to large corporations, honing my skills in architectural design and full-stack development.
<br></br><br></br>
                                My journey in software engineering is driven by a deep commitment to excellence and continuous growth. As a natural leader, I thrive on fostering collaborative environments where every team member's voice is heard and valued. Whether it's architecting scalable solutions or guiding developers towards their full potential, I'm dedicated to cultivating a culture of innovation and mentorship within dynamic teams.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 text-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <a className="btn btn-xl btn-outline-light mr-3 bold btn-sm-3" href="/about">
                                <i className="fas fa-address-card mr-2"></i>
                                More About Me
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-mt">
                            <a className="btn btn-xl btn-outline-light mr-3 bold btn-sm-3" href="/resume">
                                <i className="fas fa-file-alt mr-2"></i>
                                View Resume
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-mt">
                            <a className="btn btn-xl btn-outline-light bold btn-sm-3" href="/contact">
                                <i className="fas fa-paper-plane mr-2"></i>
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={surfNEatShow} onHide={surfNEatClose} size="lg">
                <SurfNEatModal></SurfNEatModal>
            </Modal>
            <Modal show={dynamicWeatherShow} onHide={dynamicWeatherClose} size="lg">
                <DynamicWeatherModal></DynamicWeatherModal>
            </Modal>
            <Modal show={portfolioShow} onHide={portfolioClose} size="lg">
                <PortfolioModal></PortfolioModal>
            </Modal>
            <Modal show={benjiWorldShow} onHide={benjiWorldClose} size="lg">
                <BenjiWorldModal></BenjiWorldModal>
            </Modal>
            <Modal show={recipeLewisShow} onHide={recipeLewisClose} size="lg">
                <RecipeLewisModal></RecipeLewisModal>
            </Modal>
            <Modal show={asteroidCollectorShow} onHide={asteroidCollectorClose} size="lg">
                <AsteroidCollectorModal></AsteroidCollectorModal>
            </Modal>
            <Modal show={plateManiaShow} onHide={plateManiaClose} size="lg">
                <PlateManiaModal></PlateManiaModal>
            </Modal>
            <Modal show={sharkToothTrackerShow} onHide={sharkToothTrackerClose} size="lg">
                <SharkToothTrackerModal></SharkToothTrackerModal>
            </Modal>
        </div>

    );

}

export default Home;