import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    return (
        <div className="main">
            <div>
                <div className="contacttext">
                    <h1>feel free to <span className="grey">contact</span> me!</h1>
                </div>
                <div className="icons">
                    <a href="https://github.com/dan1el5" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="iconstyling" icon={faGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-gomes-6280951a3/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="iconstyling" icon={faLinkedin}/>
                    </a>
                    <a href="mailto:danielgomes056@gmail.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="iconstyling" icon={faEnvelope}/>
                    </a>
                    <a href="https://twitter.com/dan1el_G" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="iconstyling" icon={faTwitter}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact