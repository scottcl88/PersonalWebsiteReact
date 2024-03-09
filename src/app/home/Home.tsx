import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';
import AsteroidCollectorModal from '../asteroidCollectorModal/AsteroidCollectorModal';
import BenjiWorldModal from '../benjiWorldModal/BenjiWorldModal';
import DynamicWeatherModal from '../dynamicWeatherModal/DynamicWeatherModal';
import PortfolioModal from '../portfolioModal/PortfolioModal';
import RecipeLewisModal from '../recipeLewisModal/RecipeLewisModal';
import SurfNEatModal from '../surfNEatModal/SurfNEatModal';
import './Home.css';

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


    const calculateYears = (): number => {
        const startYear = 2016;
        const currentYear = new Date().getFullYear();
        return currentYear - startYear - 1;
    };
    const [years, setYears] = useState<number>(calculateYears());

    return (
        <div className="home">
            <header className="masthead text-center" id="page-top">
                <div className="container d-flex align-items-center flex-column">
                    <h1 className="mb-1">Senior Full Stack Developer</h1>
                    <p className="subtitle mb-5">Crafting end-to-end solutions, fostering agility, and leading with expertise.</p>
                    <img className="masthead-avatar mb-5" src={require("../../assets/img/ProfilePic2.png")} alt="" />
                    <h3 className="text-uppercase mb-0">Scott Lewis</h3>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </header>
            <section className="page-section bg-primary text-white mb-0 pb-25" id="introduction">
                <div className="container">
                    <p className="introduction-text">Hi, I'm Scott!<br></br><br></br>I am a senior full stack developer with {years} years of professional experience, including team leadership and a variety of industries from small to large businesses and teams.
                        I enjoy taking on challenges and embracing changes, and will deliver quality solutions to any system or product.</p>
                </div>
            </section>
            <section className="page-section text-white mb-0 pb-25" id="roles">
                <div className="container bg-white">
                    <div className='row'>
                        <div className='col-md-4'>
                            <i className="fas fa-database mr-2 area-icon"></i>
                            <h4>Backend</h4>
                            <p>Architecting robust solutions, building the backbone of complex applications.</p>
                            <p className='area-header'>Experiences</p>
                            <ul>
                                <li>Building tables</li>
                                <li>Developing on multiple platforms</li>
                            </ul>
                            <p className='area-header'>Skills</p>
                            <ul>
                                <li>C#</li>
                                <li>.NET</li>
                                <li>ASP.NET</li>
                                <li>SQL</li>
                                <li>Entity Framework</li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <i className="fas fa-code mr-2 area-icon"></i>
                            <h4>Frontend</h4>
                            <p>Translating user requirements, building the best user experience.</p>
                            <p className='area-header'>Experiences</p>
                            <ul>
                                <li>Building UI</li>
                                <li>Developing on multiple platforms</li>
                            </ul>
                            <p className='area-header'>Skills</p>
                            <ul>
                                <li>Angular</li>
                                <li>Typescript / JavaScript</li>
                                <li>CSS / SCSS</li>
                                <li>HTML</li>
                                <li>C# MVC & Blazor</li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <i className="fas fa-address-card mr-2 area-icon"></i>
                            <h4>Mentor</h4>
                            <p>Championing agile principles, guiding teams to greatness, and fostering innovation.</p>
                            <p className='area-header'>Experiences</p>
                            <ul>
                                <li>Team Lead</li>
                                <li>Developing Juniors</li>
                            </ul>
                            <p className='area-header'>Skills</p>
                            <ul>
                                <li>Agile Scrum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="page-section bg-primary text-white mb-0 pb-25" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center mt-5 text-center">
                        <div className="col-lg-4">
                            <a className="btn btn-xl btn-outline-light mr-3 a-white" href="/about">
                                <i className="fas fa-address-card mr-2"></i>
                                More About Me
                            </a>
                        </div>
                        <div className="col-lg-4 mt-xs-1">
                            <a className="btn btn-xl btn-outline-light mr-3 a-white" href="/resume">
                                <i className="fas fa-file-alt mr-2"></i>
                                View Resume
                            </a>
                        </div>
                        <div className="col-lg-4 mt-xs-1">
                            <a className="btn btn-xl btn-outline-light a-white" href="/contact">
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
        </div>

    );

}

export default Home;