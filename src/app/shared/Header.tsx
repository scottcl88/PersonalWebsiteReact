import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {

    isPathActive(path: string) {
        return (window).location.pathname.startsWith(path);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger d-contents" to="/#page-top">Scott Lewis</Link>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">                       
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link className={this.isPathActive("/portfolio") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className={this.isPathActive("/resume") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} to="/resume">Resume</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className={this.isPathActive("/about") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} to="/about">About</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className={this.isPathActive("/contact") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} to="/contact">Contact</Link></li>
                        </ul>
                        <a className="btn btn-outline-light btn-social-sm mx-1" href="https://www.linkedin.com/in/sclewis1" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social-sm mx-1" href="https://github.com/scottcl88" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-fw fa-github"></i></a>
                    </div>
                </div>
            </nav>

        );
    }

}

export default Header;