import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import me from '../assets/aboutpic.png'

const About = () => {

    return (
        <div className="main">

            <div className="about">

                <div className="aboutleft">
                    <h1 style={{fontWeight: 'bold'}}>Hey, I'm Dan.</h1>
                    <br/>
                    <p style={{fontSize: '20px'}}>
                        I'm a computer science student, owner of a digital transformation agency, and I also create content. <br/><br/>
                        I'm currently in my 3rd year at Western, pursuing an undergrad in computer science (which is going pretty well). <br/><br/>
                        I started my agency in December 2022. Our main focus is enhancing digital presence for small businesses & creators.<br/><br/>
                        I write content on LinkedIn about digital leverage, because I am obssessed with its potential. I also write a newsletter focused on digital leverage.<br/><br/>
                        With the skills I've gained from these ventures, I'm aiming to enter the startup space in the near future.
                    </p>

                    <br/>
                    
                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                    <AiOutlineCheckCircle />
                    <span className="grey">&nbsp;&nbsp;&nbsp;Computer Science at Western University</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                    <AiOutlineCheckCircle />
                    <span className="grey">&nbsp;&nbsp;&nbsp;Co-Founder & CEO of Aurelis</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                    <AiOutlineCheckCircle />
                    <span className="grey">&nbsp;&nbsp;&nbsp;Content Creator</span>
                    </div>
                </div>

                <div className="aboutright">
                    <img
                        className="aboutimg"
                        src={me}
                        alt="dan"
                    />
                    <div>
                        <a href="https://github.com/dan1el5" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="iconstyling" icon={faGithub}/>
                        </a>
                        <a href="https://www.linkedin.com/in/thedangomes/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="iconstyling" icon={faLinkedin}/>
                        </a>
                        <a href="mailto:danielgomes056@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="iconstyling" icon={faEnvelope}/>
                        </a>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default About