import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function DynamicWeatherModal() {
    return (
        <div className="dynamicWeatherModal">
            <Modal.Header closeButton>
                <Modal.Title>MMM-DynamicWeather</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="mb-3 modal-image" src={require("../../assets/img/portfolio/magicMirrorLogo.png")} />
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Javascript, Typescript, NPM</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Created</h6><p>2021</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Repository</h6>
                        <Row>
                            <Col>
                                <p><a href="https://github.com/scottcl88/MMM-DynamicWeather" target="_blank">github.com/scottcl88/MMM-DynamicWeather</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            MMM-DynamicWeather is a heavily configurable MagicMirror Module to display different animations based on current weather and show customized event effects<a href="https://magicmirror.builders/" target="_blank"></a>
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>

    );

}

export default DynamicWeatherModal;