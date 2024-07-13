import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faSass, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faDocker, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const { Title } = Typography;

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: faHtml5 },
        { name: 'CSS', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJs },
        { name: 'React', icon: faReact },
        { name: 'Bootstrap', icon: faBootstrap },
        { name: 'Sass', icon: faSass },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Python', icon: faPython },
        { name: 'Flask', icon: faCodeBranch },  // Placeholder icon
        { name: 'MongoDB', icon: faDatabase },
        { name: 'MySQL', icon: faDatabase },
      ],
    },
    {
      category: 'Technologies',
      technologies: [
        { name: 'Git', icon: faGithub },
        { name: 'Docker', icon: faDocker },
        { name: 'CI/CD', icon: faCodeBranch },  // Placeholder icon
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <Title level={2} className="text-center mb-5">My Skills</Title>
        <Row gutter={[16, 16]} justify="center">
          {skills.map((skillSet, index) => (
            <Col key={index} md={8} sm={24}>
              <Card className="skill-card shadow-lg" bordered={false} hoverable>
                <Title level={4} className="skill-category">{skillSet.category}</Title>
                <ul className="tech-list">
                  {skillSet.technologies.map((tech, i) => (
                    <li key={i} className="tech-item">
                      <div className="tech-icon">
                        <FontAwesomeIcon icon={tech.icon} aria-label={tech.name} />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
