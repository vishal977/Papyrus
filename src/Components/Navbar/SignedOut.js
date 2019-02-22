import React from 'react'
import {Link} from 'react-router-dom'

const SignedIn = () => {
    return(
        <div>
        <ul className="right">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        </div>
    )
}

export default SignedIn;