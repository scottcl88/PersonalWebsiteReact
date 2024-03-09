import React from 'react';
import './Header.css';

class Header extends React.Component {

    isPathActive(path: any) {
        return (window).location.pathname.startsWith(path);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/#page-top">
                        {/* <img className="navbar-brand js-scroll-trigger headerLogo" src={require("../../assets/img/ScottLewisLogobyDesigner.png")} alt="" /> */}
                        Scott Lewis
                    </a>
                    {/* <a className="navbar-brand js-scroll-trigger" href="/#page-top">SL</a> */}
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/portfolio") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/portfolio">Portfolio</a></li> */}
                            <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/resume") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/resume">Resume</a></li>
                            {/* <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/about") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/about">About</a></li> */}
                            <li className="nav-item mx-0 mx-lg-1 circle"><a className={this.isPathActive("/contact") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/contact">Contact Me</a></li>
                        </ul>
                        {/* <a className="btn btn-outline-light btn-social-sm mx-1" href="https://www.linkedin.com/in/sclewis1" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social-sm mx-1" href="https://github.com/scottcl88" target="_blank"><i className="fab fa-fw fa-github"></i></a> */}
                    </div>
                </div>
            </nav>

        );
    }

}

export default Header;