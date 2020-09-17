import React , { useState } from 'react';
import st from './entercode.module.scss';
import cx from 'classnames';
import passwordIcon from '../../img/password.svg';
import Cookie from 'universal-cookie';
import { authApi } from '../../service/authService';

const cookie = new Cookie();


const Entercode = () => {

    const [code , setCode] = useState("");
    const [password, setPassword] = useState("");
    const [type , setType] = useState(false);

    const changePassword = e => {
        e.preventDefault();
        const data = {
            code : code ,
            password : password,
            phone : cookie.get('phone')
        }
        console.log(data);
        authApi.resetPassword(data)
        .then( res => console.log(res) , err => console.log(err));
    }

    return(
        <div className="my-5">
            <div className="container">
                <div className={cx("card",st.entercode)}>
                    <img src={passwordIcon} alt="password" className={cx(st.entercode_icon)}/>
                    <h2 className={cx(st.entercode_title)}> Восстановить пароль </h2>
                    <form onSubmit={ changePassword }>
                        <label className={cx(st.padding)}>Введите код, который вы получили в SMS</label>
                        <div className={cx("input-group",st.entercode_input)}>
                            <span className="input-group-prepend">
                                <i className="fa fa-fw fa-lock"></i>
                            </span>
                            <input onChange={ e => setCode(e.target.value)}  placeholder="Введите код здесь" required 
                            type="text" className="form-control"/>
                        </div>
                        <label className={cx(st.padding)}>Введите новый пароль</label>
                        <div className={cx("input-group",st.entercode_input)}>
                            <span className="input-group-prepend">
                                <i className="fa fa-fw fa-lock"></i>
                            </span>
                            <input onChange={ e => setPassword(e.target.value)}  placeholder="Введите пароль здесь" required 
                            type={ !type ? "password" : "text" } className="form-control"/>
                            <button onClick={ () => setType(!type)} type="button" className="input-group-append">
                                <i className={`fa fa-fw fa-eye${!type ? "" : "-slash"}`}></i>
                            </button>
                        </div>
                        <div className={cx(st.padding)}>
                            <button className={cx(st.entercode_button)}> Восстановить </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Entercode;