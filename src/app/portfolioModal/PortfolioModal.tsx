import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function PortfolioModal() {
    return (
        <div className="portfolioModal">
            <Modal.Header closeButton>
                <Modal.Title>Portfolio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3" style={{ width: "100%" }} src={require("../../assets/img/portfolio/logo.svg").default} />
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
                        <h6>Website</h6><p><a href="https://www.scottcl.com" target="_blank">scottcl.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col md="4">
                                <h6>API</h6><p><a href="https://github.com/scottcl88/FoodAPI" target="_blank">github.com/scottcl88/FoodAPI</a></p>
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

export default PortfolioModal;