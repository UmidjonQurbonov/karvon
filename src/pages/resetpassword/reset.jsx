import React from 'react';
import st from './reset.module.scss';
import cx from 'classnames';
import users from '../../img/users.png';
import { useState } from 'react';
import { authApi } from '../../service/authService';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
function Reset(){

    const [phone,setPhone] = useState("");
    const [request , setRequest ] = useState({
        error : false,
        process : false,
        success : false
    })

    const sendCode = e => {
        e.preventDefault();
        setRequest({ ...request , process : true});
        authApi.sendResetCode({ phone : phone })
        .then( res => {
            console.log(res.data);
            setRequest({ error : false, success : true , process : false})
            cookie.set('phone',phone,{ path : '/entercode' });
            console.log(cookie.get('phone'))
            },
            err => {
                console.log(err);
                setRequest({ error : true , success : false , process : false })
            })
    }

    return(
        <div className="my-5">
            <div className="container">
                <form className={cx("card p-5",st.reset)} onSubmit={ sendCode}>
                    <img src={users} className={cx(st.reset_icon)} alt=""/>
                    <h2 className={cx(st.reset_title)}>Забыли Ваш пароль ?</h2>
                    <p className={cx(st.reset_description)}>Введите свой номер телефона, чтобы отправить код для сброса пароля</p>
                    <div className={cx("input-group",st.reset_input)}>
                        <span className="input-group-prepend">
                            <i className="fa fa-fw fa-phone"></i>
                        </span>
                        <input onChange={ e => setPhone(e.target.value)}  placeholder="+998991234567" required type="tel" className="form-control"/>
                    </div>
                    {
                        request.error && 
                        <div className="alert alert-danger mx-0 mx-sm-4">
                            <i className="fa fa-fw fa-exclamation-triangle"></i>&nbsp;
                            Пользователь введенного номера не зарегистрирован
                        </div>
                    }
                    {
                        request.success && 
                        <div className="alert alert-success mx-0 mx-sm-4">
                            <i className="fa fa-fw fa-check-circle"></i>&nbsp; Код был отправлен на номер {phone} для сброса пароля.
                        </div> 
                    }
                    <div className={cx("d-flex align-items-center justify-content-between flex-wrap",st.reset_links)}>
                        <Link to='/entercode' className="mx-2"> Вы уже получили пароль? </Link>
                        <button disabled={ request.process } type="submit" className={cx(st.reset_button)}> Отправить код 
                            {
                                request.process && <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reset;