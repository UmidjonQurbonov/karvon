import React, {Component} from 'react'
import st from './registr.scss'
import cx from 'classnames'
import axios from 'axios'
import {authAPI} from "../../../api/api";
import {Redirect} from "react-router-dom";

class Registr extends Component {

    state = {}
    RequestActionEnum = {
        PERSONAL: 'register',
        BUSINESS: 'business'
    }

    checkPassword = () => {
        if (this.state.password === this.state.confirmPassword) {
            this.setState({
                check: true
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.fullname,
            phone: this.phoneNumber,
            password: this.password,
            email: this.email,
            type: this.RequestActionEnum.PERSONAL
        }
        if (this.state.check) {
            authAPI.register(
                data.name, data.phone, data.email, data.password, data.type,
                {withCredentials: true}
            ).then(
                res => {
                    this.setState({
                        loggedIn: true
                    });
                    localStorage.setItem('token', res.data.token);
                    this.props.setUser(res.data.user)
                }
            ).catch(
                err => {
                    console.log(err);
                }
            )
        }
    };


    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/profile'/>
        }

        return (
            <div className={cx(st.personal)}>
                <form onSubmit={this.handleSubmit}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-6 my-2')}>
                            <div className={cx('form-group')}>
                                <label className={cx(st.label)}>Имя пользователя</label>
                                <input type="text" className={cx(st.input, 'form-control')} placeholder="Напишите здесь"
                                       required
                                       onChange={e => this.fullname = e.target.value}
                                />
                            </div>
                        </div>
                        <div className={cx('col-md-6 my-2')}>
                            <div className={cx('form-group')}>
                                <label className={cx(st.label)}>Электронная почта</label>
                                <input type="email" className={cx(st.input, 'form-control')}
                                       placeholder="Напишите здесь" required
                                       onChange={e => this.email = e.target.value}
                                />
                            </div>
                        </div>
                        <div className={cx('col-md-6 my-2')}>
                            <div className={cx('form-group')}>
                                <label className={cx(st.label)}>Номер телефона</label>
                                <input type="text" className={cx(st.input, 'form-control')} placeholder="Напишите здесь"
                                       required
                                       onChange={e => this.phoneNumber = e.target.value}
                                />
                            </div>
                        </div>

                        <div className={cx('col-md-6 my-2')}>
                            <div className={cx('form-group')}>
                                <label className={cx(st.label)}>Пароль</label>
                                <input type="password" className={cx(st.input, 'form-control')}
                                       placeholder="Введите ваш пароль" required
                                       onChange={e => this.password = e.target.value}
                                />
                            </div>
                        </div>
                        <div className={cx('col-md-6 my-2')}>
                            <div className={cx('form-group')}>
                                <label className={cx(st.label)}>Подтвердите пароль</label>
                                <input type="password" className={cx(st.input, 'form-control')}
                                       placeholder="Введите ваш пароль" required
                                       onChange={e => this.confirmPassword = e.target.value}
                                />
                            </div>
                        </div>
                        <div className={cx('col-12')}>
                            <div className="form-check my-2">
                                <input className={cx("form-check-input", st.check)} type="checkbox" value=""
                                       id="defaultCheck" required/>
                                <label className={("form-check-label", st.check_label)} htmlFor="defaultCheck">
                                    Я согласен с условиями использования сайта
                                </label>
                            </div>
                        </div>
                        <div className={cx('mt-5 col-12')}>
                            <input type="submit" value="Регистрация" className={cx(st.submit)}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registr;