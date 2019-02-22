import {combineReducers} from 'redux';
import cartReducer from './cartReducer'
import booksReducer from './booksReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import authenticationReducer from './authenticationReducer'
const rootReducer = combineReducers({
    cart: cartReducer,
    books: booksReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    authentication: authenticationReducer
})

export default rootReducer;