import React from 'react'
import st from './partner.module.scss'
import cx from 'classnames'



import  logo1 from '../../img/logo_1.svg'
import  logo2 from '../../img/logo_2.svg'
import  logo3 from '../../img/logo_3.svg'
import  logo4 from '../../img/logo_4.svg'

import Slider from 'react-slick'
import { connect } from 'react-redux'

const Partner = (props) => {

    const logos = [
        logo1, logo2, logo3, logo4
    ]


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 2500,
        
      };

      const logo = logos.map((i, index) => (
        <img src={i} alt="" className={cx(st.logo, 'img-fluid')} key={index}/> 
      ))
    

    return (
       <div className={cx(st.partner)}>
           <div className={cx('container')}>
                <h1 className={cx(st.h1)}> {props.lang.lang.partners} </h1>
                <Slider {...settings}>
                    {logo}
                </Slider>
                
           </div>
       </div> 
    );
}

const mstp = state => (state)

export default connect(mstp,null)(Partner);


