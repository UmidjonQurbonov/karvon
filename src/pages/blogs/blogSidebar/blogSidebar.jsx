import React from 'react'
import st from './blogSidebar.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import { Sidebar, ReytingCard } from '../../../components'

import img1 from '../../../img/service_0.jpg'
import img2 from '../../../img/service_1.jpg'
import img3 from '../../../img/service_2.jpg'
import img4 from '../../../img/industry_3.jpg'

const BlogSidebar = () => {

    const blogData = [
        {img: img4, title: 'Lorem ipsum dolor sit amet consectetur.', vaqt: '2020.06.22', kSoni: 6541},
        {img: img3, title: 'Lorem ipsum dolor sit amet consectetur.', vaqt: '2020.08.2', kSoni: 2341},
        {img: img2, title: 'Lorem ipsum dolor sit amet consectetur.', vaqt: '2020.01.11', kSoni: 1141},
        {img: img1, title: 'Lorem ipsum dolor sit amet consectetur.', vaqt: '2020.08.16', kSoni: 22331},
        {img: img4, title: 'Lorem ipsum dolor sit amet consectetur.', vaqt: '2020.06.21', kSoni: 44441},
    ]

    const blogs = blogData.map((i, index) => (
        
        <Link to="" className={cx(st.box)} key={index}>
            <img src={i.img} alt="" className={cx(st.box_img, 'img-fluid')} />
            <div>
                <p className={cx(st.box_p)}>{i.title}</p>
                <div className={cx(st.box_div)}>
                    <span className={cx(st.box_span)}>
                        <i className={cx('far fa-clock mr-2')}></i>
                        {i.vaqt}
                    </span>
                    <span className={cx(st.box_span)}>
                        <i className={cx('fas fa-eye mr-2')}></i>
                        {i.kSoni}
                    </span>
                </div>
            </div>
        </Link>
        
    ))

    return (
        <div className={cx('row')}>
            <div className={cx('col-lg-3 col-md-6 col-sm-12')}>
                <div>
                    <Sidebar/>
                </div>
            </div>
            
            <div className={cx('col-lg-3 col-md-6 col-sm-12', st.padding)}>
                <div className={cx(st.card)}>
                    <ReytingCard img={img1} title="Услуги веб - и мобильного дизайна" to="" />
                </div>
            </div>
            <div className={cx('col-lg-3 col-md-6 col-sm-12')}>
                <div className={cx( st.col)}>
                    <div className={cx(st.col_in)}>
                        <div className={cx(st.card_2, st.mt)}>
                            <ReytingCard img={img2} title="Услуги веб - и мобильного дизайна" to="" />  
                        </div>    
                    </div>    
                    <div className={cx(st.col_in)}>
                        <div className={cx(st.card_2, st.mt)}>
                            <ReytingCard img={img3} title="Услуги веб - и мобильного дизайна" to="" />  
                        </div>    
                    </div>    
                </div>
            </div>
            <div className={cx('col-md-6 col-lg-3 col-sm-12', st.padding_2)}>
                <div className={cx(st.content, st.mt)} >
                    <h1 className={cx(st.content_h1)}><span>самые читаемые </span><i className={cx('fas fa-bookmark', st.content_h1_icon)}></i></h1>
                    {blogs}
                </div>
            </div>
            
        </div>
        
    );
}

export default BlogSidebar;