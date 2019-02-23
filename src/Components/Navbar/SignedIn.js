import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import signUserOut from '../../Redux/signUserOut'

const SignedIn = (props) => {
    return (
        <div>
            <ul className="right">
                <li>
                    <Link to="/">
                    Store
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                    Cart
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist">
                    Wishlist
                    </Link>
                </li>
                <li>
                    <a onClick = {props.signUserOut} className = "brown darken-4">Sign Out</a>
                </li>
                
            </ul>
        </div>
    )
}

const mapDispatchToProps=(dispatch) => {
    return {
        signUserOut: () => dispatch(signUserOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedIn);