// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';  // Import ProjectCard as default
import projImg1 from '../assets/img/project-img1.jpg';
import projImg2 from '../assets/img/project-img2.jpg';
import projImg3 from '../assets/img/project-img3.jpg';
import certImg1 from '../assets/img/cert-img1.png';
import certImg2 from '../assets/img/cert-img2.jpg';
import certImg3 from '../assets/img/cert-img3.jpg';
import certImg4 from '../assets/img/cert-img4.jpg';
import certImg5 from '../assets/img/cert-img5.jpg';
import certImg6 from '../assets/img/cert-img6.jpg';
import certImg7 from '../assets/img/cert-img7.jpg';
import intern1 from '../assets/img/intern1.jpeg';
import intern2 from '../assets/img/intern2.jpg';
import intern3 from '../assets/img/intern3.jpg';
import intern4 from '../assets/img/intern4.jpg';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Expense Tracker',
      description: 'MERN Stack',
      imgUrl: projImg1,
    },
    {
      title: 'Clean Blog',
      description: 'Python, Flask, HTML, MongoDB',
      imgUrl: projImg2,
    },
    {
      title: 'SuperHero Recruitment',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    // Add more projects as needed
  ];

  const certifications = [
    {
      title: 'Certification on HTML, CSS, JS, React',
      description: 'Completed on Udemy',
      imgUrl: certImg1,
    },
    {
      title: 'Certification on Data Science Foundation',
      description: 'Completed on Great Learning',
      imgUrl: certImg2,
    },
    {
      title: 'Certification on Artificial Intelligence',
      description: 'Completed on Infosys Springboard',
      imgUrl: certImg3,
    },
    {
      title: 'Certification on Python',
      description: 'Completed on Edyst',
      imgUrl: certImg4,
    },
    {
      title: 'Certification on Microsoft Excel',
      description: 'Completed on Ineuron',
      imgUrl: certImg5,
    },
    {
      title: 'Certification on Machine Learning',
      description: 'Completed on Great Learning',
      imgUrl: certImg6,
    },
    {
      title: 'Certification on UI/UX',
      description: 'Completed on Great Learning',
      imgUrl: certImg7,
    },
  ];

  const internships = [
    {
      title: 'Internship on Foundation of Modern Machine Learning',
      description: 'Completed at IIIT-H',
      imgUrl: intern1,
    },
    {
      title: 'Summer Internship on Python (Flask)',
      description: 'Completed at IIIT-H',
      imgUrl: intern2,
    },
    {
      title: 'Internship on Salesforce',
      description: 'Completed at Trailhead',
      imgUrl: intern3,
    },
    {
      title: 'Summer Of AI',
      description: 'Completed at IIIT-H',
      imgUrl: intern4,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center">
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
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row className="project-cards-container">
                          {projects.map((project, index) => (
                            <Col sm={12} md={6} lg={4} key={index}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="project-cards-container">
                          {certifications.map((certification, index) => (
                            <Col sm={12} md={6} lg={4} key={index}>
                              <ProjectCard {...certification} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="project-cards-container">
                          {internships.map((internship, index) => (
                            <Col sm={12} md={6} lg={4} key={index}>
                              <ProjectCard {...internship} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
