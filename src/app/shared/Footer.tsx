import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (

            <footer className="border-top footer text-muted">
                <div className="container">
                    <p>
                        &copy; @DateTime.Now.Year - Scott C Lewis
                    </p>
                    <div>
                        <a className="mr-auto" href="/Login">Login</a>
                    </div>
                </div>
            </footer>

        );
    }

}

export default Footer;