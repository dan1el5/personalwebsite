import '../App.css';

import NewsletterForm from './NewsletterForm';

import pathforgePhone from '../assets/pathforge_phone.png'
import pathforgeBanner from '../assets/pathforge_banner.png'

const Newsletter = () => {
    
    return (
        <div className="main">

            <img
                className="img-mobile-padding"
                style={{ width: '60%', height: '60%', paddingTop: '100px', marginBottom: '-100px' }} 
                src={pathforgeBanner}
                alt="PathForge"
            />

            <div className="newsletter">
                <div className="newsletterleft">
                    <img
                        className="pathforgephone"
                        src={pathforgePhone}
                        alt="PathForge"
                    />
                </div>

                <div className="newsletterright">
                    <h1 style={{fontWeight: 'bold', paddingBottom: '10px'}}>PathForge Newsletter</h1>
                    <p style={{color: '#AEAEAE', paddingBottom: '30px'}}>
                        Want to learn how to leverage the internet to achieve your goals? That's what I'm trying to do, and I'll teach you what I learn along the way.<br/><br/>
                        → Develop the skills needed for actual growth <br/>
                        → Leverage the internet to build meaningful projects <br/>
                        → Forge a new, unique path into existence
                    </p>

                    <NewsletterForm />
                    
                    <p style={{color: '#AEAEAE', fontStyle: 'italic', paddingTop: '30px'}}>5 minute read, delivered bi-weekly.</p>
                </div>

            </div>

        </div>
        
    )
}

export default Newsletter