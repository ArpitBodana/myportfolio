import React from "react";
import ab from "../images/ab.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Top() {
  return (
    <div className="parallax-landing text-light">
      <div className="glass">
        <Container>
          <Row className="p-3 min-vh-100 d-flex align-items-center">
            <Col lg={6} xl={6} md={6} sm={12} xs={12}>
              <h1 className="fs-1 text-light">
                Hi,I'm <span className="text-danger fw-bold">Arpit Bodana</span>
              </h1>
            </Col>
            <Col lg={6} xl={6} md={6} sm={12} xs={12}>
              <Image src={ab} rounded fluid className="p-3  rounded-circle " />
            </Col>
          </Row>
          <Row>
            <Col className="container mb-3 ">
              <p className="fs-5 pt-2">
                I'm a MERN stack Developer . Waiting for good oppotunity to work
                with web techs. I have worked hard in my education and now I am
                ready to apply my knowledge into practice. I'm confortable to
                work with React Js, Next Js, Express Js, Node, HTML ,CSS,
                Bootstrap 5 , Styled Component ,Tailwind Css. Also used
                components library like React-Bootstrap and MUI in my react
                apps.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Top;
