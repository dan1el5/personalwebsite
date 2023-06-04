import '../App.css';

/** skills */
import { Container, Row, Col } from 'react-bootstrap';
import { DiReact, DiMongodb, DiPython, DiJava, DiHtml5, DiCss3, DiJavascript1, DiNodejs } from 'react-icons/di'
import { SiExpress, SiGit, SiVisualstudiocode, SiFastapi, SiPandas, SiReplit } from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'

/** projects */
import jammybot from "../assets/jammybot.png"
import studytips from "../assets/studytips.png"
import wktrack from "../assets/wktrack.png"
import bb from '../assets/buildingbuddy.png'
import compUI from '../assets/compUI.png'
import wdl from '../assets/wdl.png'

import Carousel from 'react-bootstrap/Carousel';

const DevPortfolio = () => {

    return (
        <div className="main">
            <div className="skills">
                <div>
                    <Container className="skillcontainer">
                        <h2 className="text">languages / frameworks</h2>
                        <Row>
                            <Col>
                            <DiReact className="skillicons" />
                            </Col>
                            <Col>
                            <SiExpress className="skillicons" />
                            </Col>
                            <Col>
                            <DiNodejs className="skillicons" />
                            </Col>
                            <Col>
                            <DiMongodb className="skillicons" />
                            </Col>
                            <Col>
                            <DiPython className="skillicons" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <DiJava className="skillicons" />
                            </Col>
                            <Col>
                            <TbLetterC className="skillicons" />
                            </Col>
                            <Col>
                            <DiHtml5 className="skillicons" />
                            </Col>
                            <Col>
                            <DiCss3 className="skillicons" />
                            </Col>
                            <Col>
                            <DiJavascript1 className="skillicons" />
                            </Col>
                        </Row>
                        <br />
                        <h2 className="text">tools</h2>
                        <Row>
                            <Col>
                            <SiGit className="skillicons" />
                            </Col>
                            <Col>
                            <SiFastapi className="skillicons" />
                            </Col>
                            <Col>
                            <SiPandas className="skillicons" />
                            </Col>
                            <Col>
                            <SiReplit className="skillicons" />
                            </Col>
                            <Col>
                            <SiVisualstudiocode className="skillicons" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="projects">
                <h2>projects</h2>
                <p className="grey" style={{fontSize: '15px'}}>click laptop for source code</p>
                <Carousel>
                    <Carousel.Item>
                        <a href="https://github.com/dan1el5/jammy" target="_blank" rel="noreferrer">
                            <img
                                className="projectimgs"
                                src={jammybot}
                                alt="jammy"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>Jammy</h3>
                            <p className="projdesc">Discord bot for playing music. <br /><span className="grey">discord.py, repl.it</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://github.com/dan1el5/BuildingBuddy" target="_blank" rel="noreferrer">
                            <img
                                className="projectimgs"
                                src={bb}
                                alt="building buddy"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>BuildingBuddy</h3>
                            <p className="projdesc">2nd year group project that makes school maps interactive.<br /><span className="grey">Java, Java Swing, JSON data handling</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://github.com/Jaxz102/dt-wdl" target="_blank" rel="noreferrer">
                            <img
                                className="projectimgs"
                                src={wdl}
                                alt="wdl"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>Western Developer's League</h3>
                            <p className="projdesc">My developer project during my time at Western Developer's Society.<br /><span className="grey">React</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://github.com/dan1el5/hackville-2022" target="_blank" rel="noreferrer">
                            <img
                                className="projectimgs"
                                src={studytips}
                                alt="study tips"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>StudyTips</h3>
                            <p className="projdesc">Hackathon submission, dynamic website suggesting study methods. <br/><span className="grey">HTML, CSS, Javascript, google maps api, alan AI</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://github.com/dan1el5/WorkoutTracker" target="_blank" rel="noreferrer">
                            <img
                                className="projectimgs"
                                src={wktrack}
                                alt="workout tracker"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>Workout Tracker</h3>
                            <p className="projdesc">Practice with the MERN stack.<br /><span className="grey">MongoDB, Express.js, React, Node.js</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="projectimgs"
                            src={compUI}
                            alt="compUI"
                        />
                        <Carousel.Caption>
                            <h3>Compensation Workbook UI</h3>
                            <p className="projdesc">WebApp for internal use at my summer data analyst internship @ sciex.<br /><span style={{fontStyle: 'italic'}}>(no source code provided)</span><br/><span className="grey">Python, FastAPI, htmx, pandas</span></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    )
}

export default DevPortfolio