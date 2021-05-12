import React from 'react'
import Team from '../data/Team'


const Teams:React.FC= () => {

    const team = Team

    return (
        <div className = 'teams'>
            <div className = 'teams-txt page-txt'>
                <h1>
                    Our Team
                </h1>
            </div>
            <div className = 'teams-cards'>
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
        </div>
    )
}

export default Teams
