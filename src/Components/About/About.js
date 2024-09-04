import React from "react";
import "./About.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FlightIcon from "@mui/icons-material/Flight";
import MovieIcon from "@mui/icons-material/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faTools,
  faVial,
  faCogs,
  faCoffee,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faGitAlt, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const About = (props) => {
  return (
    <div id={props.id}>
      <h1>About Me</h1>
      <div className="about-text">
        <p className="about-p">
          Hello! I'm Adam Olah, a <strong>full-stack developer</strong> based in
          Budapest. In 2021, I decided to shift my career focus to -{" "}
          <strong>"coding"</strong>, a field that has always interested me. To
          deepen my expertise, I enrolled in several bootcamps, including{" "}
          <strong>Full-stack Java Developer</strong> program(Noroff University)
          and <strong>Frontend Developer </strong> program at Progmatic Academy
          in Budapest. These programs have provided me with a strong foundation
          in development, and I'm now excited to take on{" "}
          <strong>new challenges</strong> and build{" "}
          <strong>creative solutions</strong> daily.
        </p>
        <div className="about-skills-container">
          <h3 className="about-h3">Technologies I've Worked With</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCoffee} /> Java: Quarkus, Spring
            </li>
            <li>
              <FontAwesomeIcon icon={faDatabase} /> SQL: MySQL, PostgreSQL |
              NoSQL: MongoDB
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} /> JavaScript: NodeJS, ReactJS,
              AngularJS
            </li>
            <li>
              <FontAwesomeIcon icon={faGitAlt} /> Version Control: Git, GitHub,
              GitLab
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5} /> Web Technologies: HTML5, CSS,
              Bootstrap
            </li>
            <li>
              <FontAwesomeIcon icon={faTools} /> Tools: Jira, Hibernate,
              Keycloak, Docker, Maven, REST, Apache Kafka
            </li>
            <li>
              <FontAwesomeIcon icon={faVial} /> Testing: JUnit, Mockito,
              Wiremock
            </li>
            <li>
              <FontAwesomeIcon icon={faCogs} /> DevOps: ArgoCD
            </li>
            <li>
              <FontAwesomeIcon icon={faChartArea} /> Code Coverage: JaCoCo
            </li>
          </ul>
        </div>
      </div>
      <h3 className="hobbies-h3">Hobbies</h3>
      <div className="hobbies-div">
        <div className="hobbies-container">
          <SportsSoccerIcon className="icon-hb" />
          <AutoStoriesIcon Icon className="icon-hb" />
          <DirectionsBikeIcon className="icon-hb" />
          <SportsEsportsIcon className="icon-hb" />
          <MovieIcon className="icon-hb" />
          <FlightIcon className="icon-hb" />
        </div>
      </div>
    </div>
  );
};

export default About;
