import React from 'react'
import st from './hot.module.scss'
import cx from 'classnames'

import service from '../../../img/it_service.jpg'
import ind_1 from '../../../img/industry_1.jpg'
import ind_2 from '../../../img/industry_2.jpg'
import ind_3 from '../../../img/industry_3.jpg'
import ind_4 from '../../../img/industry_4.jpg'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';


const Hot = (props) => {

    const { lang } = props.lang;

    return (
        <div className={cx(st.hot)}>
            <div className={cx('container')}>
                <h1 className={cx('home_blog_title')}> { lang.bloghome } </h1>
                <div className={cx('row')}>
                    <div className={cx('col-md-6 col-sm-12')}>
                        <div className={cx(st.box)}>
                            <img src={service} alt="" className={cx('img-fluid', st.img)}/>
                            <div className={cx(st.content)}>
                                <h1 to="" className={cx(st.content_link)}>
                                    Сервисы
                                </h1>
                                <Link to="" className={cx(st.content_h1)}>
                                    "ИТ-ГРАД" представил партнерскую программу для физических лиц
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx(st.ind_col,'col-sm-12 col-md-6')}>
                        <div className={cx('row')}>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_1} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <h1 className={cx(st.content_link)}>
                                            Промышленность
                                        </h1>
                                        <Link className={cx(st.content_h2)} to="">
                                            "ИТ-ГРАД" представил партнерскую программу для физических лиц
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_2} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <h1 className={cx(st.content_link)}>
                                            Промышленность
                                        </h1>
                                        <Link to="" className={cx(st.content_h2)}>
                                            "ИТ-ГРАД" представил партнерскую программу для физических лиц
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
                                        <h1  className={cx(st.content_link)}>
                                            Промышленность
                                        </h1>
                                        <Link to="" className={cx(st.content_h2)}>
                                            "ИТ-ГРАД" представил партнерскую программу для физических лиц
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-sm-6')}>
                                <div className={cx(st.box)}>
                                    <img src={ind_4} alt="" className={cx('img-fluid', st.img)}/>
                                    <div className={cx(st.content, st.content_2)}>
                                        <h1 className={cx(st.content_link)}>
                                            Промышленность
                                        </h1>
                                        <Link to="" className={cx(st.content_h2)}>
                                            "ИТ-ГРАД" представил партнерскую программу для физических лиц
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

const mstp = state => (state);

export default connect(mstp,null)(Hot);