import React from 'react'
import st from './blogs.module.scss'
import cx from 'classnames'
import BlogSidebar from './blogSidebar/blogSidebar';

import { BlogCard, Partner } from '../../components';

import radius from '../../img/radius2.jpg'
import img1 from '../../img/industry_2.jpg'
import img2 from '../../img/industry_1.jpg'
import img3 from '../../img/innov_1.jpg'


const Blogs = () => {

    const cardData = [
        {sana: 7564, img: img1, title: 'Цифровая трансформация для госслужащих началась по всей стране', avtor:'Admin', kSoni: 2001, to:'/blogs/12', },
        {sana: 7564, img: img2, title: 'Цифровая трансформация для госслужащих началась по всей стране', avtor:'Admin', kSoni: 2001, to:'/blogs/12', },
        {sana: 7564, img: img3, title: 'Цифровая трансформация для госслужащих началась по всей стране', avtor:'Admin', kSoni: 2001, to:'/blogs/12', },
        
    ]

    const cards = cardData.map((i, index) => (
        <BlogCard img={i.img} title={i.title} sana={i.sana} avtor={i.avtor} kSoni={i.kSoni} to={i.to} key={index} />
    ))

    return (
        <div className={cx(st.blogs)}>
            <div className={cx('container')}>
                <BlogSidebar />
                <div className={cx(st.box)}>
                    <img src={radius} alt="" className={cx(st.box_img)}/>
                </div>
                <h1 className={cx('home_blog_title')}>рубрика</h1>
                <div className={cx('row')}>
                    {cards}
                    {cards}
                </div>
                <Partner />
            </div>
        </div>
    );
}

export default Blogs;