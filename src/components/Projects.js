import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";

import certImg1 from "../assets/img/cert-img1.png";
import certImg2 from "../assets/img/cert-img2.jpg";
import certImg3 from "../assets/img/cert-img3.jpg";
import certImg4 from "../assets/img/cert-img4.jpg";
import certImg5 from "../assets/img/cert-img5.jpg";
import certImg6 from "../assets/img/cert-img6.jpg";
import certImg7 from "../assets/img/cert-img7.jpg";
import intern1 from "../assets/img/intern1.jpeg";
import intern2 from "../assets/img/intern2.jpg";
import intern3 from "../assets/img/intern3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description: "MERN Stack",
      imgUrl: projImg1,
    },
    {
      title: "Clean Blog",
      description: "Python, Flask, HTML, MongoDB",
      imgUrl: projImg2,
      
    },
    {
      title: "SuperHero Recruitment",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    // Add more projects as needed
  ];

  const certifications = [
    {
      title: "Certification on Html,Css,JS,React",
      description: "Done in Udemy",
      imgUrl: certImg1,
    },
    {
      title: "Certification on Data Sciencs Foundation",
      description: "Done in Greatlearning",
      imgUrl: certImg2,
    },
    {
      title: "Certification on Artificial Intelligence",
      description: "Done in Infosis Spring Board",
      imgUrl: certImg3,
    },
    {
      title: "Certification on Python",
      description: "Done in Edyst",
      imgUrl: certImg4,
    },
    {
      title: "Certification on Microsoft Excel",
      description: "Done in Ineureon",
      imgUrl: certImg5,
    },
    {
      title: "Certification on Machine Learning",
      description: "Done in GreatLearning",
      imgUrl: certImg6,
    },
    {
      title: "Certification on UI/UX",
      description: "Done in GreatLearning",
      imgUrl: certImg7,
    }
  ];

  const internships = [
    {
      title: "Internship on Foundation of Modern Machine Learning",
      description: "Done in IIIT-H",
      imgUrl: intern1,
    },
    {
      title: "Summer Internship on Python(Flask)",
      description: "Done in IIIT-H",
      imgUrl: intern2,
    },
    {
      title: "Internship ON Salesforce",
      description: "Done in  Trailhead",
      imgUrl: intern3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                 
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Internships</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {certifications.map((certification, index) => (
                            <ProjectCard key={index} {...certification} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {internships.map((internship, index) => (
                            <ProjectCard key={index} {...internship} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
