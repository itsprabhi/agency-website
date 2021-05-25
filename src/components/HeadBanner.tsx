import React, {useRef, useEffect} from 'react'
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

// components
import ButtonGroups from './ButtonGroups'
import TestimonialCard from './TestimonialCard'

// media
import vid from '../imgs/vid/about.mp4'
import pic1 from '../imgs/jim.jpg'
import pic2 from '../imgs/pam.jpg'



function HeadBanner() {

    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    })

    useEffect(() => {
        if (inView) {
          animation.start("visible")
        }
      }, [animation, inView])



    const container = {
        initial: { y: 100 },
        animate: {
            y: 0,
            transition: {
            staggerChildren: 1,
            },
        },
        }
        const item = {
        initial: { y: 100 },
        animate: {
            y: 0,
            transition: {
            duration: 2,
            ease: [0.6, 0.05, -0.01, 0.5],
            },
        },
    }
    // site content
    const links: Array<{text:string,link:string,exact?:boolean}> = [
        {text: `Lets start a project together`, link: `mailto:hello@prodigycreatives.com`, exact:true},
        {text: `Book a free consultation in just 5 minutes`, link: `/contact`}
    ]
    const users: Array<{
        img: string,
        name: string,
        credential: string,
        quote: string
    }> = [
        {name:'Jane Doe', img: pic1 ,credential:'CEO', quote:'Prodigy creatives gave my brand exactly what it needed'},
        {name:'Jane Doe', img: pic2 ,credential:'CEO', quote:'Prodigy creatives gave my brand exactly what it needed'}
    ]

    return (
        <header className = 'header-banner' >
            <video autoPlay muted loop id="banner-vid">
                <source src = {vid} type="video/mp4" />
            </video>
            <div id = 'banner-gradient'></div>
            <div className = 'header-banner-heading container'>
                <motion.div variants = {container} initial="initial" animate="animate">
                    <motion.h1>
                        <motion.span variants = {item} >Creating stunning Brand</motion.span>
                        <motion.span variants = {item} > and Web Experiences</motion.span>
                    </motion.h1>
                </motion.div>
            </div>
            <div className = 'header-banner-txt container'>
                <div>
                    <div>
                        <p>
                            A creative agency that will help you to make your brand experience stunning so people won't forget.
                        </p>
                    </div>
                    <ButtonGroups links = {links} />
                </div>
                <motion.div 
                    ref={contentRef} 
                    animate={animation}
                    initial="hidden"
                    variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                    },
                    hidden: { opacity: 0, y: 50 },
                    }}>
                    <TestimonialCard users = {users}  />
                </motion.div>
            </div>
        </header>
    )
}

export default HeadBanner



