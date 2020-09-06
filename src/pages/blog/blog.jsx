import React from 'react'
import st from './blog.module.scss'
import cx from 'classnames'
import { Partner } from '../../components'

import img from '../../img/hit_2.jpg'

const Blog = () => {

    return (
        <div className={cx(st.blog)}>
            <div className={cx('container')}>
                <div className={cx(st.box)}>
                    <img src={img} alt="" className={cx(st.img)} />
                </div>
                <div className={cx(st.content)}>
                    <h1 className={cx(st.content_h1)}>Remaining essentially</h1>
                    <div className={cx(st.quti)}>
                        <span className={cx(st.quti_span)}>
                            <i className={cx(st.quti_i, 'fa fa-user')}></i>
                            Admin Elezone
                        </span>
                        <span className={cx(st.quti_span)}>
                            <i className={cx(st.quti_i, 'fa fa-calendar-alt')}></i>
                            20.08.2020
                        </span>
                        <span className={cx(st.quti_span)}>
                            <i className={cx(st.quti_i, 'fa fa-comments')}></i>
                            25 Comments
                        </span>
                    </div>
                    <p className={cx(st.content_p)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore autem, debitis numquam placeat animi reprehenderit laudantium delectus mollitia quod quasi dolorum quo tenetur ab saepe facere cumque modi incidunt atque libero exercitationem error? Harum officia explicabo, non earum voluptatum quo, voluptates quaerat quasi aperiam, expedita fugiat delectus saepe aliquid.
                    </p>
                    <p className={cx(st.content_p)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore autem, debitis numquam placeat animi reprehenderit laudantium delectus mollitia quod quasi dolorum quo tenetur ab saepe facere cumque modi incidunt atque libero exercitationem error? Harum officia explicabo, non earum voluptatum quo, voluptates quaerat quasi aperiam, expedita fugiat delectus saepe aliquid.
                    </p>
                    <p className={cx(st.content_p)}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore autem, debitis numquam placeat animi reprehenderit laudantium delectus mollitia quod quasi dolorum quo tenetur ab saepe facere cumque modi incidunt atque libero exercitationem error? Harum officia explicabo, non earum voluptatum quo, voluptates quaerat quasi aperiam, expedita fugiat delectus saepe aliquid.
                    </p>
                </div>

                <Partner />
            </div>
        </div>
        
    );
}

export default Blog;