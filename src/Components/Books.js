import React, { Component } from 'react'
import '../App.css'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import AddToCart from '../Redux/AddToCart'

class Books extends Component{

    clicked = (clickedId) => {
        this.props.AddToCart(clickedId);
    }
    render() {
        const {bookslist} = this.props;
        var arr = [];
        for (var key in bookslist) {
            arr.push(bookslist[key]);
        }
        const booksList = arr.length ? 
        (
            arr.map(arr => { 
            return(
            <div className="books-container" key={arr.id}>
            <div className=" books">
                <div className="card bookcard">
                        <div className="card-title"><h5 className="brown-text text-darken-4">{arr.title}</h5>
                        <h6>{arr.author}</h6></div>
                        <div className="card-content">
                        <div><p className="brown-text">{arr.desc}</p>
                        <h6>Price: ₹{arr.price}</h6>
                        </div>
                        <div className="card-action">
                            <a onClick = {()=>{this.clicked(arr.id)}} className="btn-floating brown darken-4">
                                <i className="material-icons white-text">add_shopping_cart</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
            })
        ):
        (
            <div className="">
                <h3 className="white">Aww Snap! No Books are on sale yet!</h3>
            </div>
        )

        return (
            <div className="">
                {booksList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookslist: state.firestore.ordered.books,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch) => {
    return {
        AddToCart: (id) => { dispatch(AddToCart(id))}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'books'}
    ]))(Books);