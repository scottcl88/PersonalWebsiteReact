import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function OpswatAcademyModal() {
    
    const clickDataTransfer = () => {
        window.open("https://verify.skilljar.com/c/gv4tmdahb9em", "_blank");
    };
    const clickEmail = () => {
        window.open("https://verify.skilljar.com/c/uty6n2jxudtj", "_blank");
    };
    const clickEndpoint = () => {
        window.open("https://verify.skilljar.com/c/v4wpzpr4kpbg", "_blank");
    };
    const clickFile = () => {
        window.open("https://verify.skilljar.com/c/hmnrxuh33ayo", "_blank");
    };
    const clickLegacySystem = () => {
        window.open("https://verify.skilljar.com/c/a42v8qqrx6q6", "_blank");
    };
    const clickNetwork = () => {
        window.open("https://verify.skilljar.com/c/cxdqu9a6y2o8", "_blank");
    };
    const clickSecureStorage = () => {
        window.open("https://verify.skilljar.com/c/gaywqwpvmbq9", "_blank");
    };
    const clickWebTraffic = () => {
        window.open("https://verify.skilljar.com/c/n467e8ty4bc6", "_blank");
    };
    return (
        <div className="surfNEatModal">
            <Modal.Header closeButton>
                <Modal.Title>OPSWAT Academy Associate Certifications</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <div onClick={clickDataTransfer} className="pointer text-center hover-context">
                            <h3>Data-Transfer Security</h3>
                            <img src={require("../../assets/img/odsa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                    <Col>
                        <div onClick={clickEmail} className="pointer text-center hover-context">
                            <h3>Email Security</h3>
                            <img src={require("../../assets/img/oesa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div onClick={clickEndpoint} className="pointer text-center hover-context">
                            <h3>Endpoint Compliance</h3>
                            <img src={require("../../assets/img/oeca.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                    <Col>
                        <div onClick={clickFile} className="pointer text-center hover-context">
                            <h3>File Security</h3>
                            <img src={require("../../assets/img/ofsa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div onClick={clickLegacySystem} className="pointer text-center hover-context">
                            <h3>Legacy-System Security</h3>
                            <img src={require("../../assets/img/olsa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                    <Col>
                        <div onClick={clickNetwork} className="pointer text-center hover-context">
                            <h3>Network Security</h3>
                            <img src={require("../../assets/img/onsa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div onClick={clickSecureStorage} className="pointer text-center hover-context">
                            <h3>Secure Storage</h3>
                            <img src={require("../../assets/img/ossa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                    <Col>
                        <div onClick={clickWebTraffic} className="pointer text-center hover-context">
                            <h3>Web-Traffic Protection</h3>
                            <img src={require("../../assets/img/owpa.png")} style={{ height: "150px" }} />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </div>

    );

}

export default OpswatAcademyModal;