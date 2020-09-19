import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '../actions';

const userReducer = createReducer({ isLoggedIn : localStorage.getItem('token') ? true : false }, {
    [userActions.loggedIn.type] : state => {
        console.log("called")
        return {...state , isLoggedIn : localStorage.getItem('token') ? true : false }
    }
})

export default userReducer;