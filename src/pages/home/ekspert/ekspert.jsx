import React from 'react'
import st from './ekspert.module.scss'
import cx from 'classnames'

import { BlogCard } from '../../../components'
import { connect } from 'react-redux';
import img from '../../../img/innov_1.jpg'
import img1 from '../../../img/innov_2.jpg'
import img2 from '../../../img/innovation.jpg'


const Ekspert = (props) => {

    const cardData = [
        {img:img,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.0622', kSoni:7551, avtor:'Admin'},
        {img:img1,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.0622', kSoni:3590, avtor:'Admin'},
        {img:img2,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.0622', kSoni:4534, avtor:'Admin'},
    ]

    const cards = cardData.map((i, index) => (
        <BlogCard to={i.to} title={i.title} img={i.img} sana={i.sana} kSoni={i.kSoni} avtor={i.avtor} key={index} />
    ))

    return (
        <div className={cx(st.ekspert)}>
            <div className={cx('container')}>
                <h1 className={cx('home_blog_title')}> {props.lang.lang.blogexpert} </h1>
                <div className={cx('row')}>
                    {cards}
                </div>
            </div>
        </div>
    );
}

const mstp = state => (state);

export default connect(mstp,null)(Ekspert);