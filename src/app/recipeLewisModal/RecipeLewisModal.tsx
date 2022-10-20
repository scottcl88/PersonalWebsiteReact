import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function RecipeLewisModal() {
    return (
        <div className="recipeLewisModal">
            <Modal.Header closeButton>
                <Modal.Title>Recipe Lewis</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "35%", height: "200px", width: "200px" }} src={require("../../assets/img/portfolio/blazor_wasm.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>.Net 6, Blazor Web Assembly</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2020</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Website</h6><p><a href="https://www.recipelewis.com" target="_blank">recipelewis.com</a></p>
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