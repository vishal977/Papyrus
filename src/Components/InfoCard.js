import React from 'react'
import '../App.css'

const InfoCard = () => {
    return(
            <div className="row">
                <div className="col s12 l4">
                    <h4 className="white-text">
                        &diams; Ensured Book Quality!
                    </h4>
                    <p className="grey-text text-lighten-1">You could still get that crisp scent of a newly printed book!</p>
                </div>
                <div className="col s12 l4">
                    <h4 className="white-text">
                            &diams; Hassle free returns!
                        </h4>
                        <p className="grey-text text-lighten-1">Not satisfied with what you bought? Feel free to return it!</p>
                </div>
                <div className="col s12 l4">
                    <h4 className="white-text">
                            &diams; Papyrus Merits!
                        </h4>
                        <p className="grey-text text-lighten-1">The Merit system helps you avoid suspicious sellers!</p>
                </div>
            </div>
    )
}

export default InfoCard;