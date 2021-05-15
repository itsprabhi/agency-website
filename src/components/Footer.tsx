import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {

    return (
        <footer>
            <div className="container">
            <div className = 'footer-contact'>
                <h1>
                    Get in <span>touch</span>
                </h1>
                <p>
                    <span>Email us - </span><a href = 'hello@prodigycreatives.com'>hello@prodigycreatives.com</a>
                </p>
                <p>
                    <span>Address - </span>900 Hickling Dr, Barrie 
                </p>
                <div className = 'footer-social'>
                    <ul>
                        <li>
                            <a target = '_blank' href = '/#'>
                                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt ='' />
                            </a>
                        </li>
                        <li>
                            <a target = '_blank' href = '/#'>
                                <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt =''/>
                            </a>
                        </li>
                        <li>
                            <a target = '_blank' href = '/#'>
                                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt =''/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className = 'footer-menu'>
                <h3>
                    <Link to = '/contact'>Tell Us About the <span>Project</span></Link>
                </h3>
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
            </div>
            </div>
            <div className="copyrights">
                Prodigy Creatives@{new Date().getFullYear()}. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
