import React from 'react'
import SignedIn from './SignedIn'
import {connect} from 'react-redux'
import SignedOut from './SignedOut'


const Navbar = (props) => {
    var links = <SignedOut/>
        const {auth} = props
        if(auth.uid) {
            links = <SignedIn/>
        }
    return (
        <nav className="nav-wrapper brown darken-4 navbar">
        <div className="container">
                {links}
            </div>
            
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.authentication.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);