import React, { useState } from 'react'
import st from './sign-up.module.scss'
import cx from 'classnames'

import PersonalComponent from './personal/personal'
import Business from './business/business'



export default () => {

    const [personal, setPersonal] = useState(false);
    const [business, setBusiness] = useState(false);

    const changePersonal = () => {
        setPersonal(!personal);
        setBusiness(false);

    }
    const changeBusiness = () => {
        setPersonal(false);
        setBusiness(!business);

    }

    return (
        <div className={cx(st.sign_up)}>
            <div className={cx('container')}>
                <h1 className={cx(st.sign_up_h1)}>Регистрация на сайте</h1>
                <h4 className={cx(st.sign_up_h4)}>Выберите категорию</h4>
                <div className={cx('row justify-content-center')}>
                    <div className={cx('col-12 col-sm-6 col-md-4 my-3')}>
                        <div className={cx(st.card, personal ? st.blue : null)} onClick={changePersonal}>
                            <i className={cx(st.card_icon, 'fa fa-user-tie')}></i>
                            <h5 className={cx(st.card_h5)}>Для личного пользования</h5>
                            <p className={cx(st.card_p)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cum!</p>
                        </div>
                    </div>
                    <div className={cx('col-12 col-sm-6 col-md-4 my-3')}>
                        <div className={cx(st.card, business ? st.blue : null)} onClick={changeBusiness}>
                            <i className={cx(st.card_icon, 'far fa-handshake')}></i>
                            <h5 className={cx(st.card_h5)}>Для использования в бизнеса</h5>
                            <p className={cx(st.card_p)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, cum!</p>
                        </div>
                    </div>
                </div>
                {personal ? <PersonalComponent /> : null}
                {business ? <Business /> : null}
                
            </div>
        </div>
    );
}




