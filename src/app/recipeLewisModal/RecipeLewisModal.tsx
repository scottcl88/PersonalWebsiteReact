import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function RecipeLewisModal() {
    return (
        <div className="recipeLewisModal">
            <Modal.Header closeButton>
                <Modal.Title>Recipe Lewis</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <i className="fas fa-book" style={{ fontSize: "100px", margin: "0 auto", width: "100%" }}></i>
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>.Net 6, Angular, Ionic Capacitor v3, AWS, Azure</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2021</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Website</h6><p><a href="https://www.surf-n-eat.com" target="_blank">surf-n-eat.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col md="4">
                                <h6>API</h6><p><a href="https://github.com/scottcl88/FoodAPI" target="_blank">github.com/scottcl88/FoodAPI</a></p>
                            </Col>
                            <Col md="4">
                                <h6>App</h6><p><a href="https://github.com/scottcl88/food-app" target="_blank">github.com/scottcl88/food-app</a></p>
                            </Col>
                            <Col md="4">
                                <h6>Landing Website</h6><p><a href="https://github.com/scottcl88/food-landing" target="_blank">github.com/scottcl88/food-landing</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            Surf-N-Eat is a free app that uses your personal history, preferences and ratings to find the best place to eat! It even works with groups, no more hassle trying to coordinate group outings, just Surf n' Eat!
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default RecipeLewisModal;