import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

function App() {
  const advice =
    "When you're at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket.";

  const id = 117;

  return (
    <Modal
      show
      animation={false}
      backdrop={false}
      centered
      className="my-modal"
    >
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h1 className="custom-title text-info text-center my-3">
                ADVICE #{id}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="custom-p text-center text-primary">"{advice}"</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default App;
