import { combineReducers } from 'redux';
import userReducer from './userReducer';
import langReducer from './langReducer';
import categoryReducer from './categoryReducer';

export const rootReducer = combineReducers({
    user : userReducer,
    lang : langReducer,
    category : categoryReducer
})