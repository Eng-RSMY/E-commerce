const ProductReducer = (state=[] , action ) => {
    console.log(state)
    switch(action.type){
        case 'Add':
        alert('added to cart')
        let itemF;
        if(itemF = state.find(item => item.id === action.payload.id)){
            itemF.count += 1;
            return [...state];
        }
            return [...state, action.payload]
        case 'Remove':
        if(action.payload.count > 1){
            action.payload.count -= 1
            return [...state];
        }else{
            const newState = state.filter(item => item.id !== action.payload.id)
                state = newState;
                return [...state];
        }
        default:
         return state;
    }
}

export default ProductReducer;