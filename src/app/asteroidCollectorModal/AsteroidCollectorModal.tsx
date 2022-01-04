import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function AsteroidCollectorModal() {
    return (
        <div className="asteroidCollectorModal">
            <Modal.Header closeButton>
                <Modal.Title>Asteroid Collector</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <img className="mb-3" style={{ width: "150px", height: "150px", marginLeft: "40%" }} src={require("../../assets/img/portfolio/asteroid.png")} />
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
                    <Col><h6>Description</h6>
                        <p>
                            Asteroid Collector is a simple 2D game I made in Java when I was first learning how to program and have since revisited it once with small changes.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default AsteroidCollectorModal;