import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
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
                        I'm a university student, owner of a digital transformation agency, and I also create content. <br/><br/>
                        I am driven by the pursuit of meaningful progress and the endless possibilities that come with conquering the self. <br/><br/>
                        I'm especially interested in applying the results of personal development to achieve digital growth; establishing a brand, scaling a business, etc. <br/><br/>
                        Combining those two areas, I attempt to use philosophy to create strong foundations for self development, and leverage technology to learn with intent and build cool things that help others.
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
                    <span className="grey">&nbsp;&nbsp;&nbsp;Self-Development Content Creator</span>
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
                        <a href="https://www.linkedin.com/in/daniel-gomes-6280951a3/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="iconstyling" icon={faLinkedin}/>
                        </a>
                        <a href="https://twitter.com/eudanmonia" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="iconstyling" icon={faTwitter}/>
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