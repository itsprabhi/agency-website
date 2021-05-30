import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { Parallax } from 'react-scroll-parallax';


import Accordian from '../components/Accordian'
import ButtonGroups from '../components/ButtonGroups'
import HeadBanner from '../components/HeadBanner'

import CaseStudies from '../data/CaseStudies'
import aboutVid from '../imgs/vid/about.mp4'

const HomeAbout: React.FC = () => {

    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px",
    })


    useEffect(() => {
        if (inView) {
          animation.start("visible")
        }
      }, [animation, inView])

      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }

      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    
    return (
        <div className = 'home-about'>
            <div className = 'home-about-vid'>
                <div className = 'home-vid-filter'></div>
                <div className = 'home-vid-container'>
                    <video muted loop id="banner-vid" autoPlay>
                        <source src = {aboutVid} type="video/mp4" />
                    </video>
                </div>
            </div>
           <div className = 'container'>
                <motion.div className = 'home-about-txt' ref={contentRef}
                        animate={animation}
                        initial="hidden"
                        variants={{
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                        },
                        hidden: { opacity: 0, y: 72 },
                    }}>
                    {/* <h1>About <br />Us</h1> */}
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
                            <motion.ul 
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                <motion.li variants={item} >Web design</motion.li>
                                <motion.li variants={item} >Copywriting</motion.li>
                                <motion.li variants={item} >Content Creation</motion.li>
                            </motion.ul>
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
                </motion.div>
           </div>
        </div>
    )
}

// const ParallaxImage = () => (
    
// );


const HomeWork: React.FC = () => {

    const cases = CaseStudies

    return (
        <div className = 'home-work'>
            <div className = 'home-work-txt container page-heading'>
                <h1>
                    Our Work
                </h1>
            </div>
            <div className = 'home-work-cards-container container'>
            {cases.map(customer => {
                return (
                    <Link to = {`/${customer.url}`}>
                    <div className= 'home-work-card'>
                        <div className = 'home-work-card-img'>
                            <div className = 'home-work-filter'></div>
                            <img src = {customer.thumbnail} alt = 'customer thumbnail'/>
                        </div>
                        <div className = 'home-work-card-txt'>
                        
                            <div>
                                <Parallax className="custom-class" y={[-10, -200]} tagOuter="figure">
                                <h3>
                                    {customer.title}
                                </h3>
                                <h6>
                                    Services
                                </h6>
                                <p>
                                    {customer.services}
                                </p>
                                </Parallax>
                            </div>
                        
                        </div>
                    </div>
                    </Link>
                )
            })}
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
            <div className = 'home-cta-txt container'>
                <h1 className = 'page-heading'>
                    Get a <span>free</span> consultation!
                </h1>
                <p>
                    Book a free 30 minutes consultation with our remarkable team. Discuss your brand problems and get the best solutions. You will receive many insights to fix and improve your brand strategy. Why wait!
                </p>
                <ButtonGroups links = {links}/>
            </div>
        </div>
    )
}


const  Home:React.FC = () => {

    const faq: Array<{question:string,answer:string}> = [
        {
            question:'How much the web services cost',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            question:'How much time will it take to buid a website',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            question:'Why should we chose Prodigy creatives',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
    ]

    return (
        <>
            <HeadBanner />
            <HomeAbout />
            <HomeWork />
            <HomeCTA />
            <Accordian questions = {faq} />
        </>
    )
}

export default Home
