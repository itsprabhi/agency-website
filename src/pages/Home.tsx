import React from 'react'
import ButtonGroups from '../components/ButtonGroups'
import HeadBanner from '../components/HeadBanner'



const HomeAbout: React.FC = () => {
    return (
        <div className = 'home-about'>
            <div className = 'home-about-vid'></div>
            <div className = 'home-about-txt'>
                <h1>About Us</h1>
                <p>
                    Prodigy creatives is a branding and web design agency based in Barrie, Ontario. We create experiences that people love by aligning business goals with creativity.
                </p>
                <h4>
                    Here is what we do
                </h4>
                <div className = 'service-lists'>
                    <div className = 'service-list'>
                        <h5>
                            Design
                        </h5>
                        <ul>
                            <li>Web design</li>
                            <li>Copywriting</li>
                            <li>Content Creation</li>
                        </ul>
                    </div>
                    <div className = 'service-list'>
                        <h5>
                            Strategy
                        </h5>
                        <ul>
                            <li>Market strategy</li>
                            <li>SEO</li>
                            <li>Brand Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HomeCTA: React.FC = () => {

    const links = [
        {text:`Book a free consultation in just 5 minutes`,link:`/contact`}
    ]

    return (
        <div className = 'home-cta'>
            <div className = 'home-cta-txt'>
                <h2>
                    Get a free consultation!
                </h2>
                <p>
                    Book a free 30 minutes consultation with our remarkable team. Discuss your brand problems and get the best solutions. You will receive many insights to fix and improve your brand strategy. Why wait!
                </p>
                <ButtonGroups links = {links}/>
            </div>
        </div>
    )
}


function Home() {
    return (
        <>
            <HeadBanner />
            <HomeAbout />
            <HomeCTA />
        </>
    )
}

export default Home
