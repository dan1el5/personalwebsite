import '../App.css';

import habithandbook from '../assets/habithandbook.png'
import { GiVideoConference } from 'react-icons/gi'
import { BiPlanet } from 'react-icons/bi'

const Resources = () => {
    return (
        <div className="main">

            <div className="calendly">
                <div className="calendlyleft">
                    <GiVideoConference className="calendlyimg" />
                </div>
                <div className="calendlyright">
                    <h2 style={{fontWeight: 'bold'}}>1 on 1 Call</h2>
                    <p>Book a call with me! <br/> I love exchanging ideas and perspectives with like minded people.</p>
                    <a href='https://calendly.com/dangomes-chat/30min?month=2023-06' className="filled-button" target="_blank" rel="noreferrer">
                            schedule a time
                    </a>
                </div>
            </div>

            <div className="habithandbook">
                <div className="hhleft">
                    <h2 style={{fontWeight: 'bold'}}>The Habit Handbook</h2>
                    <p>My free notion dashboard which dives into 10 habits that will help you reach your human potential.</p>
                    <a href='https://dan-gomes.ck.page/0fdd5ff784' className="hh-button" target="_blank" rel="noreferrer">
                            grab the handbook
                    </a>
                </div>
                <div className="hhright">
                    <img
                        className="hhimg"
                        src={habithandbook}
                        alt="habit handbook"
                    />
                </div>
            </div>

            <div className="discoverycall">
                <div className="discleft">
                    <BiPlanet className="discimg" />
                </div>
                <div className="discright">
                    <h2 style={{fontWeight: 'bold'}}>Aurelis Discovery Call</h2>
                    <p>Speak with me and the team about your digital needs - free of charge.</p>
                    <a href='https://calendly.com/aurelis/15min' className="filled-button" target="_blank" rel="noreferrer">
                            book a discovery call
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Resources