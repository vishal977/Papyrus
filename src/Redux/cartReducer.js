const initState = {
}

const cartReducer = (state=initState,action) => {
    if(action.type === 'REMOVE_FROM_CART') {
    }
    else if(action.type === 'ERROR_REMOVING_FROM_CART')
    {
    }
    return state;
}

export default cartReducer;