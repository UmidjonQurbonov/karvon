import React from 'react';
import st from './loader.module.scss';
import { MetroSpinner } from 'react-spinners-kit';
import cl from 'classnames';

function Loading(){
    return(
        <div className={cl(st.loader)}>
            <MetroSpinner color="#4E7DF1" size={70}/>
            <p>Iltimos kutib turing</p>
        </div>
    )
}

export default Loading;