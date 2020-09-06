import React from 'react'
import st from './hit_card.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'


const HitCard = ({to, title, img, link}) => {
    return (
        <div className={cx('col-md-4 col-sm-6')}>
            <div className={cx(st.card)}>
                <img src={img} alt="" className={cx(st.card_img ,'w-100 h-100')}/>
                <div className={cx(st.box)}>
                    <h5 className={cx(st.box_h5)}>{title}</h5>
                    <div className={cx(st.content)}>
                        <i className={cx(st.content_i, 'fas fa-star')}></i>
                        <i className={cx(st.content_i, 'fas fa-star')}></i>
                        <i className={cx(st.content_i, 'fas fa-star')}></i>
                        <i className={cx(st.content_i, 'fas fa-star')}></i>
                        <i className={cx(st.content_i, 'fas fa-star')}></i>
                    </div>
                    <Link to={to} className={cx(st.box_link)}>{link}</Link>
                </div>
            </div>
        </div>
    );
}

export default HitCard;