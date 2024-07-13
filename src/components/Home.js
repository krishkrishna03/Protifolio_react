import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/img/hero-img.png';

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [toRotate] = useState(["Web Developer", "Python Developer", "UI/UX Designer"]);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting, toRotate]);

  const handleDownloadResume = () => {
    // Provide the direct link to your hosted PDF file
    const resumeUrl = 'https://drive.google.com/file/d/1sUdSzPqGknkZlO7UhCpH-UQmoLLa8MSR/view?usp=sharing';

    // Open the PDF in a new tab/window
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! I'm PATNALA SRI KRISHNA SAI `} 
                    <span className="txt-rotate" data-period="1000" data-rotate='["Web Developer", "Python Developer", "UI/UX Designer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>I am a versatile developer proficient in MERN Stack, frontend design, artificial intelligence, and Python programming. With expertise in crafting seamless web applications and intuitive interfaces, I have also explored the realms of AI, creating intelligent chatbots and predictive analytics tools. My passion for technology drives me to continually innovate, making my portfolio a testament to my dynamic skills and dedication to the ever-evolving world of programming.</p>
                  <button onClick={handleDownloadResume} className="resume-btn">Resume <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="header-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
