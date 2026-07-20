import React from "react";
import "./About.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FlightIcon from "@mui/icons-material/Flight";
import MovieIcon from "@mui/icons-material/Movie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartArea, faCoffee, faCogs, faDatabase, faTools, faVial,} from "@fortawesome/free-solid-svg-icons";
import {faGitAlt, faHtml5, faJs} from "@fortawesome/free-brands-svg-icons";

const About = (props) => {
    return (
        <div id={props.id}>
            <h1 className="section-heading scroll-reveal">About Me</h1>
            <div className="about-text">
                <p className="about-p">
                    Hello! I'm Adam Olah, a <strong>full-stack developer</strong> based in
                    Budapest. In 2021, I decided to shift my career toward{" "}
                    <strong>building digital products</strong> and{" "}
                    <strong>creating innovative solutions</strong>. To deepen my expertise, I
                    completed several intensive programs, including the{" "}
                    <strong>Full-stack java developer</strong> program at Noroff University and
                    the <strong>Frontend developer</strong> program at Progmatic Academy in
                    Budapest. Today, I focus on designing and building software, using{" "}
                    AI as a powerful tool to transform ideas into{" "}
                    <strong>practical, high-quality solutions</strong>.
                </p>
                <div className="about-skills-container scroll-reveal">
                    <h3 className="about-h3">Technologies I've Worked With</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCoffee}/> Java: Quarkus, Spring
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faDatabase}/> SQL: MySQL, PostgreSQL |
                            NoSQL: MongoDB
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs}/> JavaScript: NodeJS, ReactJS,
                            AngularJS
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGitAlt}/> Version Control: Git, GitHub,
                            GitLab
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHtml5}/> Web Technologies: HTML5, CSS,
                            Bootstrap
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTools}/> Tools: Jira, Hibernate,
                            Keycloak, Docker, Maven, REST, Apache Kafka
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faVial}/> Testing: JUnit, Mockito,
                            Wiremock
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCogs}/> DevOps: ArgoCD
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChartArea}/> Code Coverage: JaCoCo
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="hobbies-h3 scroll-reveal">Hobbies</h3>
            <div className="hobbies-div scroll-reveal">
                <div className="hobbies-container">
                    <SportsSoccerIcon className="icon-hb"/>
                    <AutoStoriesIcon className="icon-hb"/>
                    <DirectionsBikeIcon className="icon-hb"/>
                    <SportsEsportsIcon className="icon-hb"/>
                    <MovieIcon className="icon-hb"/>
                    <FlightIcon className="icon-hb"/>
                </div>
            </div>
        </div>
    );
};

export default About;
