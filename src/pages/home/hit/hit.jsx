import React from 'react'
import st from './hit.module.scss'
import cx from 'classnames'


import hit1 from '../../../img/hit_1.jpg'
import hit2 from '../../../img/hit_2.jpg'
import hit3 from '../../../img/hit_3.jpg'
import hit4 from '../../../img/hit_4.jpg'
import hit5 from '../../../img/hit_5.jpg'
import hit6 from '../../../img/hit_6.jpg'
import { HitCard } from '../../../components'
import {connect} from 'react-redux';

const Hit = ({lang}) => {

    const hitData = [
        {title:'Очень хороший бестселлер', to:'', img:hit1, link:'Radius'},
        {title:'Очень хороший бестселлер', to:'', img:hit2, link:'Atlas'},
        {title:'Очень хороший бестселлер', to:'', img:hit3, link:'Apple'},
        {title:'Очень хороший бестселлер', to:'', img:hit4, link:'Makro'},
        {title:'Очень хороший бестселлер', to:'', img:hit5, link:'Karzinka'},
        {title:'Очень хороший бестселлер', to:'', img:hit6, link:'Evos'}
    ]

    const cards = hitData.map((i, index) => (
        <HitCard  to={i.to} title={i.title} img={i.img} link={i.link} key={index} />        
    ))

    return (
        <div className={cx(st.hit)}>
            <div className={cx('container')}>
                <h1 className={cx('home_blog_title')}> {lang.lang.bestSeller} </h1>
                <div className={cx('row')}>
                    {cards}
                </div>
            </div>
        </div>
    );
}

const mstp = state => (state);

export default connect(mstp,null)(Hit);