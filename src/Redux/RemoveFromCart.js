const RemoveFromCart = (id) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('books').doc(id).update({
            inCart: 0
        }).then(()=>{
            dispatch({type: 'REMOVE_FROM_CART',id:id});
        }).catch((err)=> {
            dispatch({type: 'ERROR_REMOVING_FROM_CART',err})
        })
    }
}

export default RemoveFromCart;