import '../App.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import jammybot from "../assets/jammybot.png"
import studytips from "../assets/studytips.png"
import wktrack from "../assets/wktrack.png"

const Projects = () => {
    return (
        <div className="main">
            <div className="projects">
                <h1 className="headerdesign">projects</h1>
                <div className="projectcards">
                    <CardGroup>
                        <Card className='cardstyle'>
                            <Card.Img variant="top" src={jammybot} />
                            <Card.Body>
                                <Card.Title>Jammy</Card.Title>
                                <Card.Text>
                                My favourite music bot was shut down, so I built a discord bot that takes commands and plays, pauses and resumes music. Built with the discord.py library and hosted on repl.it.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Python, Repl.it</small>
                                <br />
                                <a href="https://github.com/dan1el5/jammy" target="_blank" className="sourcecodetext">
                                    <span className="red">&lt;</span> source code <span className="red">/&gt;</span>
                                </a>
                            </Card.Footer>
                        </Card>

                        <Card className='cardstyle'>
                            <Card.Img variant="top" src={studytips} />
                            <Card.Body>
                                <Card.Title>Study Tips</Card.Title>
                                <Card.Text>
                                Submission for Sheridan Hackville 2022. Shows students good ways to study, and makes use of the google maps api, as well as alan ai, a voice command api.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">HTML, CSS, Javascript</small>
                                <br />
                                <a href="https://github.com/dan1el5/hackville-2022" target="_blank" className="sourcecodetext">
                                    <span className="red">&lt;</span> source code <span className="red">/&gt;</span>
                                </a>
                            </Card.Footer>
                        </Card>
                        
                        <Card className='cardstyle'>
                            <Card.Img variant="top" src={wktrack} />
                            <Card.Body>
                                <Card.Title>Workout Tracker</Card.Title>
                                <Card.Text>
                                Built using the MERN stack. Allows user input, and saves automatically.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">React, Node.js, Express.js, MongoDB</small>
                                <br />
                                <a href="https://github.com/dan1el5/WorkoutTracker" target="_blank" className="sourcecodetext">
                                    <span className="red">&lt;</span> source code <span className="red">/&gt;</span>
                                </a>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default Projects