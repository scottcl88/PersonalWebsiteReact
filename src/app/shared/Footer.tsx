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
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-github"></i></a>
                            </div>
                            <div className="col-lg-4">
                            <p className="text-center">&copy; 2021 - Scott C Lewis</p>
                            </div>
                            <div className="col-lg-4">
                                <p className="lead mb-0">
                                    Freelance Bootstrap theme created by&nbsp;
                                    <a href="http://startbootstrap.com">Start Bootstrap</a>
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