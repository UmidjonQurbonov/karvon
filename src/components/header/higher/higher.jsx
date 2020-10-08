import React ,{ useEffect } from 'react'
import st from './higher.module.scss'
import cx from 'classnames'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import { authApi } from '../../../service/authService';
import { userActions , langActions } from '../../../redux/actions';
import { connect } from 'react-redux';
import uz from '../../../img/uz.svg';
import ru from '../../../img/ru.svg';


const Higher = (props) => {
    const [logged, setlogged] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [data , setData] = useState({
        phone : "",
        password : ""
    })

const lang = props.lang.lang;

    useEffect(() => {
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
                        <div className={cx(st.link,"dropdown d-inline-block",st.langue)}>
                            <a href="#" className={cx("dropdown-toggle")} data-toggle="dropdown"> <img src={ props.lang.type === "uz" ? uz : ru } style={{width : "20px"}}/> { props.lang.type.toUpperCase() } </a>
                            <div className={cx("dropdown-menu dropdown-menu-right",st.langue_menu)}>
                                <a onClick={() => props.changeUz()} href="#" className="dropdown-item"> <img src={uz} alt="uzbek"/> Uz </a>
                                <a onClick={() => props.changeRu()} href="#" className="dropdown-item"> <img src={ru} alt="rus"/> Ru </a>
                            </div>
                        </div>
                        {
                            !logged ? 
                            <React.Fragment>
                                <Link className={cx(st.link,"d-inline-flex align-items-center")} to="/sign-up">
                                    <i style={{fontSize : "20px", marginRight : "5px"}} className="bx bx-user-plus"></i>{ lang.register }
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
                                    <NavLink  to='/profile' className="dropdown-item"> {lang.profile} </NavLink>
                                    <a href="#" className="dropdown-item" onClick={ () => {
                                        localStorage.removeItem("token");
                                        props.isLoggedIn()
                                    }}> {lang.logout} </a>
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
                    <h1 className={cx(st.sign_in_h1)}>{ lang.loginTitle} </h1>
                    <form onSubmit={ login }>
                        <div className={cx('form-group')}>
                            <label className={cx(st.sign_in_label)}> {lang.phone} </label>
                            <input onChange={ e => setData({...data , phone : e.target.value })} type="tel" className={cx(st.sign_in_input, 'form-control')} placeholder="+998XXZZZZZZZ"  required/>
                        </div>
                        <div className={cx('form-group')}>
                            <label className={cx(st.sign_in_label)}> {lang.password} </label>
                            <input onChange={ e => setData({...data , password : e.target.value })} type="password" className={cx(st.sign_in_input, 'form-control')} placeholder="Введите ваш пароль"  required/>
                        </div>
                        {
                            requestProgress.isError && 
                            <div className="alert alert-danger">
                                <i className="fa fa-fw fa-exclamation-triangle"></i>
                                { lang.loginError }
                            </div>
                        }
                        <button disabled={ requestProgress.isRequest } type="submit" className={cx(st.sign_in_but)} >
                            { lang.enter } { requestProgress.isRequest && <i className="fa fa-fw fa-circle-notch fa-spin"></i> }
                        </button>
                    </form>
                    <div className={cx(st.sign_in_content)}>
                        <div>
                        <span>{ lang.haveNotAccount }</span><br/>
                        <Link to="/sign-up" className={cx(st.sign_up_link)} onClick={() => setToggle(false)}>
                        {lang.registerWithLogin}
                        </Link>
                        </div>
                        <Link to="/resetpassword" className={cx(st.password_forget)} onClick={() => setToggle(false)}>
                            { lang.forgotPassTitle }
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
    },
    changeUz : () => {
        dispatch(langActions.uz())
    },
    changeRu : () => {
        dispatch(langActions.ru())
    }
})

export default connect(mstp,mdtp)(Higher);