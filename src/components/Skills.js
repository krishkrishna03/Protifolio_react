import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I specialize in MERN Stack web development, crafting intuitive front-end interfaces using HTML, CSS, and JavaScript. My expertise also extends to MongoDB, enabling efficient database design. In the realm of Artificial Intelligence, I create intelligent chatbots and predictive tools with advanced algorithms. Additionally, my strong Python skills drive software development, data analysis, and automation tasks, showcasing my versatile tech proficiency.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Meter 1" />
                  <h5>react</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Machine Learning" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Mongodb" />
                  <h5>Mongodb</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Express.js" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Microsoft Word" />
                  <h5>Microsoft Word</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Microsoft Excel" />
                  <h5>Microsoft Excel</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Microsoft Power Point" />
                  <h5>Microsoft Power Point</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
