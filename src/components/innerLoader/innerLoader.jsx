import React from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';
import st from './innerLoader.module.scss';

export default function InnerLoader({isVisible}){
        return(
            <div className={st.innerLoader}>
                <div className={st.loader}>
                    <ImpulseSpinner color="red" frontColor="#fff" size={70}/>
                </div>
            </div>
        )
}