import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function SecureLewisModal() {
    return (
        <div className="secureLewisModal">
            <Modal.Header closeButton>
                <Modal.Title>Secure Lewis</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "30%", height: "200px", width: "300px" }} src={require("../../assets/img/portfolio/vue.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>VueJS</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2022</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Website</h6><p><a href="https://www.securelewis.com" target="_blank">securelewis.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/SecureLewisVue" target="_blank">github.com/scottcl88/SecureLewisVue</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                        This is a website used to document common cybersecurity knowledge and tips, made specifically for family and personal use but can be applied in general.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default SecureLewisModal;