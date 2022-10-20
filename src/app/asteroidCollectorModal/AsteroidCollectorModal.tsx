import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function AsteroidCollectorModal() {
    return (
        <div className="asteroidCollectorModal">
            <Modal.Header closeButton>
                <Modal.Title>2D Java Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <img className="mb-3" style={{ width: "100px", height: "180px", marginLeft: "40%" }} src={require("../../assets/img/portfolio/java-logo3.png")} />
                </div>
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Java</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2011</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/AsteroidCollector" target="_blank">github.com/scottcl88/AsteroidCollector</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            This is a simple 2D game written in Java (named Asteroid Collector) when I was first learning how to program and have since revisited it once with small changes.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default AsteroidCollectorModal;