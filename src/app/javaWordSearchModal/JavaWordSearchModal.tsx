import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function JavaWordSearchModal() {
    return (
        <div className="javaWordSearchModal">
            <Modal.Header closeButton>
                <Modal.Title>Word Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <img className="mb-3" style={{ width: "160px", height: "280px", marginLeft: "35%" }} src={require("../../assets/img/portfolio/java-logo3.png")} />
                </div>
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Java v17.0.2</p>
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
                                <p><a href="https://github.com/scottcl88/WordSearch" target="_blank">github.com/scottcl88/WordSearch</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                        A simple Java application with a window to play a small word search game.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default JavaWordSearchModal;