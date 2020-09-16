import React, { useState } from 'react'
import st from './sign-up.module.scss'
import cx from 'classnames'
import PersonalComponent from './personal/personal';
export default () => {

    return (
        <div className={cx(st.sign_up)}>
            <div className={cx('container')}>
                <PersonalComponent/>
            </div>
        </div>
    );
}




