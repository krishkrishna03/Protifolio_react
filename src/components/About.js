import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={6} className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience with a variety of technologies and am always eager to learn more.
            </p>
            <Button href="#skills" className="view-skills-btn">View Skills</Button>
         
            
            {/* Social Media Links */}
            <div className="social-media-links">
              <a href="https://www.linkedin.com/in/patnala-sri-krishna-sai-4531b4229/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/krishkrishna03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.instagram.com/krish._.na._.sai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="about-details">
          <Col md={12}>
            <div className="details-container">
              <div className="achievement">
                <h3>Achievements</h3>
                <ul>
                  <li>Developed a popular e-commerce platform for local businesses.</li>
                  <li>Contributed to open-source projects on GitHub.</li>
                  <li>Received the “Best Innovator” award in a national tech competition.</li>
                </ul>
              </div>
              <div className="timeline">
                <h3>Timeline</h3>
                <ul>
                  <li><strong>2023:</strong> Launched a personal portfolio website.</li>
                  <li><strong>2022:</strong> Completed a Full Stack Development Bootcamp.</li>
                  <li><strong>2021:</strong> Interned at a leading tech company as a Junior Developer.</li>
                </ul>
              </div>
              <div className="hobbies">
                <h3>Hobbies</h3>
                <p>I enjoy hiking, playing the guitar, and exploring new technologies in my free time.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
