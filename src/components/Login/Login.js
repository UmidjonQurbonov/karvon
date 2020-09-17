import {Redirect, Link, NavLink} from "react-router-dom";
import cx from "classnames";
import st from "../header/higher/higher.module.scss";
import React, {Component} from "react";
import {authAPI} from "../../api/api";
import Higher, {setToogle} from "../header/higher/higher";
// import setToogle from "../header/higher/higher";

export class Login extends Component {

    state = {

    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            phone: this.phone,
            password: this.password,
        };
        authAPI.login(
            data.phone, data.password,
            {
                withCredentials: true
            }).then(
            res => {
                console.log(res);
                localStorage.setItem('token',res.data.token);
                this.setState({
                    loggedIn: true
                })
                 this.props.setUser(res.data.data)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )

    };

    render() {

        // console.log(this.state.toogle)
        if (this.state.loggedIn){return <Redirect to='/profile'/>}
        return (
            <div>
                <div className={cx(st.sign_in, this.state.toogle ? st.show : st.close)}>
                    <div className={cx(st.sign_in_dark)} onClick={() => this.props.setState({toogle: false})}></div>
                    <div className={cx(st.sign_in_box)}>
                        <h1 className={cx(st.sign_in_h1)}>войти в систему </h1>

                        <form
                            onSubmit={this.handleSubmit}
                        >
                            <div className={cx('form-group')}>
                                <label className={cx(st.sign_in_label)}>Логин</label>
                                <input type="text" className={cx(st.sign_in_input, 'form-control')}
                                       placeholder="Введите ваш логин" required
                                       onChange={e => {
                                           this.phone = e.target.value;
                                       }}

                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label className={cx(st.sign_in_label)}>Пароль</label>
                                <input type="password" className={cx(st.sign_in_input, 'form-control')}
                                       placeholder="Введите ваш пароль" required
                                       onChange={e => {
                                           this.password = e.target.value;
                                       }}
                                />
                            </div>
                            <input type="submit" value="вход" className={cx(st.sign_in_but)}
                                   onClick={() =>
                                       this.setState({
                                           toogle: false
                                       })
                                       // this.props.setState({toogle: false})
                                   }/>
                        </form>
                        <div className={cx(st.sign_in_content)}>
                            <div>
                                <span>У вас нет аккаунт?</span>
                                <Link to="/register" className={cx(st.sign_up_link)}
                                      onClick={() =>

                                          this.setState({
                                              toogle: false
                                          })
                                          // this.props.setState({toogle: false})
                                      }>
                                    Зарегистрироваться
                                </Link>
                            </div>
                            <Link to="" className={cx(st.password_forget)} onClick={() =>
                                // this.props.setToogle(false)
                                // this.props.setState({toogle: false})
                                this.setState({
                                    toogle: false
                                })
                            }>

                                Забыли пароль
                            </Link>
                        </div>
                    </div>
                    <span className={cx(st.close_button, 'far fa-times-circle')}
    onClick={() =>
        null
    }/>
                </div>
            </div>
        )
    }
}
