import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

    isPathActive(path: any) {
        return (window).location.pathname.startsWith(path);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/#page-top">Scott Lewis</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/portfolio") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/portfolio">Portfolio</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/resume") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/resume">Resume</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/about") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/about">About</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className={this.isPathActive("/contact") ? "nav-link active py-3 px-0 px-lg-3" : "nav-link py-3 px-0 px-lg-3"} href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }

}

export default Header;