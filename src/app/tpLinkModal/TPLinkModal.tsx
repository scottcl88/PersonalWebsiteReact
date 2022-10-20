import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function TpLinkModal() {
    return (
        <div className="tpLinkModal">
            <Modal.Header closeButton>
                <Modal.Title>TP Link Control</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "35%", height: "150px", width: "250px" }} src={require("../../assets/img/portfolio/nodejs.png")} />              
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Node JS, NPM, Puppeteer, Nexe</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2022</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/TPLink-Control" target="_blank">github.com/scottcl88/TPLink-Control</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                        A simple Node JS program to change lights and play music when a football team scores. Specifically for Kasa TP-Link Smart devices.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default TpLinkModal;