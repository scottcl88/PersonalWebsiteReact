import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function BenjiWorldModal() {
    return (
        <div className="benjiWorldModal">
            <Modal.Header closeButton>
                <Modal.Title>Benji World</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <i className="fas fa-paw" style={{ fontSize: "100px", margin: "0 auto", width: "100%" }}></i>
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>.Net 6, Blazor</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2020</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col md="4">
                                <p><a href="https://github.com/scottcl88/BenjiWorldApp" target="_blank">github.com/scottcl88/BenjiWorldApp</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            Benji World is a simple Blazor Web Assembly app I created to record my dog, Benji, records and information for fun.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default BenjiWorldModal;