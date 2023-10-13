import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function PlateManiaModal() {
    return (
        <div className="plateManiaModal">
            <Modal.Header closeButton>
                <Modal.Title>License Plate Mania</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "35%", height: "200px", width: "200px" }} src={require("../../assets/img/portfolio/LicensePlateMania_180px.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Angular v16, Ionic v6, Capacitor v4</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2023</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Website</h6><p><a href="https://www.platemania.net" target="_blank">platemania.net</a></p>
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
                            License Plate Mania is a capacitor ionic angular app. It's a simple 'license plate game' to find license plates while you travel. Features include using a svg map, recording location, and saving to Google Firebase.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default PlateManiaModal;