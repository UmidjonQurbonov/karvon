import { createReducer } from '@reduxjs/toolkit';
import storeActions from '../actions/storeActions';

const storeReducer = createReducer({}, (builder) =>{
    builder.
        addCase(storeActions.getStores.type , (state,action) =>{
            return state
        })
        .addCase(storeActions.setStores.type , (state , action) =>{
            return action.payload
        })
} )

export default storeReducer;