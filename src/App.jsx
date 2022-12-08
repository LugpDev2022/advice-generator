import React from "react";
import { Container, Modal, Row } from "react-bootstrap";

function App() {
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
            <h1 className="title text-info text-center my-3">ADVICE #117</h1>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default App;
