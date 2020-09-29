import { langActions } from '../actions';
import { createReducer } from '@reduxjs/toolkit';
import ru from '../ru.json';
import uz from '../uz.json';

const langReducer = createReducer({ type : "uz" , lang : uz },{
    [langActions.ru.type] : state => {
        return { type : "ru" , lang : ru }
    },
    [langActions.uz.type] : state => {
        return { type : "uz" , lang : uz }
    }
})

export default langReducer;