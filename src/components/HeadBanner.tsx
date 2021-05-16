import React from 'react'
import ButtonGroups from './ButtonGroups'
import TestimonialCard from './TestimonialCard'


import vid from '../imgs/vid/banner.mp4'
import pic1 from '../imgs/jim.jpg'
import pic2 from '../imgs/pam.jpg'



function HeadBanner() {

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
        <header className = 'header-banner'>
            <video muted loop id="banner-vid">
                <source src = {vid} type="video/mp4" />
            </video>
            <div id = 'banner-gradient'></div>
            <div className = 'header-banner-heading container'>
                <div>
                    <h1>
                        Creating stunning Brand and Web Experiences
                    </h1>
                </div>
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
                <div>
                    <TestimonialCard users = {users} />
                </div>
            </div>
        </header>
    )
}

export default HeadBanner