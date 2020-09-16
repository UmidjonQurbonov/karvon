import React from 'react'
import st from './footer.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom';

import headset from '../../img/headset.svg'


const Footer = () => {
    return (
        <div className={cx(st.footer)}>
            {podpis()}
            <div className={cx(st.main)}>
                <div className={cx('container px-5 px-md-0')}>
                    <div className={cx('row')}>
                        {location()}
                        {kompaniya()}              
                        {info()}
                        {akkount()}
                    </div>

                    <div className={cx(st.copy)}>
                        Copyright &copy; 2020. UMDSOFT
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;


const akkount = () => {

    const links = [
        {to:'', title:'Личная информация'},
        {to:'', title:'Заказы'},
        {to:'', title:'Кредитные слипы'},
        {to:'', title:'Адреса'},
        {to:'', title:'Мои списки желаний'}
        
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
                    <h1 className={cx(st.col_h1)}>Информация</h1>
                    {link}
                </div>
            </div>
        </div>
    )
}



const info = () => {

    const links = [
        {to:'', title:'Акции и спецпредложения'},
        {to:'', title:'Статьи'},
        {to:'', title:'Новости'},
        {to:'', title:'Услуги'},
        {to:'', title:'Оплата и доставка'},
        {to:'', title:'Гарантия'},
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
                    <h1 className={cx(st.col_h1)}>Информация</h1>
                    {link}
                </div>
            </div>
        </div>
    )
}





const kompaniya = () => {

    const links = [
        {to:'', title:'О компания'},
        {to:'', title:'Лицензии и сертификаты'},
        {to:'', title:'Вакансии'},
        {to:'', title:'Сотрудники'},
        {to:'', title:'Контакты'},
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
                    <h1 className={cx(st.col_h1)}>компания</h1>
                    {link}
                </div>
            </div>
        </div>
    )
}



const location = () => {
    return(
        <div className="col-md-3 col-sm-6">
            <div className={cx(st.location)}>
                <div className={cx(st.box)}>
                    <img src={headset} alt="" className={cx(st.box_img)}/>
                    <div className={cx(st.box_content)}>
                        <h1 className={cx(st.box_h1)}>Есть вопрос? Звоните нам 24/7!</h1>
                        <a href="tel:+998 91 3713156" className={cx(st.box_a)}>+998 91 3713156</a>
                    </div>
                </div>
                <a href="" className={cx(st.location_a)}>
                    <i className={cx(st.location_icon, 'fa fa-map-marked-alt')}></i>
                    Ташкент, улица Амира Темура 108
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
