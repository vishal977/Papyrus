import React, { Component } from 'react'
import Books from './Books'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Home extends Component {
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/"/>
        return(
            <div className="container brown darken-3">
                <Books/>
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