import React from "react";
import { Row, Spinner as BootstrapSpinner } from "react-bootstrap";

export default function Spinner() {
  return (
    <Row className="justify-content-md-center">
      <BootstrapSpinner animation="border" variant="primary" />
    </Row>
  );
}
