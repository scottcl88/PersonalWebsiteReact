import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function SharkToothTrackerModal() {
    return (
        <div className="sharkToothTrackerModal">
            <Modal.Header closeButton>
                <Modal.Title>Shark Tooth Tracker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "35%", height: "200px", width: "200px" }} src={require("../../assets/img/portfolio/sharkToothTracker.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Angular v17, Ionic v7, Capacitor v5</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2024</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Website</h6><p><a href="https://www.sharktoothtracker.com" target="_blank">sharktoothtracker.com</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repositories</h6>
                        <p>The repository is currently unavailable due to it being an officially published application</p>
                        {/* <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/license-plate-app-02gcat" target="_blank">github.com/scottcl88/license-plate-app-02gcat</a></p>
                            </Col>
                        </Row> */}
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            Shark Tooth Tracker is a capacitor ionic angular app. It's a simple app to track the shark teeth you find on a beach. Features include taking pictures, recording location, and saving to Google Firebase.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default SharkToothTrackerModal;