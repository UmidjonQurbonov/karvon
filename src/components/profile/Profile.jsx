import React, {Component} from "react";
import {authAPI, profileAPI, usersAPI} from "../../api/api";
import cx from 'classnames'

export default class Profile extends Component {


    handleLogout = (e) => {
        e.preventDefault();

        authAPI.logout().then(
            res => {
                console.log(res)
                localStorage.clear();
                this.props.setUser(null)
            }
        ).catch(
            error => {
                console.log(error)
            }
        );
    }

    render() {
        return (
            this.props.user ? (<div className={cx('container')}>
                <h2 className={cx('d-block text-info')}>Hi {this.props.user.name}
                    You are the in Cabinet</h2>
                <div className={cx('d-flex text-warning bg-danger')} onClick={this.handleLogout}>
                    Click Me And LOGOUT ;)
                </div>
            </div>) : (<div>LOL;]</div>)
        )
    }
}