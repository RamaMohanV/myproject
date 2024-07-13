import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  
} from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";




function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Toolstack;
