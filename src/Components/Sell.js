import React, { Component } from 'react'

class Sell extends Component {
    render(){
        return(
             <div className="container">
                <form action="localhost:3000">
                    <div className="input-field">
                        <input type="text" id="booktitle"/>
                        <label htmlFor="booktitle">Book Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="bookauthor"/>
                        <label htmlFor="bookauthor">Author</label>
                    </div>
                    <div className="input-field">
                        <input type="number" id="bookprice"/>
                        <label htmlFor="bookprice"></label>
                    </div>
                    <div className="input-field">
                        <input type="file" name="image" id="bookimg"/>
                        <label htmlFor="bookimg">Upload a photo of your book.</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Sell;