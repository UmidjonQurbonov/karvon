import React from 'react'
import st from './footer.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import headset from '../../img/headset.svg'


const Footer = (props) => {

    const lang = props.lang.lang;

    return (
        <div className={cx(st.footer)}>
            {podpis()}
            <div className={cx(st.main)}>
                <div className={cx('container px-5 px-md-0')}>
                    <div className={cx('row')}>
                        {location(lang)}
                        {kompaniya(lang)}              
                        {info(lang)}
                        {akkount(lang)}
                    </div>

                    <div className={cx(st.copy)}>
                        Copyright &copy; 2020. UMDSOFT
                    </div>
                </div>
            </div>
        </div>
    );
}

const mstp = state => (state);

export default connect(mstp,null)(Footer);


const akkount = (lang) => {

    const links = [
        {to:'', title:lang.personalInfo},
        {to:'', title:lang.orders},
        {to:'', title:lang.credit},
        {to:'', title:lang.addreses},
        {to:'', title:lang.wishlist}
        
    ]

    const link = links.map((i, index) => (
        <Link to={i.to} className={cx(st.col_link)} key={index}>
            {i.title}
        </Link>
    ))

    return(
        <div className={cx('col-sm-6 col-md-3')}>
            <div className={cx(st.all)}>
                <div className={cx(st.col)}>
                    <h1 className={cx(st.col_h1)}> {lang.info} </h1>
                    {link}
                </div>
            </div>
        </div>
    )
}



const info = (lang) => {

    const links = [
        {to:'', title:lang.promotions},
        {to:'', title:lang.articles},
        {to:'', title:lang.news},
        {to:'', title:lang.service},
        {to:'', title:lang.payment},
        {to:'', title:lang.guarante},
    ]

    const link = links.map((i, index) => (
        <Link to={i.to} className={cx(st.col_link)} key={index}>
            {i.title}
        </Link>
    ))

    return(
        <div className={cx('col-sm-6 col-md-3')}>
            <div className={cx(st.info, st.all)}>
                <div className={cx(st.col)}>
                    <h1 className={cx(st.col_h1)}> {lang.info} </h1>
                    {link}
                </div>
            </div>
        </div>
    )
}





const kompaniya = (lang) => {

    const links = [
        {to:'', title:lang.companyInfo},
        {to:'', title:lang.certificate},
        {to:'', title:lang.vacancis},
        {to:'', title:lang.partners},
        {to:'', title:lang.contact},
    ]

    const link = links.map((i, index) => (
        <Link to={i.to} className={cx(st.col_link)} key={index}>
            {i.title}
        </Link>
    ))

    return(
        <div className={cx('col-sm-6 col-md-3')}>
            <div className={cx(st.all)}>
                <div className={cx(st.col)}>
                    <h1 className={cx(st.col_h1)}>{lang.company}</h1>
                    {link}
                </div>
            </div>
        </div>
    )
}



const location = (lang) => {
    return(
        <div className="col-md-3 col-sm-6">
            <div className={cx(st.location)}>
                <div className={cx(st.box)}>
                    <img src={headset} alt="" className={cx(st.box_img)}/>
                    <div className={cx(st.box_content)}>
                        <h1 className={cx(st.box_h1)}> {lang.support} </h1>
                        <a href="tel:+998 91 3713156" className={cx(st.box_a)}>+998 91 3713156</a>
                    </div>
                </div>
                <a href="" className={cx(st.location_a)}>
                    <i className={cx(st.location_icon, 'fa fa-map-marked-alt')}></i>
                    {lang.addressFooter}
                </a>
                <a href="" className={cx(st.location_a)}>
                    <i className={cx(st.location_icon, 'fa fa-envelope')}></i>
                    www.info@elezona.uz
                </a>
                <a href="" className={cx(st.location_a)}>
                    <i className={cx(st.location_icon, 'fa fa-phone-alt')}></i>
                    +998 71 258 36 96
                </a>
            </div>
        </div>
    )
}






const podpis = () => {
    return(
        <div className={cx(st.podpis)}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-md-5')}>
                        <div className={cx(st.podpis_box)}>
                            <div className={cx(st.podpis_icon_box)}>
                                <i className={cx('fas fa-envelope-open-text', st.podpis_i)}></i>
                            </div>
                            <div>
                                <h1 className={cx(st.podpis_h1)}>
                                    Подпишитесь на нашу рассылку новостей
                                </h1>
                                <p className={cx(st.podpis_p)}>
                                    Получить наши последние новости и специальные продажа
                                </p>
                            </div>
                        </div>    
                    </div>
                    <div className={cx('col-md-7')}>
                        <div className={cx('row h-100  align-items-center')}>
                            <div className={cx('col-sm-8')}>
                                <form>
                                    <div className={cx('input-group my-2')}>
                                        <input type="email" placeholder="Your email address" className={cx(st.podpis_input, 'form-control')} required />
                                        <div className={cx('input-group-append ')}>
                                            <a href="" className={cx(st.podpis_podpis)}>
                                                подписываться
                                            </a>
                                        </div>    
                                    </div>
                                </form>
                            </div>
                            <div className={cx('col-sm-4 my-2')}>
                                <div className={cx(st.podpis_content)}>
                                    <a href="" className={cx(st.link)}>
                                        <i className={cx(st.i, 'fab fa-instagram')}></i>
                                    </a>
                                    <a href="" className={cx(st.link)}>
                                        <i className={cx(st.i, 'fab fa-telegram')}></i>
                                    </a>
                                    <a href="" className={cx(st.link)}>
                                        <i className={cx(st.i, 'fab fa-whatsapp')}></i>
                                    </a>
                                    <a href="" className={cx(st.link)}>
                                        <i className={cx(st.i, 'fab fa-youtube')}></i>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
