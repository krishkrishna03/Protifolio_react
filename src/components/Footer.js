import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <div className="icons">

              <a href="https://www.linkedin.com/in/patnala-sri-krishna-sai-4531b4229"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/krishkrishna03"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/invites/contact/?i=aje39xoiso7a&utm_content=hrbpjb5"><img src={navIcon3} alt="Icon" /></a>
              </div>
            </div>
            <div className="content">
            <p>Copyright 2022. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
