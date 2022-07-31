import React from "react";
import mynotes from "../images/mynotes.jpg";
import thoughtbook from "../images/thoughtbook.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Projects() {
  return (
    <div className="p-2 shadow-sm container-fluid ">
      <div className="">
        <div className="d-flex justify-content-start p-4 text-danger ">
          <h2 className="border-bottom border-info">Projects - </h2>
        </div>
        <h4 className="mt-3">ThoughtBook </h4>
        <hr />
        <Container>
          <Row>
            <Col sm={12} xs={12} lg={6} xl={6} md={6}>
              <Image src={thoughtbook} thumbnail fluid className=" p-2" />
            </Col>
            <Col>
              <p className="fs-5 pt-4">
                ThoughtBook is a fully responsive multiuser app , in which user
                can able to create account by registerting and add there thougts
                in some lines and read others users thoughts.User can add ,
                update and delete what they add. User can modify only there own
                added thoughts.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <ul className="row mt-3">
            <li className="col-6">NextJs</li>
            <li className="col-6">Django Rest</li>
            <li className="col-6">MySql</li>
            <li className="col-6">MUI</li>
            <li className="col-6">Tailwind Css</li>
          </ul>
          <Col>
            <a
              href="https://thoughtbook.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary mb-4 mt-2"
            >
              View Demo
            </a>
          </Col>
        </Container>

        <h4 className="mt-3">My Notes</h4>
        <hr />
        <Container className="pb-3">
          <Row>
            <Col sm={12} xs={12} lg={6} xl={6} md={6}>
              <Image src={mynotes} thumbnail fluid className="p-2" />
            </Col>
            <Col>
              <p className="fs-4 pt-5">
                My notes is a mobile friendly note taking app in which anyone
                can take note and download them in a txt file.
              </p>
            </Col>
          </Row>
          <Container>
            <ul className="row mt-3">
              <li className="col-6">ReactJs</li>
              <li className="col-6">BootStrap 5</li>
              <li className="col-6">Redux</li>
              <li className="col-6">Node</li>
            </ul>
            <Col>
              <a
                href="https://mynotes-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary mb-4 mt-2"
              >
                View Demo
              </a>
            </Col>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
