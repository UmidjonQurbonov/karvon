import React from 'react'
import st from './popular.module.scss'
import cx from 'classnames'

import { ReytingCard } from '../../../components'

import img1 from '../../../img/radius1.jpg'
import img2 from '../../../img/radius.jpg'
import img3 from '../../../img/media.jpg'
import img4 from '../../../img/industry_3.jpg'
import img5 from '../../../img/industry_1.jpg'
import img6 from '../../../img/industry_2.jpg'

import { connect } from 'react-redux';

const Popular = ({lang}) => {
    
    const cardDate = [
        {img:img1, to:"", title:'Услуги веб - и мобильного дизайн'},
        {img:img2, to:"", title:'Услуги веб - и мобильного дизайн'},
        {img:img3, to:"", title:'Услуги веб - и мобильного дизайн'},
        {img:img4, to:"", title:'Услуги веб - и мобильного дизайн'},
        {img:img5, to:"", title:'Услуги веб - и мобильного дизайн'},
        {img:img6, to:"", title:'Услуги веб - и мобильного дизайн'},
        
    ]

    const card = cardDate.map((item, index) => (
        <div className={cx('col-sm-6 col-md-4')} key={index}>
            <div style={{height:'22rem', width:'100%', margin:'1rem 0'}}>
                <ReytingCard to={item.to} img={item.img} title={item.title} />
            </div>
        </div>
    ))
    
    return (
        <div className={cx(st.popular)}>
            <div className={cx('container')}>
                <h1 className={cx('home_blog_title')}>  {lang.lang.popularServices} </h1>
                <div className={cx('row')}>
                    {card}
                </div>
            </div>
        </div>
    );
}

const mstp = state => (state)

export default connect(mstp,null)(Popular);