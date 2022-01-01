import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1" onClick={handleShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "20%" }} src={require("../../assets/img/portfolio/surf_n_eat.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Surf-N-Eat</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={require("../../assets/img/portfolio/magicMirrorLogo.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">MMM-DynamicWeather</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ height: "100px", marginLeft: "28%" }} src={require("../../assets/img/logo.svg").default} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Portfolio</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <i className="fas fa-paw" style={{ fontSize: "100px", marginLeft: "35%" }}></i>
                            </div>
                            <h5 className="text-center mb-0">Benji World</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <i className="fas fa-book" style={{ fontSize: "100px", marginLeft: "35%" }}></i>
                            </div>
                            <h5 className="text-center mb-0">Recipe Lewis</h5>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
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
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Surf-N-Eat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="mb-3" style={{ width: "100%" }} src={require("../../assets/img/portfolio/surf_n_eat2.png")} />
                    <Row>
                        <Col>
                            <h6>Technologies</h6><p>.Net 6, Angular, Ionic Capacitor v3, AWS, Azure</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>Created</h6><p>2021</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>Website</h6><p><a href="https://www.surf-n-eat.com" target="_blank">surf-n-eat.com</a></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h6>Repository</h6>
                            <Row>
                                <Col md="4">
                                    <h6>API</h6><p><a href="https://github.com/scottcl88/FoodAPI" target="_blank">github.com/scottcl88/FoodAPI</a></p>
                                </Col>
                                <Col md="4">
                                    <h6>App</h6><p><a href="https://github.com/scottcl88/food-app" target="_blank">github.com/scottcl88/food-app</a></p>
                                </Col>
                                <Col md="4">
                                    <h6>Landing Website</h6><p><a href="https://github.com/scottcl88/food-landing" target="_blank">github.com/scottcl88/food-landing</a></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h6>Description</h6>
                            <p>
                                Surf-N-Eat is a free app that uses your personal history, preferences and ratings to find the best place to eat! It even works with groups, no more hassle trying to coordinate group outings, just Surf n' Eat!
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>

    );

}

export default Home;