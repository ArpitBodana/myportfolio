import React from "react";
import ab from "../images/ab.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Top() {
  return (
    <Container className=" p-2 min-vh-100">
      <Row>
        <h1 className="fs-2 pt-3">
          Hi,I'm <span className="text-danger fw-bold">Arpit Bodana</span>
        </h1>
      </Row>
      <Row className="p-3">
        <Col lg={6} xl={6} md={6}>
          <Image src={ab} rounded fluid className="p-3  rounded-circle" />
        </Col>
        <Col lg={6} xl={6} md={6}>
          <p className="fs-3 pt-5">
            I'm a MERN stack Developer . Waiting for good oppotunity to work
            with web techs. I have worked hard in my education and now I am
            ready to apply my knowledge into practice. I'm confortable to work
            with React Js, Next Js, Express Js, Node, HTML ,CSS, Bootstrap 5 ,
            Styled Component ,Tailwind Css. Also used components library like
            React-Bootstrap and MUI in my react apps.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Top;
