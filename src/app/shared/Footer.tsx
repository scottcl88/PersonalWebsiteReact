import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/sclewis1" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/scottcl88" target="_blank"><i className="fab fa-fw fa-github"></i></a>
                            </div>
                            <div className="col-lg-4">
                            <p className="lead text-center">&copy; {new Date().getFullYear()} - Scott C Lewis</p>
                            </div>
                            <div className="col-lg-4">
                                <p className="footer-info">
                                    Template by&nbsp;
                                    <a href="https://startbootstrap.com" target="_blank" className="d-contents">Start Bootstrap</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}

export default Footer;