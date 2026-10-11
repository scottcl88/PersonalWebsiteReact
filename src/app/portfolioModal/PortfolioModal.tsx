import { Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function PortfolioModal() {
    return (
        <div className="portfolioModal">
            <Modal.Header closeButton>
                <Modal.Title>Portfolio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image  image-fluid" style={{ marginLeft: "35%", height: "200px", width: "200px" }} src={require("../../assets/img/portfolio/logo.svg").default} alt="" />
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
                        <h6>Website</h6><p><a href="https://www.scottcl.com" target="_blank" rel="noreferrer">scottcl.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/PersonalWebsiteReact" target="_blank" rel="noreferrer">github.com/scottcl88/PersonalWebsiteReact</a></p>
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