import { createReducer } from '@reduxjs/toolkit';
import { productActions } from '../actions';

const productReducer = createReducer({}, builder =>{
    builder
        .addCase(productActions.setProducts.type, (state , action) =>{
            state = action.payload;
            return state;
        })
})
export default productReducer;