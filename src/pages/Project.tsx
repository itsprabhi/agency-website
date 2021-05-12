import React from 'react'
import CaseStudies from '../data/CaseStudies'




const Project: React.FC = () => {

    
    const query = window.location.pathname.slice(1,)
    const cases = CaseStudies.find(el => el.url === query)
    

    return (
        <div className = 'project'>
            <div className = 'project-txt'>
                <h1>
                    {cases!.title}
                </h1>
                <span>Services - </span>{cases!.services}
            </div>
            <div className = 'project-img'>
                <img src = {cases!.thumbnail} alt = 'logo of client'></img>
            </div>
            <div className = 'project-content'>
                <p>
                    {cases?.text}
                </p>
            </div>
        </div>
    )
}

export default Project
