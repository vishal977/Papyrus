import React from 'react'
import '../CSS Files/Welcome.css'
import SignIn from './SignIn.js';
import InfoCard from './InfoCard'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


const Welcome = ({auth}) => {
    if(auth.uid) return <Redirect to="/home"/>
    return (
        <div className="welcome-page">
        <header className="headerWelcome">
        </header>
        <section className="section container" id="welcome"> 
                <div className="row">
                    <div className="col s12 l4">
                        <h3 className="brown-text text-darken-4">Welcome to Papyrus!</h3>
                        <p className="flow-text">
                            Let's explore the world... One book at a time!
                        </p>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <SignIn/>
                    </div>
                </div>
            </section>
            <div className="card-panel brown darken-4">
                    <InfoCard/>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        authError: state.authentication.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Welcome);