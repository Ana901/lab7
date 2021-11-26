import React from "react";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Activitate = (props) => {
  const { ora, titlu, loc, descriere, id, sterge } = props;
  const stil = { borderBottom: "1px solid green" };
  return (
    <Container style={stil}>
      <Row>
        <Col sm="9">
          Titlu:{titlu}-Ora:{ora}
          <h5>Loc:{loc}</h5>
          <p> Descriere:{descriere}</p>
        </Col>
        <Col sm="3" className="d-flex align-items-center">
          <Button variant="primary" onClick={() => sterge(id)}>
            Sterge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Activitate;
