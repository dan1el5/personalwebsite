import '../App.css';
import aurelis from '../assets/aurelis.png'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Agency = () => {
    return (
        <div className="main">

            <div className="agency">

                <div className="agencyleft">
                    <h1 style={{fontWeight: 'bold'}}>Aurelis Agency</h1>
                    <br/>
                    <p style={{fontSize: '20px'}}>
                        I started my agency around December 2022 with the goal of helping other people through leveraging software.<br/><br/>
                        At Aurelis, we specialize in optimizing digital presence through:<br/><br/>

                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                        <AiOutlineCheckCircle />
                        <span className="grey">&nbsp;&nbsp;&nbsp;Custom Websites</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                        <AiOutlineCheckCircle />
                        <span className="grey">&nbsp;&nbsp;&nbsp;Social Media Management</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                        <AiOutlineCheckCircle />
                        <span className="grey">&nbsp;&nbsp;&nbsp;Workflow Automation</span>
                        </div>

                        <br/>Some social proof: <br/><br/>

                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                        <AiOutlineCheckCircle />
                        <span className="grey">&nbsp;&nbsp;&nbsp;100+ discovery calls booked</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                        <AiOutlineCheckCircle />
                        <span className="grey">&nbsp;&nbsp;&nbsp;10+ project completed</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                        <AiOutlineCheckCircle />
                        <span className="grey">&nbsp;&nbsp;&nbsp;$3k+ generated in revenue</span>
                        </div>

                        <br/>

                        <a href='https://calendly.com/aurelis/15min' className="filled-button" target="_blank" rel="noreferrer">
                        book a discovery call
                        </a>

                    </p>
                </div>

                <div className="agencyright">
                    <img
                        className="aurelislogo"
                        src={aurelis}
                        alt="dan"
                    />

                </div>

            </div>

        </div>
    );
};

export default Agency