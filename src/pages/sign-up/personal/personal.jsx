import React from 'react'
import st from "../personal/personal.module.scss";
import style from '../sign-up.module.scss';
import cx from 'classnames'
import { useState } from 'react';
import { authApi } from '../../../service/authService';


const Personal = () => {

    //Data to be sent to the backend
    const [data,setData] = useState({
        name : "",
        phone : "",
        password : "",
        confirm : "",
        email : "",
        accept : false,
        type : "personal"
    })

    //States for handling request process and response
    const [requestProcess , setRequestProcess] = useState({
        isRequest : false,
        isError : false,
        isSuccess : false
    })

    //Function that makes a post request to backend
    const register = e => {
        setRequestProcess( prev => ({...prev , isRequest : true }))
        e.preventDefault();
        authApi.register(data).then( res => {
            setRequestProcess({ isError : false , isRequest : false , isSuccess : true })
        } , err => console.log(err.request.response))
    }

    //Main registration form
    return (
        <React.Fragment>
            <h1 className={cx(style.sign_up_h1)}>Регистрация на сайте</h1>
            <h4 className={cx(style.sign_up_h4)}>Выберите категорию</h4>
            <div className={cx('row justify-content-center')}>
                <div className={cx('col-6 col-md-4')}>
                    <div className={cx(style.card, data.type === "personal" ? style.blue : null)} onClick={() => setData({...data , type : "personal"})}>
                        <i className={cx(style.card_icon, 'fa fa-user-tie')}></i>
                        <h5 className={cx(style.card_h5)}>Для личного пользования</h5>
                    </div>
                </div>
                <div className={cx('col-6 col-md-4')}>
                    <div className={cx(style.card, data.type === "business" ? style.blue : null)} onClick={() => setData({...data , type : "business"})}>
                        <i className={cx(style.card_icon, 'far fa-handshake')}></i>
                        <h5 className={cx(style.card_h5)}>Для использования в бизнеса</h5>
                    </div>
                </div>
            </div>
            <div className={cx(style.register_section)}>
                <div className={cx(st.personal)}>
                    <form onSubmit={ e => register(e) }>
                        <div className={cx('row')}>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Имя пользователя</label>
                                    <input type="text" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({...data , name : e.target.value})} placeholder="Напишите здесь" required/>  
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Электронная почта</label>
                                    <input type="email" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({...data , email : e.target.value })} placeholder="Напишите здесь" required/>  
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Номер телефона</label>
                                    <input type="tel" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({ ...data , phone : e.target.value })} placeholder="+998XXYYYZZWW" required/>  
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Пароль</label>
                                    <input type="password" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({ ...data , password : e.target.value })} placeholder="Введите ваш пароль" required/>  
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Подтвердите пароль</label>
                                    <input type="password" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({...data , confirm : e.target.value })} placeholder="Введите ваш пароль" required/>  
                                </div>
                            </div>
                            <div className={cx('col-12')}>
                                <div className="form-check my-2">
                                    <input className={cx("form-check-input",st.check)} type="checkbox"
                                    onChange={ e => setData({...data , accept : e.target.checked })} id="defaultCheck" required />
                                    <label className={("form-check-label", st.check_label)} htmlFor="defaultCheck">
                                        Я согласен с условиями использования сайта
                                    </label>
                                </div>
                            </div>
                            {
                                requestProcess.isSuccess && 
                                <div className={cx("col-12")}>
                                    <div className={cx("alert alert-success")}>
                                       <i className="fa fa-fw fa-check-circle"></i> <strong>Спасибо !</strong> Аккаунт успешно создан. Вы можете авторизоваться на сайте.
                                    </div>
                                </div>
                            }
                            <div className={cx('mt-5 col-12')}>
                                <button type="submit" className={cx(st.submit)} disabled={ requestProcess.isRequest }>
                                    Регистрация { requestProcess.isRequest && <i className="fa fa-fw fa-spin fa-circle-notch"></i> }
                                </button>
                            </div>
                        </div>      
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Personal;
