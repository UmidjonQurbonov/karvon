import { createAction } from '@reduxjs/toolkit';

const categoryActions = {
    getCategory : createAction('getCategory'),
    setCategory : createAction('setCategory')
}

export default categoryActions;