import '../App.css';

import dp from '../assets/sitedpmockup.png'

const Newsletter = () => {
    
    return (
        <div className="main">

            <div className="newsletter">

                <div className="newsletterleft">
                    <img
                        className="dpmock"
                        src={dp}
                        alt="digital philosophy"
                    />
                </div>

                <div className="newsletterright">
                    <h1 style={{fontWeight: 'bold', paddingBottom: '10px'}}>Digital Philosophy Newsletter</h1>
                    <p style={{color: '#AEAEAE', paddingBottom: '30px'}}>
                        Self-development using philosophy to create foundations, and technology to learn and build.<br/>
                        → Apply philosophical methods to improve character <br/>
                        → Leverage tech to learn intently and maximize output
                    </p>
                    <a href='https://dangomes.substack.com/embed' className="filled-button" target="_blank" rel="noreferrer">
                            subscribe for free
                    </a>
                    <p style={{color: '#AEAEAE', fontStyle: 'italic', paddingTop: '30px'}}>5 minute read, delivered weekly.</p>
                </div>

            </div>

        </div>
        
    )
}

export default Newsletter