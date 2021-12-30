import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="Home">
                <main>
                    <section className="intro-section">
                        <h2 className="section-title">Hello, Daisy Murphy!</h2>
                        <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
                            media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to
                            build your website so that it is functional and user-friendly but at the same time attractive.
                            Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.
                            My aim is to bring across your message and identity in the most creative way. I created web design
                            for many famous brand companies.</p>
                        <a href="#!" className="btn btn-primary btn-hire-me">HIRE ME</a>
                    </section>
                    <section className="resume-section">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6 className="section-subtitle">RESUME</h6>
                                <h2 className="section-title">EDUCATION</h2>
                                <ul className="time-line">
                                    <li className="time-line-item">
                                        <span className="badge badge-primary">1998 - 2005</span>
                                        <h6 className="time-line-item-title">Master In Computer Science</h6>
                                        <p className="time-line-item-subtitle">MASTER, UNIVERSITY</p>
                                        <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                                            vitae, interdum sed tortor.</p>
                                    </li>
                                    <li className="time-line-item">
                                        <span className="badge badge-primary">1995 - 1998</span>
                                        <h6 className="time-line-item-title">Studied at Harvard University</h6>
                                        <p className="time-line-item-subtitle">UNIVERSITY</p>
                                        <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                                            vitae, interdum sed tortor.
                                        </p>
                                    </li>
                                    <li className="time-line-item">
                                        <span className="badge badge-primary">1993 - 1995</span>
                                        <h6 className="time-line-item-title">Studied at Oxford University</h6>
                                        <p className="time-line-item-subtitle">UNIVERSITY</p>
                                        <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                                            vitae, interdum sed tortor.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="section-subtitle">RESUME</h6>
                                <h2 className="section-title">Experience</h2>
                                <ul className="time-line">
                                    <li className="time-line-item">
                                        <span className="badge badge-primary">2010 - 2014</span>
                                        <h6 className="time-line-item-title">UI/UX Designer</h6>
                                        <p className="time-line-item-subtitle">Web Agency</p>
                                        <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                                            vitae, interdum sed
                                            tortor.</p>
                                    </li>
                                    <li className="time-line-item">
                                        <span className="badge badge-primary">2008 - 2010</span>
                                        <h6 className="time-line-item-title">Web Designer</h6>
                                        <p className="time-line-item-subtitle">Apple Inc.</p>
                                        <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                                            vitae, interdum sed
                                            tortor.
                                        </p>
                                    </li>
                                    <li className="time-line-item">
                                        <span className="badge badge-primary">2006 - 2008</span>
                                        <h6 className="time-line-item-title">Graphic Designer</h6>
                                        <p className="time-line-item-subtitle">Apple Inc.</p>
                                        <p className="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
                                            vitae, interdum sed
                                            tortor.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="services-section">
                        <h6 className="section-subtitle">WHAT I DO</h6>
                        <h2 className="section-title">SERVICES</h2>
                        <div className="row">
                            <div className="media service-card col-lg-6">
                                <div className="service-icon">
                                    <img alt="target" />
                                </div>
                                <div className="media-body">
                                    <h5 className="service-title">web designing</h5>
                                    <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                                        tortor.</p>
                                </div>
                            </div>
                            <div className="media service-card col-lg-6">
                                <div className="service-icon">
                                    <img src="assets/images/003-idea.svg" alt="bulb" />
                                </div>
                                <div className="media-body">
                                    <h5 className="service-title">Graphic design</h5>
                                    <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                                        tortor.
                                    </p>
                                </div>
                            </div>
                            <div className="media service-card col-lg-6">
                                <div className="service-icon">
                                    <img src="./assets/images/002-development.svg" alt="development" />
                                </div>
                                <div className="media-body">
                                    <h5 className="service-title">Development</h5>
                                    <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                                        tortor.
                                    </p>
                                </div>
                            </div>
                            <div className="media service-card col-lg-6">
                                <div className="service-icon">
                                    <img src="assets/images/004-smartphone.svg" alt="smartphone" />
                                </div>
                                <div className="media-body">
                                    <h5 className="service-title">Mobile design</h5>
                                    <p className="service-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed
                                        tortor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonial-section">
                        <div id="testimonialCarousel" className="testimonial-carousel carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <p className="testimonial-content">Mauris magna sapien, pharetra consectetur fringilla vitae,
                                        interdum sed tortor.</p>
                                    <img src="assets/images/Profile.png" alt="profile" className="testimonial-img" />
                                    <p className="testimonial-name">Nout Golstein</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="testimonial-content">Mauris magna sapien, pharetra consectetur fringilla vitae,
                                        interdum sed tortor.</p>
                                    <img src="assets/images/Profile.png" alt="profile" className="testimonial-img" />
                                    <p className="testimonial-name">Nout Golstein</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="testimonial-content">Mauris magna sapien, pharetra consectetur fringilla vitae,
                                        interdum sed tortor.</p>
                                    <img src="assets/images/Profile.png" alt="profile" className="testimonial-img" />
                                    <p className="testimonial-name">Nout Golstein</p>
                                </div>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#testimonialCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#testimonialCarousel" data-slide-to="1"></li>
                                <li data-target="#testimonialCarousel" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </section>

                    <footer>Live Resume @ <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer">BootstrapDash</a>. All Rights Reserved 2020</footer>
                </main>
            </div>

        );
    }

}

export default Contact;