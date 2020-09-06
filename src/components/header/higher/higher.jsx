import React from 'react'
import st from './higher.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'


const Higher = () => {
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
                            <span>UZS</span>
                            <i className={cx(st.icon_2,st.icon, 'fas fa-angle-down')}></i>
                        </a>
                        <a className={cx(st.link)} href="">
                            <span>English</span>
                            <i className={cx(st.icon_2,st.icon, 'fas fa-angle-down')}></i>
                        </a>
                        <Link className={cx(st.link_2)} to="">
                            <i className={cx(st.icon_3, 'far fa-user-circle')}></i>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Higher;

