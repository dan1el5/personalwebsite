import '../App.css';
import jammybot from "../assets/jammybot.png"
import studytips from "../assets/studytips.png"
import wktrack from "../assets/wktrack.png"

import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
    return (
        <div className="main">
            <div className="projects">
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
                            <p className="projdesc">Dicord bot for playing music. <br /><span className="grey">discord.py, repl.it</span></p>
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
                            <p className="projdesc">Interactive website, suggesting study methods. <br/><span className="grey">HTML, CSS, Javascript, google maps api, alan AI</span></p>
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
                </Carousel>
            </div>
        </div>
    );
};

export default Projects