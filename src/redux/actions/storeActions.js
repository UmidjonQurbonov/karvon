import { createAction } from '@reduxjs/toolkit';

const storeActions = {
    getStores : createAction('getStores'),
    setStores : createAction('setStores')
}
export default storeActions;