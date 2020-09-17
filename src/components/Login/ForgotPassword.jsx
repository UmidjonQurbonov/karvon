import React, {Component} from "react";
import cx from 'classnames'
import {authAPI} from "../../api/api";

class ForgotPassword extends Component {

    state = {}

    handleSubmit = e =>{
        e.preventDefault();

        const data = {
            phone: this.state.phone,
        };
        console.log(data)
        authAPI.forgotPassword(
            data.phone,
            {
                withCredentials: true
            }).then(
            res => {
                console.log(res);
                }

        ).catch(
            err => {
                console.log(err);
            }
        )

    }

    render() {
        return (
            <div className={cx('container my-5 align-items-center')}>

                <div className={cx('row justify-content-center')}>
                    <div className={cx('col-3')}>
                        <form onSubmit={this.handleSubmit} className={cx('')}>
                            <label htmlFor="" className={cx('text-center')}>Enter the phone Number. And We have a sent message</label>
                            <input type="phone" className={cx('w-100 justify-content-center')}
                            onChange={e=>this.phone = e.target.value}
                            />
                        </form>
                    </div>
                </div>
            </div>

        )
    }

}

export default ForgotPassword;