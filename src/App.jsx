import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import desktopDivider from "./assets/images/pattern-divider-desktop.svg";
import mobileDivider from "./assets/images/pattern-divider-mobile.svg";
import iconDice from "./assets/images/icon-dice.svg";

function App() {
  const advice =
    "Avoid mixing Ginger Nuts with other biscuits, they contaminate. Keep separated.";
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

          <Row>
            <Col className="justify-content-center d-flex mt-2 mb-5 overflow-hidden">
              <picture>
                <source srcset={mobileDivider} media="(max-width: 380px)" />
                <img src={desktopDivider} />
              </picture>
            </Col>
          </Row>

          <Row>
            <Col>
              <button className="custom-btn rounded-circle">
                <img src={iconDice} />
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default App;
