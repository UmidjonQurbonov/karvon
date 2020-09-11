import React from 'react'
import st from './categori.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import img from '../../img/aksi_1.jpg'
import img2 from '../../img/aksi_2.jpg'
import img3 from '../../img/aksi_3.jpg'
import logo from '../../img/logo_2.svg'
import Slider from 'react-slick'




const Categori = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 2500,
        dots:true,
      };
    

    return (
        <div className={cx(st.cat)}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('d-md-block d-lg-none col-12 my-4')}>
                        <Slider {...settings}>
                            <div  className={cx(st.rek_link)}>
                                <img src={img} alt="" className={cx(st.rek_img, 'img-fluid')}/>
                            </div>
                            <div  className={cx(st.rek_link)}>
                                <img src={img2} alt="" className={cx(st.rek_img, 'img-fluid')}/>
                            </div>
                            <div  className={cx(st.rek_link)}>
                                <img src={img3} alt="" className={cx(st.rek_img, 'img-fluid')}/>
                            </div>
                        </Slider>
                    </div>
                    <div className={cx('d-none d-lg-block col-lg-3 ')}>
                        <div className={cx(st.rek)}>
                            <h1 className={cx(st.rek_title)}>реклама</h1>
                            <div className={cx(st.rek_box)}>
                                <div  className={cx(st.rek_link)}>
                                    <img src={img} alt="" className={cx(st.rek_img, 'img-fluid')}/>
                                </div>
                                <div  className={cx(st.rek_link)}>
                                    <img src={img2} alt="" className={cx(st.rek_img, 'img-fluid')}/>
                                </div>
                                <div  className={cx(st.rek_link)}>
                                    <img src={img3} alt="" className={cx(st.rek_img, 'img-fluid')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-9')}>
                        <div className={cx(st.card)}>
                            <div className={cx(st.card_box)}>
                                <img src={logo} alt="" className={cx(st.card_img)}/>
                            </div>
                            <div className={cx(st.card_content)}>
                                <div className={cx(st.card_title)}>
                                    <h1 className={cx(st.card_title_h1)}>Radius.uz - Сеть магазинов электроники, бесплатная доставка, рассрочка</h1>
                                    <div className={cx(st.card_title_star)}>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                    </div>
                                </div>
                                <div className={cx(st.card_container)}>
                                    <div className={cx(st.card_container_text)}>
                                        <p className={cx(st.card_p)}>О компании</p>
                                        <p className={cx(st.card_text)}>
                                        Цены представлены для ознакомления и не являются публичной офертой. Пожалуста, уточняйте точные цены перед по нумер:
                                        </p>
                                        <a href="tel:712003100" className={cx(st.card_tel)}>
                                            <i className={cx('fa fa-phone mr-2')}></i>
                                            71 200 31 00
                                        </a>
                                    </div>
                                    
                                    <Link to="" className={cx(st.card_link)}>
                                        Посмотреть  магазин
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={cx(st.card)}>
                            <div className={cx(st.card_box)}>
                                <img src={logo} alt="" className={cx(st.card_img)}/>
                            </div>
                            <div className={cx(st.card_content)}>
                                <div className={cx(st.card_title)}>
                                    <h1 className={cx(st.card_title_h1)}>Radius.uz - Сеть магазинов электроники, бесплатная доставка, рассрочка</h1>
                                    <div className={cx(st.card_title_star)}>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                        <i className={cx(st.star, 'fa fa-star')}></i>
                                    </div>
                                </div>
                                <div className={cx(st.card_container)}>
                                    <div className={cx(st.card_container_text)}>
                                        <p className={cx(st.card_p)}>О компании</p>
                                        <p className={cx(st.card_text)}>
                                        Цены представлены для ознакомления и не являются публичной офертой. Пожалуста, уточняйте точные цены перед по нумер:
                                        </p>
                                        <a href="tel:712003100" className={cx(st.card_tel)}>
                                            <i className={cx('fa fa-phone mr-2')}></i>
                                            71 200 31 00
                                        </a>
                                    </div>
                                    
                                    <Link to="" className={cx(st.card_link)}>
                                        Посмотреть  магазин
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categori;