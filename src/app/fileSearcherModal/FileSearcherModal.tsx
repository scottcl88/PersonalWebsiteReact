import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function FileSearcherModal() {
    return (
        <div className="fileSearcherModal">
            <Modal.Header closeButton>
                <Modal.Title>File Searcher</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "30%", height: "200px", width: "300px" }} src={require("../../assets/img/portfolio/asp_net_mvc.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>.Net 6, ASP.NET MVC, MongoDB</p>
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
                                <p><a href="https://github.com/scottcl88/FileSearcher" target="_blank">github.com/scottcl88/FileSearcher</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                        This is a simple .NET 6 ASP.NET MVC website used to search and edit files from a MongoDB collection. Files are indexed from the project FileIndexerService project.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default FileSearcherModal;