import '../App.css';

import { BsArrowDown} from "react-icons/bs"

// import tsparticles
import ParticlesComponent from './Particles';

const Home = () => {
    return (
        <div className="main">
            <div className="home">
                <ParticlesComponent id="tsparticles" />
                <h1>Hi, I'm Dan.</h1>
                <h3>CS @ Western University</h3>

                <div className="arrowcontainer">
                    <BsArrowDown className="arrow" />
                </div>
            </div>
        </div>
    );
};

export default Home