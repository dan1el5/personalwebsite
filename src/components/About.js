import '../App.css';
import img from '../assets/undraw.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPencil } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    return (
        <div className="main">
            <div className="abouttext">
                <p>My name is Daniel Gomes. I'm a 2nd year student at western university, specializing in computer science. I've been coding for about 5 years.</p>
                <p>I'm a developer at Western Developer's Society, and a business content creator at Western Tech Review.
                I'm also an avid reader, and passionate about fitness. </p>
                <p>A few of my skills are full stack development, digital marketing, investment analysis, and algorithm design.</p>
                <a href="https://docs.google.com/document/d/1g9MQ46eUSAe-FJO3Z5f0EJcSfcFpCgPRn1G8n1K77Ns/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="aboutbuttons" icon={faFile}/>
                </a>
                <a href="https://medium.com/@danielgomes056" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="aboutbuttons" icon={faPencil}/>
                </a>
            </div>

            <div className="aboutcontent">
                <img src={img} alt="logo" className="aboutimg"/>
            </div>
        </div>
    )
}

export default About