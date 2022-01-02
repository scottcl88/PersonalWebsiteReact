import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';
import AsteroidCollectorModal from '../asteroidCollectorModal/AsteroidCollectorModal';
import BenjiWorldModal from '../benjiWorldModal/BenjiWorldModal';
import DynamicWeatherModal from '../dynamicWeatherModal/DynamicWeatherModal';
import PortfolioModal from '../portfolioModal/PortfolioModal';
import RecipeLewisModal from '../recipeLewisModal/RecipeLewisModal';
import SurfNEatModal from '../surfNEatModal/SurfNEatModal';

function Home() {
    const [surfNEatShow, setSurfNEatShow] = useState(false);
    const [dynamicWeatherShow, setDynamicWeatherShow] = useState(false);
    const [portfolioShow, setPortfolioShow] = useState(false);
    const [benjiWorldShow, setBenjiWorldShow] = useState(false);
    const [recipeLewisShow, setRecipeLewisShow] = useState(false);
    const [asteroidCollectorShow, setAsteroidCollectorShow] = useState(false);

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
            <section className="page-section portfolio-home" id="portfolio">
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
                                <img className="img-fluid" style={{ marginLeft: "20%" }} src={require("../../assets/img/portfolio/surf_n_eat.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Surf-N-Eat</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2" onClick={dynamicWeatherDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={require("../../assets/img/portfolio/magicMirrorLogo.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">MMM-DynamicWeather</h5>
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
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4" onClick={benjiWorldDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <i className="fas fa-paw" style={{ fontSize: "100px", marginLeft: "35%" }}></i>
                            </div>
                            <h5 className="text-center mb-0">Benji World</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={recipeLewisDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <i className="fas fa-book" style={{ fontSize: "100px", marginLeft: "35%" }}></i>
                            </div>
                            <h5 className="text-center mb-0">Recipe Lewis</h5>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6" onClick={asteroidCollectorDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "33%" }} src={require("../../assets/img/portfolio/asteroid.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Asteroid Collector</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg-primary text-white mb-0 pb-25" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center text-white">
                        <div className="col-auto"><p className="lead">Hello, I am Scott Lewis.
                            I am a senior full stack developer with 6 years of professional experience, including team leadership and a variety of industries from small to large businesses and teams.
                            I have a wide range of front-end and back-end skills including C#, SQL, Angular, React and more. I enjoy taking on challenges and embracing changes, and will deliver quality solutions to any system or product.</p></div>
                    </div>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light mr-3" href="/PersonalWebsiteReact/about">
                            <i className="fas fa-address-card mr-2"></i>
                            More About Me
                        </a>
                        <a className="btn btn-xl btn-outline-light mr-3" href="/PersonalWebsiteReact/resume">
                            <i className="fas fa-file-alt mr-2"></i>
                            View Resume
                        </a>
                        <a className="btn btn-xl btn-outline-light" href="/PersonalWebsiteReact/contact">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Contact Me
                        </a>
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
        </div>

    );

}

export default Home;