import React ,{ useEffect } from 'react'
import st from './higher.module.scss'
import cx from 'classnames'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import { authApi } from '../../../service/authService';
import { userActions } from '../../../redux/actions';
import { connect } from 'react-redux';

const Higher = (props) => {
    const [logged, setlogged] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [data , setData] = useState({
        phone : "",
        password : ""
    })

    useEffect(() => {
        console.log(logged)
        console.log(props)
        setlogged(props.user.isLoggedIn)
    },[props])

    const [requestProgress , setRequestProgress ] = useState({
        isRequest : false,
        isError : false
    })


    const login = e => {
        e.preventDefault();
        setRequestProgress( prev => ({...prev , isRequest : true}))
        authApi.login(data).then( res => {
            const { token } = res.data;
            localStorage.setItem("token",token);
            setRequestProgress({ isRequest : false , isError : false })
            setToggle(false);
            window.location.replace('/');
        } , err => {
            setRequestProgress({ isRequest : false , isError : true })
            console.log(err)
        });
    }

    return (
        <div className={cx(st.higher)}>
            
            <div className={cx('container')}>
                <div className={cx(st.content)}>
                    <div className={cx(st.box)}>
                        <a className={cx(st.link)} href="tel:+998917911122">
                            <i className={cx(st.icon, 'fas fa-phone-alt')}></i>
                            <span className={cx(st.span)}>+99891 791 11 22</span>
                        </a>
                        <a className={cx(st.link)} href="">
                            <i className={cx(st.icon, 'far fa-envelope')}></i>
                            <span className={cx(st.span)}>info@elab.uz</span>
                        </a>
                    </div>
                    <div className={cx(st.box)}>
                        <Link className={cx(st.link_2, st.link)} to="">
                            <i className={cx(st.icon_3, 'far fa-heart')}>
                            </i>
                            <span className={cx(st.count)}>0</span>
                        </Link>
                        <a className={cx(st.link)} href="">
                            <span>Рус</span>
                            <i className={cx(st.icon_2,st.icon, 'fas fa-angle-down')}></i>
                        </a>
                        {
                            !logged ? 
                            <React.Fragment>
                                <Link className={cx(st.link)} to="/sign-up">
                                    Регистрация
                                </Link>
                                <button className={cx(st.sign_in_button)} onClick={() => setToggle(true)}>
                                    <i className={cx(st.icon_3, 'far fa-user-circle')}></i>
                                </button>
                            </React.Fragment> :
                            <div className="dropdown" className={cx(st.sign_in_button)}>
                                <button data-toggle="dropdown" className={cx(st.sign_in_button)}>
                                    <i className={cx(st.icon_3, 'far fa-user-circle')}></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <NavLink  to='/profile' className="dropdown-item">Профиль</NavLink>
                                    <a href="#" className="dropdown-item" onClick={ () => {
                                        localStorage.removeItem("token");
                                        props.isLoggedIn()
                                    }}> Выход </a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {/* SignIn */}

            <div className={cx(st.sign_in, toggle ? st.show : st.close)}  >
                <div className={cx(st.sign_in_dark)} onClick={() => setToggle(false)}></div>
                <div className={cx(st.sign_in_box)}>
                    <h1 className={cx(st.sign_in_h1)}>войти в систему </h1>
                    <form onSubmit={ login }>
                        <div className={cx('form-group')}>
                            <label className={cx(st.sign_in_label)}>Номер телефона</label>
                            <input onChange={ e => setData({...data , phone : e.target.value })} type="tel" className={cx(st.sign_in_input, 'form-control')} placeholder="+998XXZZZZZZZ"  required/>
                        </div>
                        <div className={cx('form-group')}>
                            <label className={cx(st.sign_in_label)}>Пароль</label>
                            <input onChange={ e => setData({...data , password : e.target.value })} type="password" className={cx(st.sign_in_input, 'form-control')} placeholder="Введите ваш пароль"  required/>
                        </div>
                        {
                            requestProgress.isError && 
                            <div className="alert alert-danger">
                                <i className="fa fa-fw fa-exclamation-triangle"></i>
                                <strong>  Ошибка ! </strong> Номер телефона или пароль введены неверно
                            </div>
                        }
                        <button disabled={ requestProgress.isRequest } type="submit" className={cx(st.sign_in_but)} >
                            вход { requestProgress.isRequest && <i className="fa fa-fw fa-circle-notch fa-spin"></i> }
                        </button>
                    </form>
                    <div className={cx(st.sign_in_content)}>
                        <div>
                            <span>У вас нет аккаунт?</span>
                            <Link to="/sign-up" className={cx(st.sign_up_link)} onClick={() => setToggle(false)}>
                                Зарегистрироваться
                            </Link>
                        </div>
                        <Link to="/resetpassword" className={cx(st.password_forget)} onClick={() => setToggle(false)}>
                            Забыли пароль
                        </Link>
                    </div>
                </div>
                <span className={cx(st.close_button, 'far fa-times-circle')} onClick={() => setToggle(false)}></span>
            </div>  
        </div>
    );
}

const mstp = state => (state);
const mdtp = dispatch => ({
    isLoggedIn : () => {
        dispatch(userActions.loggedIn())
    }
})

export default connect(mstp,mdtp)(Higher)