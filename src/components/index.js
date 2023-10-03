import '../App.css';
import NewsletterForm from './NewsletterForm';

import { Link } from 'react-router-dom';
import { BiEnvelope, BiPlanet } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'

import sig from '../assets/signature-transparent.png'
import pathforgeBanner from '../assets/pathforge_banner.png'


const Home = () => {
    return (
        <div className="main">

            <div className="home">
                <div className="homeleft">
                    <h1 className="name">Hi, I'm Dan.</h1>
                    <p className="grey">student, developer, creator.</p>
                    <img className="signature" src={sig} alt="signature"/>
                </div>

                <div className="homeright">
                    <h1>NEWSLETTER</h1>
                    <p className="grey">Join for free - start forging your own unique path in life.</p>
                    <img
                        style={{ width: '450px', height: '100px'}} 
                        src={pathforgeBanner}
                        alt="PathForge"
                    />
                    <NewsletterForm />
                </div>
            </div>

            <div className="help">
                <h1>3 WAYS I CAN HELP YOU</h1>
                <br/>
                <hr className="horizontal-line" />
                <div className="methods">

                    <div className="method">
                        <BiEnvelope className="helppics" />
                        <h3>PATHFORGE</h3>
                        <p>read about forging your own unique path in life in my free newsletter.</p>
                        <Link to="/newsletter" className="filled-button">
                            more about the letter
                        </Link>
                    </div>

                    <div className="method">
                        <FaLinkedinIn className="helppics" />
                        <h3>LINKEDIN CONTENT</h3>
                        <p>I talk about digital leverage, and how to use the internet to pursue your goals.</p>
                        <a href='https://www.linkedin.com/in/thedangomes/' className="filled-button" target="_blank" rel="noreferrer">
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