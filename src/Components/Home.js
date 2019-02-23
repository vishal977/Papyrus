import React, { Component } from 'react'
import Books from './Books'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import '../CSS Files/Store.css'


class Home extends Component {
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/"/>
        return(
            <div>
            <header className="headerStore"></header>
            <div className="container brown darken-3">
                <Books/>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home);