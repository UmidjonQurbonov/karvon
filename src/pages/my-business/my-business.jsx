import React from 'react'
import st from './my-business.module.scss'
import cx from 'classnames'

import radius from '../../img/radius2.jpg';
import comment from '../../img/comment.svg';

const Radius = () => {

    return (
        <div className={cx(st.radius)}>
            <div className={cx('container')}>
                <AboutRadius />          
            </div>
        </div>
    );

};


export default Radius;


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

    return(
        <div>
            <div className={cx(st.rad)}>
                <img src={radius} alt="" className={cx(st.rad_img)} />
            </div>
            <div className={cx('row')}>
                <div className={cx('col-lg-9 col-md-6 my-2', st.loc)}>
                    <div className={cx(st.loc_box)}>
                        <h1 className={cx('home_blog_title', st.loc_h1)}>наша компания</h1>
                        <p className={cx(st.loc_p)}>Ниже можете ознакомиться полным списком всех торговых точек RADIUS Mobile:</p>
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
                            Если у вас есть вопросы по действующим акциям, товарам или работа магазина, то задавайте их и мы с радостью ответим.
                        </p>
                        <button className={cx(st.card_button)}>Задать вопрос</button>
                    </div>
                </div>
            </div>
            <div className={cx(st.location)}>
                
            </div>
        </div>
    )
}

