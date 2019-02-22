import React from 'react';
import PurpleDawn from '../Images/purpledawn.jpg'
import '../index.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


const Contact = ({auth}) => {
    if(auth.uid) return <Redirect to="/home"/>
    return(
        <div className="container one">
            <div className="card two">
                <div className="card-image three">
                   <img className = "four" src={PurpleDawn} alt="Purple Dawn"/> 
                </div>               
                 <div className="card-content">
                     <h4 className="center purple-text ">Contact Us!</h4>
                 </div>
                 <div className="card-action">
                     <div className="row">
                         <div className="col s6">
                            <div className="container">
                                <i className="material-icons left purple-text text-darken-4">email</i>
                                <span className="purple-text text-darken-4">purpledawnstudios@gmail.com</span>
                            </div>
                         </div>
                         <div className="col s6">
                            <div className="container right">
                                    <i className="material-icons left purple-text text-darken-4">phone</i>
                                    <span className="purple-text text-darken-4">+91 15486 15461</span>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Contact);