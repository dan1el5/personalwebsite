import '../App.css';
import jammybot from "../assets/jammybot.png"
import studytips from "../assets/studytips.png"
import wktrack from "../assets/wktrack.png"

import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
    return (
        <div className="main">
            <div>
                <p class="grey">click laptop for &lt; source code /&gt;</p>
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
                            <p className="projdesc">Dicord bot for playing music. <br /> Built with discord.py and hosted on repl.it</p>
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
                            <p className="projdesc">Interactive website, suggesting study methods. <br/>Built with HTML, CSS, and JS. Also uses google maps api and a voice command api, alan ai.</p>
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
                            <p className="projdesc">Practice with the MERN stack. Stores info in database. <br />Built with MongoDB, Express.js, React, Node.js</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Projects