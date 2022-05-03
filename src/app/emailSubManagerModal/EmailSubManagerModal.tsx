import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function EmailSubManagerModal() {
    return (
        <div className="emailSubManagerModal">
            <Modal.Header closeButton>
                <Modal.Title>Email Sub Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <img className="mb-3" style={{ width: "256px", height: "130px", marginLeft: "35%" }} src={require("../../assets/img/portfolio/PHP-logo.png")} />
                </div>
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>PHP v8.1.4, CodeIgnitor 4</p>
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
                                <p><a href="https://github.com/scottcl88/EmailSubscriptionManagement" target="_blank">github.com/scottcl88/EmailSubscriptionManagement</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                        A simple PHP application for displaying and managing emails, intended to manage subscriptions to a service; such as marketing emails.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default EmailSubManagerModal;