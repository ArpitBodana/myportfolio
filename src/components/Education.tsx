import React from "react";
import { Container, Row } from "react-bootstrap";
function Education() {
  return (
    <div className="container-fluid text-center shadow-sm bg-black text-light">
      <div className="d-flex justify-content-start p-4 text-danger ">
        <h2 className="border-bottom border-info">Education - </h2>
      </div>
      <Container className="fs-5 p-4">
        <Row className="text-warning">10TH</Row>
        <Row>St Anthony Convent School Sonkatch</Row>
        <Row>Marks - 7.4 CGPA</Row>
        <Row>Year 2014 - 2015</Row>
      </Container>
      <Container className="fs-5 p-4">
        <Row className="text-warning">12TH</Row>
        <Row>St Anthony Convent School Sonkatch</Row>
        <Row>Marks - 57%</Row>
        <Row>Year 2016 - 2017</Row>
      </Container>
      <Container className="fs-5 p-4">
        <Row className="text-warning">Graduation</Row>
        <Row>Bsc Computer Science </Row>
        <Row>Maa Jinwani Colleage PushpGiri Tirth Sonkatch</Row>
        <Row>Marks - 72.97%</Row>
        <Row>Year 2017 - 2020</Row>
      </Container>
    </div>
  );
}

export default Education;
