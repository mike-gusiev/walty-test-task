import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <Container>
      <Navbar />
      {props.children}
    </Container>
  );
}
