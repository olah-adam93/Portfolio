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
          Hello! I'm Adam Olah, a full-stack developer based in Budapest. I
          spent five years working in various quality engineering roles. And at
          the end of 2021, I realized that I had lost my motivation in this area
          and decided to pursue what I've always been interested in — "coding".
          I enrolled in a Frontend Developer program at Progmatic
          Academy-Budapest, and I can confidently say it has been the best
          decision I've made. I look forward to new challenges and the
          opportunity to build new things daily.
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
