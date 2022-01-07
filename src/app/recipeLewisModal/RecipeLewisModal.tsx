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
                            <Col>
                                <p><a href="https://github.com/scottcl88/Recipe-Lewis" target="_blank">github.com/scottcl88/Recipe-Lewis</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            Recipe Lewis is a simple Blazor Web Assembly app created to share family recipes and explore Blazor.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default RecipeLewisModal;