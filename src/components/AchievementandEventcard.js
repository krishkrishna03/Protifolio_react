import { Col } from "react-bootstrap";

export const AchievementCard = ({ title, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="achievement-card">
        <div className="achievement-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export const EventCard = ({ title, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="event-card">
        <div className="event-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};
