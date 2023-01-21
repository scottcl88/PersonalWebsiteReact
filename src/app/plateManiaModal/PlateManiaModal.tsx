import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function PlateManiaModal() {
    return (
        <div className="recipeLewisModal">
            <Modal.Header closeButton>
                <Modal.Title>License Plate Mania</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image image-fluid" style={{ marginLeft: "35%", height: "200px", width: "200px" }} src={require("../../assets/img/portfolio/angular.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Angular v15, Ionic v6, Capacitor v4</p>
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
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/license-plate-app-02gcat" target="_blank">github.com/scottcl88/license-plate-app-02gcat</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            License Plate Mania is a capacitor ionic angular app. It's the simple license plate game where you try to find all 50 states. It can also connect to Google Play Game services to store your data in the cloud.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default PlateManiaModal;