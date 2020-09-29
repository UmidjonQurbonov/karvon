import { createReducer } from '@reduxjs/toolkit';
import { categoryActions } from '../actions';

const categoryReducer = createReducer({}, (builder) => {
    builder
        .addCase(categoryActions.getCategory.type, (state,action) => {
            return state
        })
        .addCase(categoryActions.setCategory.type, (state,action) => {
            return action.payload
        })
})

export default categoryReducer;