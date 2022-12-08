import React from "react";
import { Col, Container, Modal, Row, Spinner } from "react-bootstrap";
import desktopDivider from "./assets/images/pattern-divider-desktop.svg";
import mobileDivider from "./assets/images/pattern-divider-mobile.svg";
import iconDice from "./assets/images/icon-dice.svg";
import { useAdvice } from "./hooks/useAdvice";

function App() {
  const { loading, advice, handleClick } = useAdvice();

  if (loading) {
    return (
      <Spinner
        animation="border"
        variant="primary"
        role="status"
        className="position-absolute top-50 start-50 "
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

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
                ADVICE #{advice.slip.id}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="custom-p text-center text-primary">
                {advice.slip.advice}
              </p>
            </Col>
          </Row>

          <Row>
            <Col className="justify-content-center d-flex mt-2 mb-5 overflow-hidden">
              <picture>
                <source srcSet={mobileDivider} media="(max-width: 380px)" />
                <img src={desktopDivider} />
              </picture>
            </Col>
          </Row>

          <Row>
            <Col>
              <button
                className="custom-btn rounded-circle"
                onClick={handleClick}
                disabled={true}
              >
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
