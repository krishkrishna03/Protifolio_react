import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AchievementCard, EventCard } from "./AchievementandEventcard"; // Update import statement
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AchievementsAndEventsSection = () => { // Renamed component
  const achievements = [
    {
      title: "First Prize in Coding Competition",
      description: "Organized by CodeFest, 2023",
    },
    {
      title: "Winner in level 3 in IMO",
      description: "International Mathematical Olympiad, 2016",
    },
    {
      title: "Winner in Abhiyan",
      description: "21 days program, 2021",
    },
    // Add more achievements as needed
  ];

  const events = [
    {
      title: "Machine Learning  Workshop",
      description: "Conducted by CK Raju at HYD, 2023",
    },
    {
      title: "Involved so many hackton ",
      description: "Python,Flask,MachineLearning, 2021,2023",
    }
    // Add more events as needed
  ];

  return (
    <section className="achievements-and-events" id="achievements-events">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Achievements</h2>
                  <Tab.Container id="achievements-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Achievements</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Events</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {achievements.map((achievement, index) => (
                            <AchievementCard key={index} {...achievement} /> // Changed to AchievementCard
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {events.map((event, index) => (
                            <EventCard key={index} {...event} /> // Changed to EventCard
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
    </section>
  );
};
