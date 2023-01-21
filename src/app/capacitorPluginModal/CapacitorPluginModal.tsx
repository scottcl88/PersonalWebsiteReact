import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function CapacitorPluginModal() {
    return (
        <div className="dynamicWeatherModal">
            <Modal.Header closeButton>
                <Modal.Title>Google Play Game Services</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-4 mt-0 modal-image image-fluid" style={{ marginLeft: "40%", height: "200px", width: "150px" }} src={require("../../assets/img/portfolio/java-logo3.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Java, Capacitor v6, Android Studio, Google Play Game Services SDK v2:17.0.0</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2023</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/capacitor-google-game-services" target="_blank">github.com/scottcl88/capacitor-google-game-services</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            An android capacitor plugin to utilize the authentication and saved game features of Googles Play Game services.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>

    );

}

export default CapacitorPluginModal;