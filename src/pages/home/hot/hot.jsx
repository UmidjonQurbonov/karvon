import React from 'react'
import st from './hot.module.scss'
import cx from 'classnames'

import service from '../../../img/it_service.jpg'
import ind_1 from '../../../img/industry_1.jpg'
import ind_2 from '../../../img/industry_2.jpg'
import ind_3 from '../../../img/industry_3.jpg'
import ind_4 from '../../../img/industry_4.jpg'
import { Link } from 'react-router-dom'

const Hot = () => {

    return (
        <div className={cx(st.hot)}>
            <div className={cx('container')}>
                <h1 className={cx('home_blog_title')}>горячий блог</h1>
                <div className={cx('row')}>
                    <div className={cx('col-md-6 col-sm-12')}>
                        <div className={cx(st.box)}>
                            <img src={service} alt="" className={cx('img-fluid', st.img)}/>
                            <div className={cx(st.content)}>
                                <Link to="" className={cx(st.content_link)}>
                                    Сервисы
                                </Link>
                                <h1 className={cx(st.content_h1)}>
                                    "ИТ-ГРАД" представил партнерскую программу для физических лиц
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={cx(st.ind_col,'col-sm-12 col-md-6')}>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_1} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <Link to="" className={cx(st.content_link)}>
                                            Промышленность
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_2} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <Link to="" className={cx(st.content_link)}>
                                            Промышленность
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_3} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <Link to="" className={cx(st.content_link)}>
                                            Промышленность
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_4} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <Link to="" className={cx(st.content_link)}>
                                            Промышленность
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hot;