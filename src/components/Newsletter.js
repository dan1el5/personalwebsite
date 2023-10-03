import '../App.css';

import NewsletterForm from './NewsletterForm';

import pathforgePhone from '../assets/pathforge_phone.png'
import pathforgeBanner from '../assets/pathforge_banner.png'

const Newsletter = () => {
    
    return (
        <div className="main">

            <img
                style={{ width: '50%', height: '50%', paddingTop: '100px', marginBottom: '-100px' }} 
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
                        Using the lessons that the past 2 years of rigorous self-development have taught me, I'll show you how to start forging your own unique path in life (instead of spending your existence following one without question or purpose).<br/><br/>
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