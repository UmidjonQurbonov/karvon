import React from 'react'
import st from './aksiya.module.scss'
import cx from 'classnames'

import {BlogCard} from '../../../components'

import img1 from '../../../img/aksi_1.jpg'
import img2 from '../../../img/aksi_2.jpg'
import img3 from '../../../img/aksi_3.jpg'

const Aksiya = () => {

    const aksiyaData = [
        {img:img1,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.0622', kSoni:4534, avtor:'Admin'},
        {img:img2,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.0622', kSoni:7564, avtor:'Admin'},
        {img:img3,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.0622', kSoni:1234, avtor:'Admin'},
    ]

    const cards = aksiyaData.map((i, index) => (
        <BlogCard to={i.to} title={i.title} img={i.img} sana={i.sana} kSoni={i.kSoni} avtor={i.avtor} key={index} />
    ))

    return (
       <div className={cx(st.aksiya)}>
           <div className={cx('container')}>
                <h1 className={cx('home_blog_title')}>акции</h1>
                <div className={cx('row')}>
                    {cards}
                </div>
           </div>
       </div> 
    );
}

export default Aksiya;
