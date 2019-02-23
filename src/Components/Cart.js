import React, { Component } from 'react'
import {connect} from 'react-redux';
import bookicon from '../Images/bookicon.jpg'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import RemoveFromCart from '../Redux/RemoveFromCart'
import cartempty from '../Images/cartempty.png'
import {Redirect} from 'react-router-dom'
import '../CSS Files/Cart.css'
import StripeCheckout from 'react-stripe-checkout';


class Cart extends Component {
    
    render() {
        const {auth} = this.props; 
        if(!auth.uid) return <Redirect to="/"/>
        const {bookslist} = this.props;
        var arr = [];
        var total=0;
        for (var key in bookslist) {
            if(bookslist[key].inCart === 1){
            arr.push(bookslist[key]);
            total = +total + +bookslist[key].price
            }
        }
        const booksList = arr.length ? 
        (
            arr.map(arr => { 
        return(       
            <div className="card z-depth-0 cartCard" key = {arr.id}>
                <div className="card-content">
            <ul className="collection">
                <li className="collection-item avatar grey lighten-4">
                    <img src={bookicon} alt="" className="circle bookicon"/>
                    <div className="left">
                        <h6>{arr.title}</h6>
                        <h6>{arr.author}</h6>
                    </div>
                        <ul className="right">
                            <li><h6>Price: ₹{arr.price}</h6></li>
                            <li><button onClick = {()=>{this.clicked(arr.id)}} className="btn grey lighten-4 "><i className="material-icons brown-text text-darken-4">delete</i></button></li>
                        </ul>
                </li>
            </ul>
            </div>
            </div>
            
        )
    })
    ):
    (
        <div className="">
            <img src={cartempty} alt="cart empty"/>
        </div>
    )
    return (
        <div className="">
            <header className="header"></header>
            <div className="container">
           <h3 className="brown-text text-darken-3">Your Cart</h3>
           <p>Click on the delete button to remove books from your cart...</p>           
            {booksList}
            </div>
            <div className="container">
                <h3>Total: {total}</h3>
            <StripeCheckout ComponentClass="div" currency="INR"/>
            </div>
        </div>
    )
    }
    clicked = (clickedID) => {
        this.props.RemoveFromCart(clickedID);
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
       RemoveFromCart: (id) => {dispatch(RemoveFromCart(id))}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'books'}
    ]))(Cart);