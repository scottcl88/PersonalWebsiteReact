import React from 'react';
import '../../site';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">
                        <img className="masthead-avatar mb-5" src={require("../../assets/img/ProfilePic2.png")} alt="" />
                        <h1 className="masthead-heading text-uppercase mb-0">Scott Lewis</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p className="masthead-subheading font-weight-light mb-0">Full Stack Developer</p>
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
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={require("../../assets/img/portfolio/cabin.png").default} alt="" />
                                </div>
                                <h5 className="text-center mb-0">Surf-N-Eat</h5>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="" />
                                </div>
                                <h5 className="text-center mb-0">Benji World</h5>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="" />
                                </div>
                                <h5 className="text-center mb-0">Recipe Lewis</h5>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/game.png" alt="" />
                                </div>
                                <h5 className="text-center mb-0">MMM-DynamicWeather</h5>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/safe.png" alt="" />
                                </div>
                                <h5 className="text-center mb-0">Profile Website</h5>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="" />
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
                            <div className="col-auto"><p className="lead">I am a full stack developer with professional experience of over 5 years.</p></div>
                        </div>
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light" target="_blank" href="~/Public_SCLewis_Resume.pdf">
                                <i className="fas fa-download mr-2"></i>
                                Resume
                            </a>
                        </div>
                    </div>
                </section>
                {/* <section className="page-section" id="contact">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <form id="contactForm" name="sentMessage">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input className="form-control" id="name" type="text" placeholder="Name" data-validation-required-message="Please enter your name." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input className="form-control" id="email" type="email" placeholder="Email Address" data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input className="form-control" id="phone" type="tel" placeholder="Phone Number" data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea className="form-control" id="message" placeholder="Message" data-validation-required-message="Please enter a message."></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success"></div>
                                    <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        );
    }

}

export default Home;