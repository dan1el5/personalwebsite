import '../App.css';
import aboutpic from "../assets/aboutpic.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faFile } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    return (
        <div className="main">
            <div className="about">
                <div className="aboutcontent">
                    <div className="abouttext">
                        <h1 className="headerdesign">about me</h1>
                        <br />
                        <br/>
                        <p>Hi, I'm Daniel Gomes and I'm a software developer and student.</p>
                        <p>I'm passionate about full stack development, and am currently in my 2nd year at western university,<br /> specializing in computer science.</p>
                        <p>I am passionate about using technology to solve real world problems, and hope to enter <br/> the start up space in the near future.</p>
                        <p>In my free time, I read avidly, enjoy working out, and try to learn what I can about the world.</p>
                        <p>For more about me, see my <span className="red">blog</span> and <span className="red">resume</span> below.</p>

                        <div className="abouticons">
                            <div>
                                <a href="https://medium.com/@danielgomes056" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="abouticonstyle" icon={faPencil}/>
                                </a>
                            </div>

                            <div>
                                <a href="https://docs.google.com/document/d/1g9MQ46eUSAe-FJO3Z5f0EJcSfcFpCgPRn1G8n1K77Ns/edit?usp=sharing" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="abouticonstyle" icon={faFile}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="aboutpic">
                        <img src={aboutpic} style={{maxHeight: "500px"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About