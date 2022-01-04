import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function PortfolioModal() {
    return (
        <div className="portfolioModal">
            <Modal.Header closeButton>
                <Modal.Title>Portfolio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image" src={require("../../assets/img/portfolio/logo.svg").default} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>React, AWS</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2021</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Website</h6><p><a href="https://www.scottcl.com" target="_blank">scottcl.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col md="6">
                                <p><a href="https://github.com/scottcl88/PersonalWebsiteReact" target="_blank">github.com/scottcl88/PersonalWebsiteReact</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            This portfolio site built with React and deployed on AWS Amplify is used to share my projects and skills
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default PortfolioModal;