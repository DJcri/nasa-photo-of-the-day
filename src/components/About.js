import React from "react";
import "../css/About.css";

//import icons
import { FaReact, FaLess } from "react-icons/fa";
import {
  SiStyledComponents,
  SiReactrouter,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        This app utilizes <strong>axios</strong> to request data from NASA's
        APOD API and pass it through <strong>react</strong> and{" "}
        <strong>react router</strong> to show the latest images/videos from NASA
        within the past 10 days in a <strong>fast and responsive</strong>{" "}
        fashion
      </p>
      <h3>Technologies Used</h3>
      <div className="tech-container">
        <div className="tech">
          <FaReact className="icon react" />
          <h4>React</h4>
        </div>
        <div className="tech">
          <SiReactrouter className="icon react-router" />
          <h4>React Router</h4>
        </div>
        <div className="tech">
          <SiStyledComponents className="icon styled-components" />
          <h4>Styled Components</h4>
        </div>
        <div className="tech">
          <FaLess className="icon less" />
          <h4>Less</h4>
        </div>
        <div className="tech">
          <SiHtml5 className="icon html5" />
          <h4>HTML5</h4>
        </div>
        <div className="tech">
          <SiCss3 className="icon css3" />
          <h4>CSS3</h4>
        </div>
        <div className="tech">
          <SiJavascript className="icon js" />
          <h4>JavaScript</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
