import React from 'react'

interface Props {
    users: {
        img: string,
        name: string,
        credential: string,
        quote: string
    }[]
}

const TestimonialCard: React.FC<Props> = ({ users }) => {
    return (
        <div className = 'testimonial-user-container'>
            {users.map(user => {
                return (
                    <div className = 'testimonial-user-card'>
                        <div className = 'testimonial-user-img'>
                            <img src = {user.img} alt = 'previous customer' />
                        </div>
                        <div className = 'testimonial-user-txt'>
                            <div>
                                <h4>{user.name}</h4>
                                <h6>{user.credential}</h6>
                                <p>"{user.quote}"</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TestimonialCard
