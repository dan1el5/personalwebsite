import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { DiReact, DiMongodb, DiPython, DiJava, DiHtml5, DiCss3, DiJavascript1, DiNodejs } from 'react-icons/di'
import { SiExpress, SiGit, SiVisualstudiocode, SiPostman, SiBootstrap, SiReplit } from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'

// change div with all icons to container

const Skills = () => {
    
    return (
        <div className="main">
            <div>
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
                            <SiPostman className="skillicons" />
                            </Col>
                            <Col>
                            <SiBootstrap className="skillicons" />
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
        </div>
    )
}

export default Skills