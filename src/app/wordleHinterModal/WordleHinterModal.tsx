import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../../site';

function WordleHinterModal() {
    return (
        <div className="wordleHinterModal">
            <Modal.Header closeButton>
                <Modal.Title>Wordle Hinter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <img className="mb-3" style={{ width: "150px", height: "150px", marginLeft: "40%" }} src={require("../../assets/img/portfolio/python_icon.png")} />
                </div>
                <Row>
                    <Col>
                        <h6>Technologies</h6><p>Python</p>
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
                                <p><a href="https://github.com/scottcl88/WordleHinter" target="_blank">github.com/scottcl88/WordleHinter</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col><h6>Description</h6>
                        <p>
                            A simple python script intended to give you a hint for the Wordle game.
                            <br></br><br></br>
                            A command line tool where you enter the information you know in Wordle. Then it finds all the possible words remaining from the Wordle list of words, and gives you 2 random synonyms of those remaining words. Assumes you narrowed it down to 5 remaining words, and the API has synonyms available. If you need more help, you can get synonyms for just the right word. Or if you give up, you can find the answer too.
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
        </div>
    );
}

export default WordleHinterModal;