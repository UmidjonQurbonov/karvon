import React from 'react'
import st from './my-business.module.scss'
import cx from 'classnames'

import radius from '../../img/radius2.jpg';
import comment from '../../img/comment.svg';
import productImg from './../../img/radius_product.jpg'
import ProductRadius from "./product_radius/product_radius.jsx";
import img from "../../img/radius_usb.png";
import img1 from "../../img/radius_usb.png";
import SidebarNews from "./sidebar/sidebarNews";
import { NavLink} from "react-router-dom";
import index from "../../components/header/header";

const MyBusiness = () => {

    return (
        <div className={cx(st.radius)}>
            <div className={cx('container')}>
                <AboutRadius/>
                <Links/>
            </div>
        </div>
    );
}

export default MyBusiness;


const AboutRadius = () => {

    const locations = [
        'RADIUS Kuyluk - 📍Мумтоз 5 Куйлюк (напротив ресторана "Chenson")',
        'RADIUS Mobiuz - 📍Главный офис Mobiuz',
        'RADIUS Malika - 📍TЦ "Флешка", магазин A-34 ("Малика")',
        'RADIUS Vega - 📍Vega Centre (Южный вокзал)',
        'RADIUS Farkhad - 📍Фархадский рынок, 30й магазин.',
        'RADIUS AhmadDonish – 📍Рынок "Ахмад Дониш" (главный вход)',
        'RADUIS Abai - 📍Пересечение проспекта Алишера Навои и ул.Абая ("Turonbank")',
        'RADIUS Antei - 📍Пересечение улиц Бирлашган и Бирлашган 2 («Антей»)'

    ];

    const location = locations.map((item, index) => (
        <div className={cx('col-lg-6', st.item)} key={index}>
            <p className={cx(st.item_p)}>{item}</p>
        </div>
    ))

    return (
        <div>
            <div className={cx(st.rad)}>
                <img src={radius} alt="" className={cx(st.rad_img)}/>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-lg-9 col-md-6 my-2', st.loc)}>
                    <div className={cx(st.loc_box)}>
                        <h1 className={cx('home_blog_title', st.loc_h1)}>наша компания</h1>
                        <p className={cx(st.loc_p)}>Ниже можете ознакомиться полным списком всех торговых точек RADIUS
                            Mobile:</p>
                        <div className={cx('row')}>
                            {location}
                        </div>
                    </div>
                </div>
                <div className={cx('col-lg-3 col-md-6 my-2')}>
                    <div className={cx(st.card)}>
                        <img src={comment} alt="" className={cx(st.card_img)}/>
                        <h5 className={cx(st.card_h5)}>Остались вопросы ?</h5>
                        <p className={cx(st.card_p)}>
                            Если у вас есть вопросы по действующим акциям, товарам или работа магазина, то задавайте их
                            и мы с радостью ответим.
                        </p>
                        <button className={cx(st.card_button)}>Задать вопрос</button>
                    </div>
                </div>
            </div>
            <div className={cx(st.location)}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.895214615808!2d69.27740401492467!3d41.31114310868207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQuNC8LiDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1599373249796!5m2!1sru!2s"
                    className={cx(st.location_iframe)}
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    )
}

const Links = () => {
    const products = [
        {img: productImg, title: 'MacBook Pro 2020', cost: 127758210, rate: 5},
        {img: productImg, title: 'MacBook Pro 2020', cost: 12458210, rate: 5},
        {img: productImg, title: 'MacBook Pro 2020', cost: 12458210, rate: 1},
        {img: productImg, title: 'MacBook Pro 2020', cost: 12458210, rate: 5},
        {img: productImg, title: 'MacBook Pro 2020', cost: 12458210, rate: 5},
        {img: productImg, title: 'MacBook Pro 2020', cost: 12458210, rate: 2},
        {img: productImg, title: 'MacBook Pro 2020', cost: 12458210, rate: 4}
    ]

    const productsView = products.map((item, i) => {
        return (<ProductRadius img={item.img} title={item.title} cost={item.cost} rate={item.rate} key={i}/>
        )
    });

    const addProduct = (
    <div className={cx('col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 pl-md-0 ml-xs-5 ml-md-0')}>
        <div className={cx(st.add_card,'text-center py-5')}>
        <div className={cx(st.add_icon,'mt-3')}>
            <i className={cx('fas fa-plus fa-5x')}></i>
        </div>
        <div className={cx(st.add_title, 'py-3 pb-4')}>
            <a href='#' className={cx(st.add_title_link)}>Add product</a>

        </div>
        </div>
    </div>
);
    const cardData = [
        {img:img,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.06.22', kSoni:7551, avtor:'Admin'},
        {img:img1,title:'Законодатели оставили школьников без обедов', to:"/", sana:'2020.06.22', kSoni:3590, avtor:'Admin'},
      ];

    const cards = cardData.map((i, index) => (
        <SidebarNews to={<i className="to"></i>} title={i.title} img={i.img} sana={i.sana} kSoni={i.kSoni} avtor={i.avtor} key={index} />
    ));

    const links = [
        {title: "Ma'lumotlar",to:'/contact'},
        {title: "Shikoyatlar", to: '/contact'},
        {title: "Reyting", to:'/reyting'},
        {title: "Aksiya e'lon qilish", to:'/service'},
        {title: "Mahsulot qo'shish", to:'/service'},
        {title: "Hamkorlar", to:'/blog'}
    ];

    const linksView = links.map((item, id) => (
         <div className={cx(st.link)} key={id}>
             <NavLink to={item.to} >
                 {item.title}
             </NavLink>
         </div>
    ));


    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col-md-9 col-sm-12')}>
                    <div className={cx(st.navigation, 'row', 'text-uppercase')}>
                        <div className={cx(st.navigation_link, st.selected)}>
                            Новинка
                        </div>

                        <div className={cx(st.navigation_link)}>
                            Распрадажа
                        </div>

                        <div className={cx(st.navigation_link)}>
                            Хит продаж
                        </div>
                        <div className={cx(st.navigation_link)}>
                            Мы Рекомендуем
                        </div>
                    </div>
                    <div className={cx(st.products, 'row', 'mt-md-3')}>
                        {productsView}
                        {addProduct}
                    </div>

                </div>
                <div className={cx('col-md-3 col-12')}>
                    <div className={cx(st.sidebar, 'text-uppercase')}>
                        Sidebar
                    </div>
                    <div>
                        {linksView}
                    </div>
                    <div className={cx('row')}>
                        {cards}
                    </div>
                    </div>
            </div>
        </div>
    )
};


