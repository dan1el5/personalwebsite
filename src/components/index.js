import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    return (
        <div className="App">
            <div class="main">
                <div class="icons">
                <a href="https://github.com/dan1el5" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon class="iconstyling" icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/daniel-gomes-6280951a3/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon class="iconstyling" icon={faLinkedin}/>
                </a>
                <a href="https://www.instagram.com/dan.g0mes/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon class="iconstyling" icon={faInstagram}/>
                </a>
                <a href="https://docs.google.com/document/d/1g9MQ46eUSAe-FJO3Z5f0EJcSfcFpCgPRn1G8n1K77Ns/edit?usp=sharing" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon class="iconstyling" icon={faFile}/>
                </a>
                </div>
                <h1 class="desc">Hi, I'm Dan.</h1>
                <h2 class="desc">CS | Western University</h2>
                <p class="desc" >I'm a 2nd year student passionate about using technology to solve problems. <br/>
                See some of my projects, look at my resume, or feel free to message me.</p>
            </div>
        </div>
    );
};

export default Content