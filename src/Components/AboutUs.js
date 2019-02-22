import React from 'react'
import vishal from '../Images/vishal.jpg'
import kumaran from '../Images/kumaran.jpg'
import '../App.css'

const AboutUs = () => {
    return(
        <div>
        <div className="container">
            <h3 className="brown-text text-darken-4">Developed with &hearts; by</h3>
        <div className="row">
            <div className="col s12 l5">
                <div className="card aboutcard">
                    <div className="card-image">
                        <img src={vishal} alt="vishal" />
                        
                    <a className="btn-floating halfway-fab waves-effect waves-light red activator pulse"><i className="material-icons">expand_less</i></a>
                    </div>
                    <div className="card-reveal">
                    <b><span className="card-title grey-text text-darken-4">Vishal N
                            <i className="material-icons right red-text">close</i></span></b>
                            <p>
                                <b>Github:&nbsp;</b> <a href="https://www.github.com/vishal977">https://www.github.com/vishal977</a> <br/>
                                <b>Facebook:&nbsp;</b> <a href="https://www.facebook.com/vishal.narayanan99">https://www.facebook.com/vishal.narayanan99</a>
                            </p>
                    </div>
                    
                </div>
            </div>
            <div className="col s12 l5 offset-l1">
            <div className="card">
                    <div className="card-image">
                        <img src={kumaran} alt="kumaran"/>
                        
                    <a className="btn-floating halfway-fab waves-effect waves-light red activator pulse"><i className="material-icons">expand_less</i></a>
                    </div>
                    <div className="card-reveal">
                    <b><span className="card-title grey-text text-darken-4">Kumaran N
                            <i className="material-icons right red-text">close</i></span></b>
                            <p>
                                <b>Github:&nbsp;</b> <a href="https://www.github.com/LazyWinner">https://www.github.com/LazyWinner</a> <br/>
                                <b>Facebook:&nbsp;</b> <a href="https://www.facebook.com/kumaran.champ.583">https://www.facebook.com/kumaran.champ.583</a>
                            </p>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </div>
        
        </div>
    )
}

export default AboutUs;