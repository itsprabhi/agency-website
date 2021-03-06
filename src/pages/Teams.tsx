import React from 'react'
import ButtonGroups from '../components/ButtonGroups'
import Team from '../data/Team'


const Teams:React.FC= () => {

    const team = Team

    const links: Array<{text:string,link:string,exact?:boolean}> = [
        {text: `Book a free consultation in just 5 minutes`, link: `/contact`}
    ]

    return (
        <div className = 'teams'>
            <div className = 'teams-txt page-heading'>
                <h1>
                    Our Team
                </h1>
            </div>
            <div className = 'teams-cards container'>
                {team.map(member => {
                    return (
                        <div className = 'team-card'>
                            <div className = 'team-card-photo'>
                                <img src = {member.img} alt = 'member'></img>
                            </div>
                            <div className = 'team-card-txt'>
                                <h4>
                                    {member.name}
                                </h4>
                                <h6>
                                    {member.credential}
                                </h6>
                            </div>
                        </div>
                    )
                })}
            </div>
           <div className="team-cta">
           <ButtonGroups links = {links} />
           </div>
        </div>
    )
}

export default Teams
