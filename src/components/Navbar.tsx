import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className = 'brand'>
                Prodigy<span> Creatives </span>
            </div>
            <div className = 'nav-list'>
                <ul>
                    <li>
                        <Link to = '/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to = '/work'>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to = '/team'>
                            Our Team
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
