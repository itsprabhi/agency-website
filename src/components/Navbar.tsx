import React, {useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'

function Navbar() {


    const [homePageCheck, SethomePagecheck] = useState('nav-absolute')

    const location = useLocation()


    useEffect(() => {
        if(location.pathname === '/'){
            SethomePagecheck('nav-absolute')
        }else{
            SethomePagecheck('')
        }
    },[location])

    return (
        <nav className = {homePageCheck}>
            <div className = 'nav container'>
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
                <div className = 'toggle'></div>
            </div>
        </nav>
    )
}

export default Navbar
