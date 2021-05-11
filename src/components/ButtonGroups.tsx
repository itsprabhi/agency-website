import React from 'react'
import { Link } from 'react-router-dom'



interface Props {
    links: {
        text:string,
        link:string,
        exact?:boolean
    }[]
}

const ButtonGroups: React.FC<Props> = ({
    links
}) => {
    return (
        <div className = 'btn-group'>
            {links.map(el => {
                return (
                    <div className = 'btn'>
                        {el.exact ? <a href = {el.link}>{el.text}</a> : <Link to = {el.link}>{el.text}</Link>}
                    </div>
                )   
            })}
        </div>
    )
}

export default ButtonGroups
