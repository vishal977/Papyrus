const AddToCart = (id) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('books').doc(id).update({
            inCart: 1
        }).then(() => {
        dispatch({type: 'ADD_TO_CART', id: id});

        }).catch((err)=> {
            dispatch({type: 'ERROR_ADDING_TO_CART', err})
        })

    }
}



export default AddToCart;