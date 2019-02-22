import React, {Component} from 'react'
import {connect} from 'react-redux'
import SignUserIn from '../Redux/SignUserIn'

class SignIn extends Component {
    state = {
        email: null,
        password: null
    }

    submit = (e) => {
        e.preventDefault();
        this.props.SignUserIn(this.state);
    }
    
    changed = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
       
    return(
        <div className="card small">
            <div className="card-content">
                <div className="card-title">Sign In</div>
                <form onSubmit = {this.submit}>
                    <div className="input-field">
                        <i className="material-icons prefix brown-text text-darken-4">email</i>
                        <input type="text" id="email" onChange={this.changed}/>
                        <label htmlFor="email">Enter Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix brown-text text-darken-4">lock</i>
                        <input type="password" id="password" onChange={this.changed}/>
                        <label htmlFor="password">Enter Password</label>
                    </div>
                    <button className="btn brown darken-4">Sign In!</button>
                </form>
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        authError: state.authentication.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
      SignUserIn: (details) => dispatch(SignUserIn(details))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);