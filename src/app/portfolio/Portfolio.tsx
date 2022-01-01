import React from 'react';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="resume">
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
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
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
                                    <img className="img-fluid" style={{ height: "100px", marginLeft: "28%" }} src={require("../../assets/img/portfolio/logo.svg").default} alt="" />
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
            </div>

        );
    }

}

export default Portfolio;