import React from 'react'
import st from './blog_card.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import {  connect } from 'react-redux';

const BlogCard = ({img, title, avtor, sana, kSoni, to , lang}) => {


    return (
        <div className={cx('col-md-4')}>    
            <div className={st.card}>
                <div className={cx(st.card_header)}>
                    <img src={img} alt="" className={cx(st.card_img,'img-fluid w-100 h-100')}/>
                </div>
                <div className={cx(st.card_title)}>
                    <Link to={to} className={cx(st.card_title_link)}>{title}</Link>
                    <div className={cx(st.content)}>
                        <span className={cx(st.content_span)}>
                            <span className={cx(st.avtor)}> {lang.lang.author} :</span>{avtor}
                        </span>
                        <span className={cx(st.content_span)}>
                            {sana}
                        </span>
                        <span className={cx(st.content_span)}>
                            <i className={cx('fas fa-eye', st.eye)}></i>
                            {kSoni}
                        </span>
                    </div>
                </div>
                <div className={cx(st.text)}>
                    <p className={cx(st.text_p)}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum architecto adipisci sed? Vero, velit ipsum? Porro exercitationem totam quaerat perspiciatis culpa quod eveniet quibusdam? Itaque, deserunt? Ullam, ducimus repellendus.
                    </p>
                </div>
                <div>
                    <Link to={to} className={cx(st.link)}>
                        { lang.lang.reedMore }
                    </Link>
                </div>
            </div>
        </div>

    );
}

const mstp = state => (state);

export default connect(mstp,null)(BlogCard);