import '../App.css';
import ParticlesComponent from './Particles'

import { BiEnvelope, BiPlanet } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import sig from '../assets/signature-transparent.png'


const Home = () => {
    return (
        <div className="main">

            <div className="home">
                <ParticlesComponent id="tsparticles" />
                <h1 className="name">Hi, I'm Dan.</h1>
                <p className="grey">student, developer, creator.</p>
                <img
                        className="signature"
                        src={sig}
                        alt="signature"
                    />
            </div>

            <div className="help">
                <h1>3 WAYS I CAN HELP YOU</h1>
                <br/>
                <hr className="horizontal-line" />
                <div className="methods">

                    <div className="method">
                        <BiEnvelope className="helppics" />
                        <h3>NEWSLETTER</h3>
                        <p>philosophy and tech driven personal development strategies - straight to your inbox.</p>
                        <a href='https://dangomes.substack.com/' className="filled-button" target="_blank" rel="noreferrer">
                            check out the letter
                        </a>
                    </div>

                    <div className="method">
                        <FaLinkedinIn className="helppics" />
                        <h3>LINKEDIN CONTENT</h3>
                        <p>insights on self-development, tech, and the creator economy.</p>
                        <a href='https://www.linkedin.com/in/daniel-gomes-6280951a3/' className="filled-button" target="_blank" rel="noreferrer">
                            read some content
                        </a>
                    </div>

                    <div className="method">
                        <BiPlanet className="helppics" />
                        <h3>AURELIS</h3>
                        <p>my digital transformation agency - everything from custom software to content creation.</p>
                        <a href='https://aurelisagency.com/' className="filled-button" target="_blank" rel="noreferrer">
                            scroll through the site
                        </a>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home