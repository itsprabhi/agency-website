import React from 'react'
import { Link } from 'react-router-dom'
import CaseStudies from '../data/CaseStudies'

const Work: React.FC = () => {

    const cases = CaseStudies

    return (
        <div className = ''>
            <div className = 'work-txt page-txt page-heading'>
                <h1>
                    Our <span>Work</span>
                </h1>
            </div>
            <div className = 'work-cards-container container'>
            {cases.map(customer => {
                return (
                    <Link to = {`/${customer.url}`} >
                    <div className= 'work-card'>
                        <div className = 'work-card-img'>
                            <img src = {customer.thumbnail} alt = 'customer thumbnail'/>
                        </div>
                        <div className = 'work-card-txt'>
                            <div>
                                    <h3>
                                        {customer.title}
                                    </h3>
                                    <h6>
                                        Services
                                    </h6>
                                    <p>
                                        {customer.services}
                                    </p>
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

export default Work
