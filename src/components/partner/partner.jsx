import React from 'react'
import st from './partner.module.scss'
import cx from 'classnames'



import  logo1 from '../../img/logo_1.svg'
import  logo2 from '../../img/logo_2.svg'
import  logo3 from '../../img/logo_3.svg'
import  logo4 from '../../img/logo_4.svg'
import  logo5 from '../../img/logo_5.jpg'
import Slider from 'react-slick'

const Partner = () => {

    const logos = [
        logo1, logo2, logo3, logo4, logo5
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
        <div className={cx(st.box)} key={index}>
            <img src={i} alt="" className={cx(st.logo, 'img-fluid')}/> 
        </div>
      ))
    

    return (
       <div className={cx(st.partner)}>
           <div className={cx('container')}>
                <h1 className={cx(st.h1)}>наши партнеры</h1>
                <Slider {...settings}>
                    {logo}
                </Slider>
                
           </div>
       </div> 
    );
}

export default Partner;


