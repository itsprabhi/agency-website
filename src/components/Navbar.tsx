import React, {useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'

function Navbar() {


    const [navSettings, SetNavSettings] = useState({
        navClass: 'nav-absolute',
        switch: false
    })

    const location = useLocation()

    const navSwitch = () => {
        SetNavSettings({
            ...navSettings,
            switch: !navSettings.switch
        })
        console.log(navSettings.switch)
    }


    useEffect(() => {
        if(location.pathname === '/'){
            SetNavSettings({
                ...navSettings,
                navClass:'nav-absolute'
            })
        }else{
            SetNavSettings({
                ...navSettings,
                navClass:''
            })
        }
    },[location])

    return (
        <nav className = {navSettings.navClass}>
            <div className = 'nav container'>
                <div className = 'brand'>
                    Prodigy<span> Creatives </span>
                </div>
                <div className = {`nav-list ${navSettings.switch}`}>
                    <ul>
                        <li>
                            <Link onClick = {navSwitch} to = '/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick = {navSwitch} to = '/work'>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link onClick = {navSwitch} to = '/team'>
                                Our Team
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className = {`toggle`} onClick = {navSwitch}>
                    <div className="toggle-btn"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
