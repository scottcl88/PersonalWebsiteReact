import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function FileIndexerServiceModal() {
    return (
        <div className="fileIndexerServiceModal">
            <Modal.Header closeButton>
                <Modal.Title>File Indexer Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "30%", height: "200px", width: "300px" }} src={require("../../assets/img/portfolio/net_6.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>.Net 6, Worker Service, MongoDB, Serilog</p>
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
                                <p><a href="https://github.com/scottcl88/FileIndexerService" target="_blank">github.com/scottcl88/FileIndexerService</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            This is a simple long-running .NET 6 Worker Service that will gather details of files in a directory and index them into MongoDB to be used with the FileSearcher project.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default FileIndexerServiceModal;